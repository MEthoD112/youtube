import { Dom } from './dom';
import { ItemService } from './itemservice';
import { DomService } from './domservice';
import { Youtube } from './youtube';

const dom = new Dom();
const itemService = new ItemService();
const domService = new DomService();
const youtube = new Youtube();

const screenWidthForFourItems = 1500;
const screenWidthForTreeItems = 1120;
const screenWidthForTwoItems = 750;
const containerWidthForFourItems = '1400px';
const containerWidthForTreeItems = '1040px';
const containerWidthForTwoItems = '680px';
const containerWidthForOneItem = '320px';
const begingOfItemLink = 'https://www.youtube.com/watch?v=';
const beginigOfChannelLink = 'https://www.youtube.com/channel/';
const noInf = 'No Information';
const activeColor = '#ff0000';
const noActiveColor = '#167ac6';
const itemWidth = 360;
const itemRightMargin = 40;
const youtubeApiKey = 'AIzaSyDVrg2_HtQOEIOk_jdcHnIsH99xRiIrge8';
const minSwipeLength = 70;


export { itemService,
		 domService,
		 screenWidthForFourItems,
		 screenWidthForTreeItems,
		 screenWidthForTwoItems,
		 containerWidthForFourItems,
		 containerWidthForTreeItems,
		 containerWidthForTwoItems,
		 containerWidthForOneItem,
		 begingOfItemLink,
		 beginigOfChannelLink,
		 noInf,
		 activeColor,
		 noActiveColor,
		 itemWidth,
		 itemRightMargin,
		 youtubeApiKey,
		 minSwipeLength };
