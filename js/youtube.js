import { itemService,
         domService,
         itemWidth,
         itemRightMargin,
         youtubeApiKey,
         minSwipeLength } from './app';

export class Youtube {
    constructor() {
        const paging = document.getElementById('paging');
        this.results = document.getElementById('results');
        const body = document.body;
        this.snippet = null;
        this.statistics = null;
        this.container = document.getElementById('container');

        // Detection of mousedown and touchstart events
        this.addMultipleListeners(body, 'mousedown touchstart', (event) => {
            const target = event.target.tagName.toUpperCase();
            if (target !== 'INPUT' && target !== 'BUTTON') {
                body.style.cursor = 'pointer';
                this.swipeStart();
            }
        });

        // Detection of mousemove and touchmove events
        this.addMultipleListeners(body, 'mousemove touchmove', () => {
            this.swipeMove();
        });

        // Detection of mouseup and touchend events
        this.addMultipleListeners(window, 'mouseup touchend', (event) => {
            const target = event.target.tagName.toUpperCase();
            if (target !== 'INPUT' && target !== 'BUTTON') {
                body.style.cursor = 'default';
                this.swipeEnd();
            }
        });

        // Detection mousedown of tooltip
        paging.addEventListener('mousedown', (event) => {
            if (event.target.tagName.toUpperCase() === 'INPUT') {
                event.target.value = event.target.id;
            }
        });

        // Detection mouseout of tooltip
        paging.addEventListener('mouseout', (event) => {
            if (!event.target.hasAttribute('class', 'active')) {
                event.target.value = '';
            }
        });

        // Click event for pagination
        paging.addEventListener('click', (event) => {
            if (event.target.tagName.toUpperCase() === 'INPUT') {
                const itemsPerPage = itemService.itemsPerPage;
                const page = +event.target.id;
                const translate = -(itemsPerPage * itemWidth) * (page - 1);
                const length = itemService.snippet.length;

                if (-translate >= length * itemWidth) {
                    return;
                }

                itemService.translate = -(itemService.itemsPerPage * itemWidth) * (page - 1);
                itemService.currentPage = page;

                this.results.style.transform = `translate3d(${itemService.translate}px,0,0)`;

                const quadrupleItemsForPage = itemsPerPage * 4;

                if (-itemService.translate >= (length - quadrupleItemsForPage) * itemWidth - itemRightMargin) {
                    this.afterLoadFromYoutubeApi();
                }

                domService.clearPaging();
                domService.displayPaging();
                domService.showActivePaging();
            }
        });

        // Event for detection resizing
        window.onresize = () => {
            const screenWidth = document.documentElement.clientWidth;
            itemService.detectItemsPerPage(screenWidth, itemService.itemsPerPage, this.container)

            if (itemService.snippet) {
                const translate = -itemService.translate;
                const itemsPerPage = itemService.itemsPerPage;
                itemService.currentPage = Math.ceil(translate / (itemWidth * itemsPerPage) + 1);
                domService.clearPaging();
                domService.displayPaging();
                domService.showActivePaging();
            }
        };

        // Event to init app
        window.onload = () => {
            gapi.client.setApiKey(youtubeApiKey);
            gapi.client.load('youtube', 'v3', () => {
                const button = document.getElementById('submit');
                button.removeAttribute('disabled');
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
            q: itemService.search,
            maxResults: 16,
            order: 'viewCount'
        }).then((response) => {
            const results = response.result;
            this.snippet = results.items;
            itemService.snippet = itemService.snippet.concat(this.snippet);
            itemService.token = results.nextPageToken;
            itemService.idsForStatistics = '';

            const ids = [];
            results.items.forEach((item) => {
                ids.push(item.id.videoId);
            });

            itemService.idsForStatistics = ids.join(',');

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
        const translateLX = -(itemsPerPage * itemWidth);
        const translate = itemService.translate + translateLX;
        const length = itemService.snippet.length;

        if (-translate >= length * itemWidth) {
            this.results.style.transform = `translate3d(${itemService.translate}px,0,0)`;
            return;
        }

        itemService.translate += translateLX;
        this.results.style.transform = `translate3d(${itemService.translate}px,0,0)`;

        itemService.currentPage++;

        const doubleItemsForPage = itemsPerPage * 2;

        if (-itemService.translate >= (length - doubleItemsForPage) * itemWidth - itemRightMargin) {
            this.afterLoadFromYoutubeApi();
        }
        domService.clearPaging();
        domService.displayPaging();
        domService.showActivePaging();
    }

    swipeRight() {
        if (itemService.translate >= 0) {
            this.results.style.transform = `translate3d(0, 0, 0)`;
            itemService.translate = 0;
            return;
        }

        if (itemService.currentPage === 2) {
            this.results.style.transform = `translate3d(0, 0, 0)`;
            itemService.translate = 0;
            itemService.currentPage = 1;
            domService.clearPaging();
            domService.displayPaging();
            domService.showActivePaging();
            return;
        }

        const translateRX = itemService.itemsPerPage * itemWidth;
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
        if (this.touchStartCoords) {
            event = event ? event : window.event;
            const translate = event.pageX - this.touchStartCoords;
            this.results.style.transform = `translate3d(${itemService.translate + translate}px,0,0)`;
        }  
    }

    // Method for detection end of swipe
    swipeEnd(event) {
        event = event ? event : window.event;
        event = ('changedTouches' in event) ? event.changedTouches[0] : event;

        if (!this.touchStartCoords) {
            this.touchEndCoords = 0;
        } else {
            this.touchEndCoords = event.pageX - this.touchStartCoords;
        }
        
        this.direction = (this.touchEndCoords < 0) ? 'left' : 'right';
        if (Math.abs(this.touchEndCoords) <= minSwipeLength) {
            this.direction = 'current'
        }
           
        switch (this.direction) {
            case 'left':
                this.swipeLeft();
                break;
            case 'right':
                this.swipeRight();
                break;
            case 'current':
                this.results.style.transform = `translate3d(${itemService.translate}px,0,0)`;
                break;
            default:
                break;    
        }
        this.touchStartCoords = 0;
        this.touchEndCoords = 0;
    }

    // Method for adding multiple events
    addMultipleListeners(element, events, handler) {
        const eventsArray = events.split(' ');
        eventsArray.forEach((item, index) => {
            element.addEventListener(eventsArray[index], handler, false);
        });
    }
}
