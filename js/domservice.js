import { itemService,
         begingOfItemLink,
         beginigOfChannelLink,
         noInf,
         activeColor,
         noActiveColor } from './app';

// Class for rendering
export class DomService {
	constructor() {
		this.results = document.getElementById('results');
	}

	clearItems() {
		const items = document.getElementsByClassName('item');
        const article = document.getElementById('results');
        const arrayItems = [...items];

        arrayItems.forEach((item) => {
            article.removeChild(item);
        });
    }

    displayItems(items, statistics) {
        items.forEach((item, index) => {
            const link = begingOfItemLink + item.id.videoId;
            const title = item.snippet.title;
            const source = item.snippet.thumbnails.medium.url;
            let description = item.snippet.description.slice(0, 100);
            const channelTitle = item.snippet.channelTitle.slice(0, 12);
            const linkChannel = beginigOfChannelLink + item.snippet.channelId;
            const date = item.snippet.publishedAt.slice(0, 10);

            let likes = statistics[index].statistics.likeCount;
            let dislikes = statistics[index].statistics.dislikeCount;
            let views = statistics[index].statistics.viewCount;

            // RegExp for dividing numbers into digits
            const regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
            
            description = description ? description : noInf;
            likes = likes ? likes.replace(regExp, '$1 ') : noInf;
            dislikes = dislikes ? dislikes.replace(regExp, '$1 ') : noInf;
            views = views ? views.replace(regExp, '$1 ') : noInf;

            const string =
                `<li class="item">
                    <a href="${link}" class="header">${title}</a>
                    <img src="${source}">
                    <div class="main-content">
                        <div>
                            <i class="fa fa-user-circle"></i>
                            <a href="${linkChannel}" class="author">${channelTitle}</a>
                        </div>
                        <div>
                            <i class="fa fa-calendar"></i>
                            <p class="date">${date}</p>
                        </div>
                        <div>
                            <i class="fa fa-eye"></i>
                            <span class="views">${views}</span>
                        </div>
                        <div>
                            <i class="fa fa-thumbs-o-up"></i>
                            <span class="likes">${likes}</span>
                        </div>
                        <div>
                            <i class="fa fa-thumbs-o-down"></i>
                            <span class="dislikes">${dislikes}</span>
                        </div>
                    </div>
                    <p class="description">${description}</p>
                </li>`;

            this.results.insertAdjacentHTML('beforeend', string);
        });
    }

    displayPaging() {
        const paging = document.getElementById('paging');
        const itemsCount = itemService.snippet.length;
        const itemsPerPage = itemService.itemsPerPage;

        let pageCount = Math.floor(itemsCount / itemsPerPage);

        pageCount > 7 ? pageCount = 7 : pageCount;

        let start, end;

        itemService.currentPage <= 4 ? start = 1 : start = itemService.currentPage - 3;

        itemService.currentPage <= 4 ? end = pageCount : end = itemService.currentPage + 3;

        for (start; start <= end; start++) {
            const string =
                `<label for="${start}">
                    <input id="${start}" type="submit" value="">
                </label>`;

            paging.insertAdjacentHTML('beforeend', string);
        }
    }

    clearPaging() {
        const paging = document.getElementById('paging');
        const label = paging.getElementsByTagName('label');
        const arrayLabel = [...label];

        arrayLabel.forEach((item) => {
            paging.removeChild(item);
        });
    }

    showActivePaging() {
        const paging = document.getElementById('paging');
        const input = paging.getElementsByTagName('input');
        const arrayInput = [...input];

        arrayInput.forEach((item) => {
            if (item.id == itemService.currentPage) {
                item.style.background = activeColor;
                item.value = item.id;
                item.setAttribute('class', 'active');
                return;
            }
            item.style.background = noActiveColor;
            item.value = '';
        });
    }
}
