import { domService } from './app';

// Class for primary loading data and working with data
export default class ItemService {
    constructor() {
        // Collection of ids for futher request for statistics
        this.idsForStatistics = '';
        this.results = document.getElementById('results');
        this.sumbit = document.getElementById('submit');
        this.snippet = null;
        this.statistics = null;
        this.container = document.getElementById('container');

        // Event for primary loading data
        this.sumbit.addEventListener('click', (event) => {
            event.preventDefault();
            domService.clearItems();
            domService.clearPaging();
            this.results.style.transform = `translate3d(${0}px,0,0)`;
            this.screenWidth = document.documentElement.clientWidth;
            this.search = document.getElementById('search').value;
            this.translate = 0;

            // Detection screen width and setting count of items for page
            if (this.screenWidth >= 1500) {
                this.itemsPerPage = 4;
                this.container.style.width = '1400px';
            } else if (this.screenWidth >= 1120) {
                this.itemsPerPage = 3;
                this.container.style.width = '1040px';
            } else if (this.screenWidth >= 750) {
                this.itemsPerPage = 2;
                this.container.style.width = '680px';
            } else {
                this.itemsPerPage = 1;
                this.container.style.width = '320px';
            }
            this.currentPage = 1;

            // request for items
            gapi.client.youtube.search.list({
                part: 'snippet',
                type: 'video',
                q: encodeURIComponent(this.search).replace(/%20/g, '+'),
                maxResults: 20,
                order: 'viewCount'
            }).then((response) => {
                const results = response.result;
                this.snippet = results.items;
                this.token = results.nextPageToken;

                results.items.forEach((item) => {
                    this.idsForStatistics += item.id.videoId + ',';
                });

                const ids = this.idsForStatistics;
                // Remove the last comma
                this.idsForStatistics = ids.slice(0, ids.length - 1);

                // request for statistics
                gapi.client.youtube.videos.list({
                    part: 'statistics',
                    id: this.idsForStatistics
                }).then((response) => {
                    const results = response.result;
                    this.statistics = results.items;

                    domService.displayItems(this.snippet, this.statistics);
                    domService.displayPaging();
                    domService.showActivePaging();
                });
            });
            this.idsForStatistics = '';
            document.getElementById('search').value = '';
        });
    }
}
