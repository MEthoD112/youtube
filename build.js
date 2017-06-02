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
exports.domService = exports.itemService = undefined;

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _itemservice = __webpack_require__(3);

var _itemservice2 = _interopRequireDefault(_itemservice);

var _domservice = __webpack_require__(1);

var _domservice2 = _interopRequireDefault(_domservice);

var _youtube = __webpack_require__(4);

var _youtube2 = _interopRequireDefault(_youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = new _index2.default();

var itemService = new _itemservice2.default();

var domService = new _domservice2.default();

var youtube = new _youtube2.default();

exports.itemService = itemService;
exports.domService = domService;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class for rendering
var DomService = function () {
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
                var link = 'https://www.youtube.com/watch?v=' + item.id.videoId;
                var title = item.snippet.title;
                var source = item.snippet.thumbnails.medium.url;
                var description = item.snippet.description.slice(0, 100);
                var channelTitle = item.snippet.channelTitle.slice(0, 12);
                var linkChannel = 'https://www.youtube.com/channel/' + item.snippet.channelId;
                var date = item.snippet.publishedAt.slice(0, 10);

                var likes = statistics[index].statistics.likeCount;
                var dislikes = statistics[index].statistics.dislikeCount;
                var views = statistics[index].statistics.viewCount;

                var regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

                description = description ? description : 'No Information';
                likes = likes ? likes.replace(regExp, '$1 ') : 'No Information';
                dislikes = dislikes ? dislikes.replace(regExp, '$1 ') : 'No Information';
                views = views ? views.replace(regExp, '$1 ') : 'No Information';

                var string = '<li class="item">' + ('<a href="' + link + '" class="header">' + title + '</a>') + ('<img src="' + source + '">') + '<div class="main-content">' + '<div>' + '<i class="fa fa-user-circle"></i>' + ('<a href="' + linkChannel + '" class="author">' + channelTitle + '</a>') + '</div>' + '<div>' + '<i class="fa fa-calendar"></i>' + ('<p class="date">' + date + '</p>') + '</div>' + '<div>' + '<i class="fa fa-eye"></i>' + ('<span class="views">' + views + '</span>') + '</div>' + '<div>' + '<i class="fa fa-thumbs-o-up"></i>' + ('<span class="likes">' + likes + '</span>') + '</div>' + '<div>' + '<i class="fa fa-thumbs-o-down"></i>' + ('<span class="dislikes">' + dislikes + '</span>') + '</div>' + '</div>' + ('<p class="description">' + description + '</p>') + '</li>';

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
                var string = '<label for="' + start + '">' + ('<input id="' + start + '" type="submit" value="">') + '</label>';

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
                if (+item.id === _app.itemService.currentPage) {
                    item.style.background = 'red';
                    item.value = item.id;
                    return;
                }
                item.style.background = '#167ac6';
                item.value = '';
            });
        }
    }]);

    return DomService;
}();

exports.default = DomService;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class for adding default html
var Dom = function Dom() {
	_classCallCheck(this, Dom);

	var string = '<form class="search-container">' + '<div class="input">' + '<input type="text" id="search" class="search" placeholder="Search request">' + '</div>' + '<div class="button">' + '<button type="submit" id="submit" disabled>Search</button>' + '</div>' + '</form>' + '<main class="container carousel-container" id="container">' + '<ul id="results" class="results carousel trans-animate"></ul>' + '</main>' + '<div class="paging" id="paging"></div>';

	document.body.insertAdjacentHTML('beforeend', string);
};

