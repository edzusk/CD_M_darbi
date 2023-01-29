import Carousel from './modules/carousel'
import CarouselExtended from './modules/Carousel_extended';
import CarouselExtendedExtended from './modules/carouse_extended_extended';
import CarouselSuper from './modules/Carousel_super';

const base = new Carousel('.js-carousel-base');

const extendedCarousel = new CarouselExtended('.js-carousel-base-extended');

const extendedExtendedCarousel = new CarouselExtendedExtended('.js-carousel-base-extended-extended');

const superCarousel = new CarouselSuper('.js-carousel-base-super');