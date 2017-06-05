/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.minSwipeLength = exports.youtubeApiKey = exports.itemRightMargin = exports.itemWidth = exports.noActiveColor = exports.activeColor = exports.noInf = exports.beginigOfChannelLink = exports.begingOfItemLink = exports.containerWidthForOneItem = exports.containerWidthForTwoItems = exports.containerWidthForTreeItems = exports.containerWidthForFourItems = exports.screenWidthForTwoItems = exports.screenWidthForTreeItems = exports.screenWidthForFourItems = exports.domService = exports.itemService = undefined;

var _dom = __webpack_require__(1);

var _itemservice = __webpack_require__(3);

var _domservice = __webpack_require__(2);

var _youtube = __webpack_require__(4);

var dom = new _dom.Dom();
var itemService = new _itemservice.ItemService();
var domService = new _domservice.DomService();
var youtube = new _youtube.Youtube();

var screenWidthForFourItems = 1500;
var screenWidthForTreeItems = 1120;
var screenWidthForTwoItems = 750;
var containerWidthForFourItems = '1400px';
var containerWidthForTreeItems = '1040px';
var containerWidthForTwoItems = '680px';
var containerWidthForOneItem = '320px';
var begingOfItemLink = 'https://www.youtube.com/watch?v=';
var beginigOfChannelLink = 'https://www.youtube.com/channel/';
var noInf = 'No Information';
var activeColor = '#ff0000';
var noActiveColor = '#167ac6';
var itemWidth = 360;
var itemRightMargin = 40;
var youtubeApiKey = 'AIzaSyDVrg2_HtQOEIOk_jdcHnIsH99xRiIrge8';
var minSwipeLength = 70;