exports.default = Dom;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class for primary loading data and working with data
var ItemService = function ItemService() {
    var _this = this;

    _classCallCheck(this, ItemService);

    // Collection of ids for futher request for statistics
    this.idsForStatistics = '';
    this.results = document.getElementById('results');
    this.sumbit = document.getElementById('submit');
    this.snippet = null;
    this.statistics = null;
    this.container = document.getElementById('container');

    // Event for primary loading data
    this.sumbit.addEventListener('click', function (event) {
        event.preventDefault();
        _app.domService.clearItems();
        _app.domService.clearPaging();
        _this.results.style.transform = 'translate3d(' + 0 + 'px,0,0)';
        _this.screenWidth = document.documentElement.clientWidth;
        _this.search = document.getElementById('search').value;
        _this.translate = 0;

        // Detection screen width and setting count of items for page
        if (_this.screenWidth >= 1500) {
            _this.itemsPerPage = 4;
            _this.container.style.width = '1400px';
        } else if (_this.screenWidth >= 1120) {
            _this.itemsPerPage = 3;
            _this.container.style.width = '1040px';
        } else if (_this.screenWidth >= 750) {
            _this.itemsPerPage = 2;
            _this.container.style.width = '680px';
        } else {
            _this.itemsPerPage = 1;
            _this.container.style.width = '320px';
        }
        _this.currentPage = 1;

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

            results.items.forEach(function (item) {
                _this.idsForStatistics += item.id.videoId + ',';
            });

            var ids = _this.idsForStatistics;
            // Remove the last comma
            _this.idsForStatistics = ids.slice(0, ids.length - 1);

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
};

exports.default = ItemService;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Youtube = function () {
    function Youtube() {
        var _this = this;

        _classCallCheck(this, Youtube);

        var paging = document.getElementById('paging');
        this.results = document.getElementById('results');
        var body = document.body;
        this.snippet = null;
        this.statistics = null;

        // Detection of mousedown and touchstart events
        this.addMultipleListeners(body, 'mousedown touchstart', function (event) {
            var target = event.target.tagName.toUpperCase();
            if (target === 'INPUT' || target === 'BUTTON') {
                return;
            }
            _this.swipeStart();
        });

        // Detection of mousemove and touchmove events
        this.addMultipleListeners(body, 'mousemove touchmove', function () {
            _this.swipeMove();
        });

        // Detection of mouseup and touchend events
        this.addMultipleListeners(window, 'mouseup touchend', function (event) {
            var target = event.target.tagName.toUpperCase();
            if (target === 'INPUT' || target === 'BUTTON') {
                return;
            }
            //console.log(event.target);
            _this.swipeEnd();
        });

        // Detection mousedown of tooltip
        paging.addEventListener('mousedown', function (event) {
            if (event.target.tagName.toUpperCase() !== 'INPUT') {
                return;
            }
            event.target.value = event.target.id;
        });

        // Detection mouseout of tooltip
        paging.addEventListener('mouseout', function (event) {
            if (event.target.tagName.toUpperCase() !== 'INPUT') {
                return;
            }
            if (event.target.style.background !== 'red') {
                event.target.value = '';
            }
        });

        // Click event for pagination
        paging.addEventListener('click', function (event) {
            if (event.target.tagName.toUpperCase() !== 'INPUT') {
                return;
            }

            var itemsPerPage = _app.itemService.itemsPerPage;
            var page = +event.target.id;
            var translate = -(itemsPerPage * 360) * (page - 1);
            var length = _app.itemService.snippet.length;

            if (-translate >= length * 360) {
                return;
            }

            _app.itemService.translate = -(_app.itemService.itemsPerPage * 360) * (page - 1);
            _app.itemService.currentPage = page;

            _this.results.style.transform = 'translate3d(' + _app.itemService.translate + 'px,0,0)';

            var quadrupleItemsForPage = itemsPerPage * 4;

            if (-_app.itemService.translate >= (length - quadrupleItemsForPage) * 360 - 40) {
                _this.afterLoadFromYoutubeApi();
            }

            _app.domService.clearPaging();
            _app.domService.displayPaging();
            _app.domService.showActivePaging();
        });

        // Event for detection resizing
        window.onresize = function () {
            var screenWidth = document.documentElement.clientWidth;
            var container = document.getElementById('container');

            if (screenWidth >= 1500) {
                _app.itemService.itemsPerPage = 4;
                container.style.width = '1400px';
            } else if (screenWidth >= 1120) {
                _app.itemService.itemsPerPage = 3;
                container.style.width = '1040px';
            } else if (screenWidth >= 750) {
                _app.itemService.itemsPerPage = 2;
                container.style.width = '680px';
            } else {
                _app.itemService.itemsPerPage = 1;
                container.style.width = '320px';
            }
            if (_app.itemService.snippet) {
                var translate = -_app.itemService.translate;
                var itemsPerPage = _app.itemService.itemsPerPage;
                _app.itemService.currentPage = Math.ceil(translate / (360 * itemsPerPage) + 1);
                _app.domService.clearPaging();
                _app.domService.displayPaging();
                _app.domService.showActivePaging();
            }
        };

        // Event to init app
        window.onload = function () {
            gapi.client.setApiKey('AIzaSyDVrg2_HtQOEIOk_jdcHnIsH99xRiIrge8');
            gapi.client.load('youtube', 'v3', function () {
                var button = document.getElementById('submit');
                button.removeAttribute('disabled');
                console.log('api is ready');
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

                results.items.forEach(function (item) {
                    _app.itemService.idsForStatistics += item.id.videoId + ',';
                });

                var ids = _app.itemService.idsForStatistics;
                // Remove the last comma
                _app.itemService.idsForStatistics = ids.slice(0, ids.length - 1);

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
            var translateLX = -(itemsPerPage * 360);
            var translate = _app.itemService.translate + translateLX;
            var length = _app.itemService.snippet.length;

            if (-translate >= length * 360) {
                this.results.style.transform = 'translate3d(' + _app.itemService.translate + 'px,0,0)';
                return;
            }

            _app.itemService.translate += translateLX;
            this.results.style.transform = 'translate3d(' + _app.itemService.translate + 'px,0,0)';

            _app.itemService.currentPage++;

            var doubleItemsForPage = itemsPerPage * 2;

            if (-_app.itemService.translate >= (length - doubleItemsForPage) * 360 - 40) {
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
                this.results.style.transform = 'translate3d(0px,0,0)';
                _app.itemService.translate = 0;
                return;
            }

            if (_app.itemService.currentPage === 2) {
                this.results.style.transform = 'translate3d(0px,0,0)';
                _app.itemService.translate = 0;
                _app.itemService.currentPage = 1;
                _app.domService.clearPaging();
                _app.domService.displayPaging();
                _app.domService.showActivePaging();
                return;
            }

            var translateRX = _app.itemService.itemsPerPage * 360;
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
            if (!this.touchStartCoords) return;
            event = event ? event : window.event;
            var translate = event.pageX - this.touchStartCoords;
            this.results.style.transform = 'translate3d(' + (_app.itemService.translate + translate) + 'px,0,0)';
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
            if (Math.abs(this.touchEndCoords) <= 70) {
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

exports.default = Youtube;

/***/ })
/******/ ]);