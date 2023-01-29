import CarouselExtended from './Carousel_extended';

export default class CarouselExtendedExtended extends CarouselExtended {
  thumbnails: NodeListOf<HTMLImageElement>;

  constructor(selector:string) {
    super(selector);
    this.addThumbnails();
  }

  addThumbnails() {
    const carouselNavigation = this.rootElement.querySelector<HTMLDivElement>('.carousel_navigation');
    this.rootElement.appendChild(this.createThumbnailList());
    this.rootElement.appendChild(carouselNavigation);
    this.getActiveThumbnail();
    this.updateAfterClick();
  }
  createThumbnailList() {
    const thumbnailList = document.createElement('div');
    thumbnailList.classList.add('carousel_navigation');
    this.carouselImages.forEach((el) => {
      const thumbnail = <HTMLImageElement>document.createElement('img');
      thumbnail.src = el.src;
      thumbnail.classList.add('thumbnail');
      thumbnailList.appendChild(thumbnail);
    });
    return thumbnailList;
  }
  updateAfterClick() {
    this.nextButton.addEventListener('click', () => this.getActiveThumbnail());
    this.prevButton.addEventListener('click', () => this.getActiveThumbnail());
		this.navBullets.forEach((el) => {
      el.addEventListener('click', () => this.getActiveThumbnail());
    });
  }

  getActiveThumbnail() {
    this.thumbnails = this.rootElement.querySelectorAll('.thumbnail');
    this.thumbnails.forEach((el, i) => {
      if (i === this.curCarouselElement) {
        el.classList.add('thumbnail--active');
      } else {
        el.classList.remove('thumbnail--active');
      }
    });
  }
}