exports.itemService = itemService;
exports.domService = domService;
exports.screenWidthForFourItems = screenWidthForFourItems;
exports.screenWidthForTreeItems = screenWidthForTreeItems;
exports.screenWidthForTwoItems = screenWidthForTwoItems;
exports.containerWidthForFourItems = containerWidthForFourItems;
exports.containerWidthForTreeItems = containerWidthForTreeItems;
exports.containerWidthForTwoItems = containerWidthForTwoItems;
exports.containerWidthForOneItem = containerWidthForOneItem;
exports.begingOfItemLink = begingOfItemLink;
exports.beginigOfChannelLink = beginigOfChannelLink;
exports.noInf = noInf;
exports.activeColor = activeColor;
exports.noActiveColor = noActiveColor;
exports.itemWidth = itemWidth;
exports.itemRightMargin = itemRightMargin;
exports.youtubeApiKey = youtubeApiKey;
exports.minSwipeLength = minSwipeLength;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class for adding default html
var Dom = exports.Dom = function Dom() {
	_classCallCheck(this, Dom);

	var string = '<form class="search-container">\n\t\t\t\t<div class="input">\n\t\t\t\t\t<input type="text" id="search" class="search" placeholder="Search request">\n\t\t\t\t</div>\n\t\t\t\t<div class="button">\n\t\t\t\t\t<button type="submit" id="submit" disabled>Search</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<main class="container carousel-container" id="container">\n\t\t\t\t<ul id="results" class="results carousel trans-animate"></ul>\n\t\t\t</main>\n\t\t\t<div class="paging" id="paging"></div>';

	document.body.insertAdjacentHTML('beforeend', string);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DomService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class for rendering
var DomService = exports.DomService = function () {
    function DomService() {
        _classCallCheck(this, DomService);

        this.results = document.getElementById('results');
    }

    _createClass(DomService, [{
        key: 'clearItems',
        value: function clearItems() {
            var items = document.getElementsByClassName('item');
            var article = document.getElementById('results');
            var arrayItems = [].concat(_toConsumableArray(items));

            arrayItems.forEach(function (item) {
                article.removeChild(item);
            });
        }
    }, {
        key: 'displayItems',
        value: function displayItems(items, statistics) {
            var _this = this;

            items.forEach(function (item, index) {
                var link = _app.begingOfItemLink + item.id.videoId;
                var title = item.snippet.title;
                var source = item.snippet.thumbnails.medium.url;
                var description = item.snippet.description.slice(0, 100);
                var channelTitle = item.snippet.channelTitle.slice(0, 12);
                var linkChannel = _app.beginigOfChannelLink + item.snippet.channelId;
                var date = item.snippet.publishedAt.slice(0, 10);

                var likes = statistics[index].statistics.likeCount;
                var dislikes = statistics[index].statistics.dislikeCount;
                var views = statistics[index].statistics.viewCount;

                // RegExp for dividing numbers into digits
                var regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

                description = description ? description : _app.noInf;
                likes = likes ? likes.replace(regExp, '$1 ') : _app.noInf;
                dislikes = dislikes ? dislikes.replace(regExp, '$1 ') : _app.noInf;
                views = views ? views.replace(regExp, '$1 ') : _app.noInf;

                var string = '<li class="item">\n                    <a href="' + link + '" class="header">' + title + '</a>\n                    <img src="' + source + '">\n                    <div class="main-content">\n                        <div>\n                            <i class="fa fa-user-circle"></i>\n                            <a href="' + linkChannel + '" class="author">' + channelTitle + '</a>\n                        </div>\n                        <div>\n                            <i class="fa fa-calendar"></i>\n                            <p class="date">' + date + '</p>\n                        </div>\n                        <div>\n                            <i class="fa fa-eye"></i>\n                            <span class="views">' + views + '</span>\n                        </div>\n                        <div>\n                            <i class="fa fa-thumbs-o-up"></i>\n                            <span class="likes">' + likes + '</span>\n                        </div>\n                        <div>\n                            <i class="fa fa-thumbs-o-down"></i>\n                            <span class="dislikes">' + dislikes + '</span>\n                        </div>\n                    </div>\n                    <p class="description">' + description + '</p>\n                </li>';

                _this.results.insertAdjacentHTML('beforeend', string);
            });
        }
    }, {
        key: 'displayPaging',
        value: function displayPaging() {
            var paging = document.getElementById('paging');
            var itemsCount = _app.itemService.snippet.length;
            var itemsPerPage = _app.itemService.itemsPerPage;

            var pageCount = Math.floor(itemsCount / itemsPerPage);

            pageCount > 7 ? pageCount = 7 : pageCount;

            var start = void 0,
                end = void 0;

            _app.itemService.currentPage <= 4 ? start = 1 : start = _app.itemService.currentPage - 3;

            _app.itemService.currentPage <= 4 ? end = pageCount : end = _app.itemService.currentPage + 3;

            for (start; start <= end; start++) {
                var string = '<label for="' + start + '">\n                    <input id="' + start + '" type="submit" value="">\n                </label>';

                paging.insertAdjacentHTML('beforeend', string);
            }
        }
    }, {
        key: 'clearPaging',
        value: function clearPaging() {
            var paging = document.getElementById('paging');
            var label = paging.getElementsByTagName('label');
            var arrayLabel = [].concat(_toConsumableArray(label));

            arrayLabel.forEach(function (item) {
                paging.removeChild(item);
            });
        }
    }, {
        key: 'showActivePaging',
        value: function showActivePaging() {
            var paging = document.getElementById('paging');
            var input = paging.getElementsByTagName('input');
            var arrayInput = [].concat(_toConsumableArray(input));

            arrayInput.forEach(function (item) {
                if (item.id == _app.itemService.currentPage) {
                    item.style.background = _app.activeColor;
                    item.value = item.id;
                    item.setAttribute('class', 'active');
                    return;
                }
                item.style.background = _app.noActiveColor;
                item.value = '';
            });
        }
    }]);

    return DomService;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ItemService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class for primary loading data and working with data
var ItemService = exports.ItemService = function () {
    function ItemService() {
        var _this = this;

        _classCallCheck(this, ItemService);

        // Collection of ids for futher request for statistics
        this.idsForStatistics = null;
        this.results = document.getElementById('results');
        this.sumbit = document.getElementById('submit');
        this.snippet = null;
        this.statistics = null;

        // Event for primary loading data
        this.sumbit.addEventListener('click', function (event) {
            event.preventDefault();
            _app.domService.clearItems();
            _app.domService.clearPaging();
            _this.results.style.transform = 'translate3d(0, 0, 0)';
            _this.screenWidth = document.documentElement.clientWidth;
            _this.container = document.getElementById('container');
            _this.search = document.getElementById('search').value;
            _this.translate = 0;
            _this.currentPage = 1;
            var itemsPerPage = null;
            _this.detectItemsPerPage(_this.screenWidth, itemsPerPage, _this.container);

            gapi.client.youtube.search.list({
                part: 'snippet',
                type: 'video',
                q: _this.search,
                maxResults: 20,
                order: 'viewCount'
            }).then(function (response) {
                var results = response.result;
                _this.snippet = results.items;
                _this.token = results.nextPageToken;

                var ids = [];
                results.items.forEach(function (item) {
                    ids.push(item.id.videoId);
                });

                //const ids = this.idsForStatistics;
                // Remove the last comma
                _this.idsForStatistics = ids.join(',');

                // request for statistics
                gapi.client.youtube.videos.list({
                    part: 'statistics',
                    id: _this.idsForStatistics
                }).then(function (response) {
                    var results = response.result;
                    _this.statistics = results.items;

                    _app.domService.displayItems(_this.snippet, _this.statistics);
                    _app.domService.displayPaging();
                    _app.domService.showActivePaging();
                });
            });
            _this.idsForStatistics = '';
        });
    }

    _createClass(ItemService, [{
        key: 'detectItemsPerPage',
        value: function detectItemsPerPage(screenWidth, itemsPerPage, container) {
            // Detection screen width and setting count of items for page
            if (screenWidth >= _app.screenWidthForFourItems) {
                this.itemsPerPage = 4;
                container.style.width = _app.containerWidthForFourItems;
            } else if (screenWidth >= _app.screenWidthForTreeItems) {
                this.itemsPerPage = 3;
                container.style.width = _app.containerWidthForTreeItems;
            } else if (screenWidth >= _app.screenWidthForTwoItems) {
                this.itemsPerPage = 2;
                container.style.width = _app.containerWidthForTwoItems;
            } else {
                this.itemsPerPage = 1;
                container.style.width = _app.containerWidthForOneItem;
            }
        }
    }]);

    return ItemService;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Youtube = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Youtube = exports.Youtube = function () {
    function Youtube() {
        var _this = this;

        _classCallCheck(this, Youtube);

        var paging = document.getElementById('paging');
        this.results = document.getElementById('results');
        var body = document.body;
        this.snippet = null;
        this.statistics = null;
        this.container = document.getElementById('container');

        // Detection of mousedown and touchstart events
        this.addMultipleListeners(body, 'mousedown touchstart', function (event) {
            var target = event.target.tagName.toUpperCase();
            if (target !== 'INPUT' && target !== 'BUTTON') {
                body.style.cursor = 'pointer';
                _this.swipeStart();
            }
        });

        // Detection of mousemove and touchmove events
        this.addMultipleListeners(body, 'mousemove touchmove', function () {
            _this.swipeMove();
        });

        // Detection of mouseup and touchend events
        this.addMultipleListeners(window, 'mouseup touchend', function (event) {
            var target = event.target.tagName.toUpperCase();
            if (target !== 'INPUT' && target !== 'BUTTON') {
                body.style.cursor = 'default';
                _this.swipeEnd();
            }
        });

        // Detection mousedown of tooltip
        paging.addEventListener('mousedown', function (event) {
            if (event.target.tagName.toUpperCase() === 'INPUT') {
                event.target.value = event.target.id;
            }
        });

        // Detection mouseout of tooltip
        paging.addEventListener('mouseout', function (event) {
            if (!event.target.hasAttribute('class', 'active')) {
                event.target.value = '';
            }
        });

        // Click event for pagination
        paging.addEventListener('click', function (event) {
            if (event.target.tagName.toUpperCase() === 'INPUT') {
                var itemsPerPage = _app.itemService.itemsPerPage;
                var page = +event.target.id;
                var translate = -(itemsPerPage * _app.itemWidth) * (page - 1);
                var length = _app.itemService.snippet.length;

                if (-translate >= length * _app.itemWidth) {
                    return;
                }

                _app.itemService.translate = -(_app.itemService.itemsPerPage * _app.itemWidth) * (page - 1);
                _app.itemService.currentPage = page;

                _this.results.style.transform = 'translate3d(' + _app.itemService.translate + 'px,0,0)';

                var quadrupleItemsForPage = itemsPerPage * 4;

                if (-_app.itemService.translate >= (length - quadrupleItemsForPage) * _app.itemWidth - _app.itemRightMargin) {
                    _this.afterLoadFromYoutubeApi();
                }

                _app.domService.clearPaging();
                _app.domService.displayPaging();
                _app.domService.showActivePaging();
            }
        });

        // Event for detection resizing
        window.onresize = function () {
            var screenWidth = document.documentElement.clientWidth;
            _app.itemService.detectItemsPerPage(screenWidth, _app.itemService.itemsPerPage, _this.container);

            if (_app.itemService.snippet) {
                var translate = -_app.itemService.translate;
                var itemsPerPage = _app.itemService.itemsPerPage;
                _app.itemService.currentPage = Math.ceil(translate / (_app.itemWidth * itemsPerPage) + 1);
                _app.domService.clearPaging();
                _app.domService.displayPaging();
                _app.domService.showActivePaging();
            }
        };

        // Event to init app
        window.onload = function () {
            gapi.client.setApiKey(_app.youtubeApiKey);
            gapi.client.load('youtube', 'v3', function () {
                var button = document.getElementById('submit');
                button.removeAttribute('disabled');
            });
        };
    }

    // Method for after load data from youtube api


    _createClass(Youtube, [{
        key: 'afterLoadFromYoutubeApi',
        value: function afterLoadFromYoutubeApi() {
            var _this2 = this;

            // Request for items
            gapi.client.youtube.search.list({
                pageToken: _app.itemService.token,
                part: 'snippet',
                type: 'video',
                q: _app.itemService.search,
                maxResults: 16,
                order: 'viewCount'
            }).then(function (response) {
                var results = response.result;
                _this2.snippet = results.items;
                _app.itemService.snippet = _app.itemService.snippet.concat(_this2.snippet);
                _app.itemService.token = results.nextPageToken;
                _app.itemService.idsForStatistics = '';

                var ids = [];
                results.items.forEach(function (item) {
                    ids.push(item.id.videoId);
                });

                _app.itemService.idsForStatistics = ids.join(',');

                // Request for statistics
                gapi.client.youtube.videos.list({
                    part: 'statistics',
                    id: _app.itemService.idsForStatistics
                }).then(function (response) {
                    var results = response.result;
                    _this2.statistics = results.items;
                    _app.domService.displayItems(_this2.snippet, _this2.statistics);
                });
            });
        }
    }, {
        key: 'swipeLeft',
        value: function swipeLeft() {
            var itemsPerPage = _app.itemService.itemsPerPage;
            var translateLX = -(itemsPerPage * _app.itemWidth);
            var translate = _app.itemService.translate + translateLX;
            var length = _app.itemService.snippet.length;

            if (-translate >= length * _app.itemWidth) {
                this.results.style.transform = 'translate3d(' + _app.itemService.translate + 'px,0,0)';
                return;
            }

            _app.itemService.translate += translateLX;
            this.results.style.transform = 'translate3d(' + _app.itemService.translate + 'px,0,0)';

            _app.itemService.currentPage++;

            var doubleItemsForPage = itemsPerPage * 2;

            if (-_app.itemService.translate >= (length - doubleItemsForPage) * _app.itemWidth - _app.itemRightMargin) {
                this.afterLoadFromYoutubeApi();
            }
            _app.domService.clearPaging();
            _app.domService.displayPaging();
            _app.domService.showActivePaging();
        }
    }, {
        key: 'swipeRight',
        value: function swipeRight() {
            if (_app.itemService.translate >= 0) {
                this.results.style.transform = 'translate3d(0, 0, 0)';
                _app.itemService.translate = 0;
                return;
            }

            if (_app.itemService.currentPage === 2) {
                this.results.style.transform = 'translate3d(0, 0, 0)';
                _app.itemService.translate = 0;
                _app.itemService.currentPage = 1;
                _app.domService.clearPaging();
                _app.domService.displayPaging();
                _app.domService.showActivePaging();
                return;
            }

            var translateRX = _app.itemService.itemsPerPage * _app.itemWidth;
            _app.itemService.translate += translateRX;
            this.results.style.transform = 'translate3d(' + _app.itemService.translate + 'px,0,0)';

            _app.itemService.currentPage--;

            _app.domService.clearPaging();
            _app.domService.displayPaging();
            _app.domService.showActivePaging();
        }

        // Method for detection start of swipe

    }, {
        key: 'swipeStart',
        value: function swipeStart(event) {
            event = event ? event : window.event;
            event = 'changedTouches' in event ? event.changedTouches[0] : event;
            this.touchStartCoords = event.pageX;
        }

        // Method for detection move of swipe

    }, {
        key: 'swipeMove',
        value: function swipeMove(event) {
            if (this.touchStartCoords) {
                event = event ? event : window.event;
                var translate = event.pageX - this.touchStartCoords;
                this.results.style.transform = 'translate3d(' + (_app.itemService.translate + translate) + 'px,0,0)';
            }
        }

        // Method for detection end of swipe

    }, {
        key: 'swipeEnd',
        value: function swipeEnd(event) {
            event = event ? event : window.event;
            event = 'changedTouches' in event ? event.changedTouches[0] : event;

            if (!this.touchStartCoords) {
                this.touchEndCoords = 0;
            } else {
                this.touchEndCoords = event.pageX - this.touchStartCoords;
            }

            this.direction = this.touchEndCoords < 0 ? 'left' : 'right';
            if (Math.abs(this.touchEndCoords) <= _app.minSwipeLength) {
                this.direction = 'current';
            }

            switch (this.direction) {
                case 'left':
                    this.swipeLeft();
                    break;
                case 'right':
                    this.swipeRight();
                    break;
                case 'current':
                    this.results.style.transform = 'translate3d(' + _app.itemService.translate + 'px,0,0)';
                    break;
                default:
                    break;
            }
            this.touchStartCoords = 0;
            this.touchEndCoords = 0;
        }

        // Method for adding multiple events

    }, {
        key: 'addMultipleListeners',
        value: function addMultipleListeners(element, events, handler) {
            var eventsArray = events.split(' ');
            eventsArray.forEach(function (item, index) {
                element.addEventListener(eventsArray[index], handler, false);
            });
        }
    }]);

    return Youtube;
}();

/***/ })
/******/ ]);