/* eslint-disable no-undef */
export default class Carousel {
  rootElement: HTMLDivElement;
  carouselElements: NodeListOf<HTMLDivElement>;
  carouselImages: NodeListOf<HTMLImageElement>;
  nextButton:HTMLButtonElement;
  prevButton:HTMLButtonElement;
  lastElement:number;
  curCarouselElement = 0;

  constructor(selector:string) {
    this.rootElement = document.querySelector(selector);
    this.carouselElements = this.rootElement.querySelectorAll<HTMLDivElement>('.carousel__element');
    this.carouselImages = this.rootElement.querySelectorAll<HTMLImageElement>('.image');
    this.nextButton = this.rootElement.querySelector('.js-nextBtn');
    this.prevButton = this.rootElement.querySelector('.js-prevBtn');
    this.lastElement = this.carouselElements.length - 1;
    this.initEvents();
  }

  initEvents() {
    this.carouselElements.forEach((el, i) => {
      (<HTMLDivElement>el).style.transform = `translateX(${i * 100}%)`;
    });
    this.nextButton.addEventListener('click', () => {
      this.moveElementsForvard();
      this.replaceElements();
    });

    this.prevButton.addEventListener('click', () => {
      this.moveElementsBack();
      this.replaceElements();
    });
  }

  moveElementsBack() {
    if (this.curCarouselElement === 0) {
      this.curCarouselElement = this.lastElement;
    } else {
      this.curCarouselElement -= 1;
    }
  }

  moveElementsForvard() {
    if (this.curCarouselElement === this.lastElement) {
      this.curCarouselElement = 0;
    } else {
      this.curCarouselElement += 1;
    }
  }

  replaceElements() {
    this.carouselElements.forEach((el, i) => {
      (<HTMLDivElement>el).style.transform = `translateX(${100 * (i - this.curCarouselElement)}%)`;
    });
  }
}
