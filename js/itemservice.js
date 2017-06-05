import { domService,
         screenWidthForFourItems, 
         screenWidthForTreeItems, 
         screenWidthForTwoItems,
         containerWidthForFourItems,
         containerWidthForTreeItems,
         containerWidthForTwoItems,
         containerWidthForOneItem } from './app';

// Class for primary loading data and working with data
export class ItemService {
    constructor() {
        // Collection of ids for futher request for statistics
        this.idsForStatistics = null;
        this.results = document.getElementById('results');
        this.sumbit = document.getElementById('submit');
        this.snippet = null;
        this.statistics = null;

        // Event for primary loading data
        this.sumbit.addEventListener('click', (event) => {
            event.preventDefault();
            domService.clearItems();
            domService.clearPaging();
            this.results.style.transform = `translate3d(0, 0, 0)`;
            this.screenWidth = document.documentElement.clientWidth;
            this.container = document.getElementById('container');
            this.search = document.getElementById('search').value;
            this.translate = 0;
            this.currentPage = 1;
            const itemsPerPage = null;
            this.detectItemsPerPage(this.screenWidth, itemsPerPage, this.container);

            gapi.client.youtube.search.list({
                part: 'snippet',
                type: 'video',
                q: this.search,
                maxResults: 20,
                order: 'viewCount'
            }).then((response) => {
                const results = response.result;
                this.snippet = results.items;
                this.token = results.nextPageToken;

                const ids = [];
                results.items.forEach((item) => {
                    ids.push(item.id.videoId);
                });

                //const ids = this.idsForStatistics;
                // Remove the last comma
                this.idsForStatistics = ids.join(',');

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
        });
    }

    detectItemsPerPage(screenWidth, itemsPerPage, container) {
        // Detection screen width and setting count of items for page
        if (screenWidth >= screenWidthForFourItems) {
            this.itemsPerPage = 4;
            container.style.width = containerWidthForFourItems;
        } else if (screenWidth >= screenWidthForTreeItems) {
            this.itemsPerPage = 3;
            container.style.width = containerWidthForTreeItems;
        } else if (screenWidth >= screenWidthForTwoItems) {
            this.itemsPerPage = 2;
            container.style.width = containerWidthForTwoItems;
        } else {
            this.itemsPerPage = 1;
            container.style.width = containerWidthForOneItem;
        }
    }
}
