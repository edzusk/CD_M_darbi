import CarouselExtendedExtended from './carouse_extended_extended';

export default class CarouselSuper extends CarouselExtendedExtended {
  myIndex = 0;

  constructor(selector:string) {
    super(selector);
    this.slideShow();
    this.fullscreenPrewiev();
  }

  slideShow() {
    this.moveElementsForvard();
    this.replaceElements();
    this.getActiveBullet();
    this.getActiveThumbnail();
    setTimeout(this.slideShow.bind(this), 5000); // Change image every 2 seconds
  }

  fullscreenPrewiev() {
    this.carouselImages.forEach((image) => {
      image.addEventListener('click', () => {
        image.requestFullscreen();
      });
    });
  }
}
