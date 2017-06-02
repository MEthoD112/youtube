import { itemService, domService  } from './app';

export default class Youtube {
    constructor() {
        const paging = document.getElementById('paging');
        this.results = document.getElementById('results');
        const body = document.body;
        this.snippet = null;
        this.statistics = null;

        // Detection of mousedown and touchstart events
        this.addMultipleListeners(body, 'mousedown touchstart', (event) => {
            const target = event.target.tagName.toUpperCase();
            if (target === 'INPUT' || target === 'BUTTON') {
                return;
            }
            this.swipeStart();
        });

        // Detection of mousemove and touchmove events
        this.addMultipleListeners(body, 'mousemove touchmove', () => {
            this.swipeMove();
        });

        // Detection of mouseup and touchend events
        this.addMultipleListeners(body, 'mouseup touchend', (event) => {
            const target = event.target.tagName.toUpperCase();
            if (target === 'INPUT' || target === 'BUTTON') {
                return;
            }
            this.swipeEnd();
        });

        // Detection mousedown of tooltip
        paging.addEventListener('mousedown', (event) => {
            if (event.target.tagName.toUpperCase() !== 'INPUT') {
                return;
            }
            event.target.value = event.target.id;
        });

        // Detection mouseout of tooltip
        paging.addEventListener('mouseout', (event) => {
            if (event.target.tagName.toUpperCase() !== 'INPUT') {
                return;
            }
            if (event.target.style.background !== 'red') {
                event.target.value = '';
            }
        });

        // Click event for pagination
        paging.addEventListener('click', (event) => {
            if (event.target.tagName.toUpperCase() !== 'INPUT') {
                return;
            }

            const itemsPerPage = itemService.itemsPerPage;
            const page = +event.target.id;
            const translate = -(itemsPerPage * 360) * (page - 1);
            const length = itemService.snippet.length;

            if (-translate >= length * 360) {
                return;
            }

            itemService.translate = -(itemService.itemsPerPage * 360) * (page - 1);
            itemService.currentPage = page;

            this.results.style.transform = `translate3d(${itemService.translate}px,0,0)`;

            const quadrupleItemsForPage = itemsPerPage * 4;

            if (-itemService.translate >= (length - quadrupleItemsForPage) * 360 - 40) {
                this.afterLoadFromYoutubeApi();
            }

            domService.clearPaging();
            domService.displayPaging();
            domService.showActivePaging();
        });

        // Event for detection resizing
        window.onresize = () => {
            const screenWidth = document.documentElement.clientWidth;
            const container = document.getElementById('container');

            if (screenWidth >= 1500) {
                itemService.itemsPerPage = 4;
                container.style.width = '1400px';
            } else if (screenWidth >= 1120) {
                itemService.itemsPerPage = 3;
                container.style.width = '1040px';
            } else if (screenWidth >= 750) {
                itemService.itemsPerPage = 2;
                container.style.width = '680px';
            } else {
                itemService.itemsPerPage = 1;
                container.style.width = '320px';
            }
            if (itemService.snippet) {
                const translate = -itemService.translate;
                const itemsPerPage = itemService.itemsPerPage;
                itemService.currentPage = Math.ceil(translate / (360 * itemsPerPage) + 1);
                domService.clearPaging();
                domService.displayPaging();
                domService.showActivePaging();
            }
        };

        // Event to init app
        window.onload = () => {
            gapi.client.setApiKey('AIzaSyDVrg2_HtQOEIOk_jdcHnIsH99xRiIrge8');
            gapi.client.load('youtube', 'v3', () => {
                const button = document.getElementById('submit');
                button.removeAttribute('disabled');
                console.log('api is ready');
            });
        };
    }

    // Method for after load data from youtube api
    afterLoadFromYoutubeApi() {
        // Request for items
        gapi.client.youtube.search.list({
            pageToken: itemService.token,
            part: 'snippet',
            type: 'video',
            q: encodeURIComponent(itemService.search).replace(/%20/g, '+'),
            maxResults: 16,
            order: 'viewCount'
        }).then((response) => {
            const results = response.result;
            this.snippet = results.items;
            itemService.snippet = itemService.snippet.concat(this.snippet);
            itemService.token = results.nextPageToken;
            itemService.idsForStatistics = '';

            results.items.forEach((item) => {
                itemService.idsForStatistics += item.id.videoId + ',';
            });

            const ids = itemService.idsForStatistics;
            // Remove the last comma
            itemService.idsForStatistics = ids.slice(0, ids.length - 1);

            // Request for statistics
            gapi.client.youtube.videos.list({
                part: 'statistics',
                id: itemService.idsForStatistics
            }).then((response) => {
                const results = response.result;
                this.statistics = results.items;
                domService.displayItems(this.snippet, this.statistics);
            });
        });
    }

    swipeLeft() {
        const itemsPerPage = itemService.itemsPerPage;
        const translateLX = -(itemsPerPage * 360);
        const translate = itemService.translate + translateLX;
        const length = itemService.snippet.length;

        if (-translate >= length * 360) {
            this.results.style.transform = `translate3d(${itemService.translate}px,0,0)`;
            return;
        }

        itemService.translate += translateLX;
        this.results.style.transform = `translate3d(${itemService.translate}px,0,0)`;

        itemService.currentPage++;

        const doubleItemsForPage = itemsPerPage * 2;

        if (-itemService.translate >= (length - doubleItemsForPage) * 360 - 40) {
            this.afterLoadFromYoutubeApi();
        }
        domService.clearPaging();
        domService.displayPaging();
        domService.showActivePaging();
    }

    swipeRight() {
        if (itemService.translate >= 0) {
            this.results.style.transform = 'translate3d(0px,0,0)';
            itemService.translate = 0;
            return;
        }

        if (itemService.currentPage === 2) {
            this.results.style.transform = 'translate3d(0px,0,0)';
            itemService.translate = 0;
            itemService.currentPage = 1;
            domService.clearPaging();
            domService.displayPaging();
            domService.showActivePaging();
            return;
        }

        const translateRX = itemService.itemsPerPage * 360;
        itemService.translate += translateRX;
        this.results.style.transform = `translate3d(${itemService.translate}px,0,0)`;

        itemService.currentPage--;

        domService.clearPaging();
        domService.displayPaging();
        domService.showActivePaging();
    }

    // Method for detection start of swipe
    swipeStart(event) {
        event = event ? event : window.event;
        event = ('changedTouches' in event) ? event.changedTouches[0] : event;
        this.touchStartCoords = event.pageX;
    }

    // Method for detection move of swipe
    swipeMove(event) {
        if (!this.touchStartCoords) return;
        event = event ? event : window.event;
        const translate = event.pageX - this.touchStartCoords;
        this.results.style.transform = `translate3d(${itemService.translate + translate}px,0,0)`;
        event.preventDefault();
    }

    // Method for detection end of swipe
    swipeEnd(event) {
        event = event ? event : window.event;
        event = ('changedTouches' in event) ? event.changedTouches[0] : event;
        this.touchEndCoords = event.pageX - this.touchStartCoords;
        this.direction = (this.touchEndCoords < 0) ? 'left' : 'right';
        if (Math.abs(this.touchEndCoords) >= 1) {
            switch (this.direction) {
            case 'left':
                this.swipeLeft();
                break;
            case 'right':
                this.swipeRight();
                break;
            default:
                break;    
            }
        }
        this.touchStartCoords = null;
    }

    // Method for adding multiple events
    addMultipleListeners(element, events, handler) {
        const eventsArray = events.split(' ');
        eventsArray.forEach((item, index) => {
            element.addEventListener(eventsArray[index], handler, false);
        });
    }
}
