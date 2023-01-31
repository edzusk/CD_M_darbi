import Carousel from './carousel';

export default class CarouselExtended extends Carousel {
  // eslint-disable-next-line no-undef
  navBullets:NodeListOf<Element>;

  constructor(selector:string) {
    super(selector);
    this.addNavigation();
    this.navBullets = this.getAllbulets();
    this.getActiveBullet();
    this.enableNav();
  }

  addNavigation() {
    this.rootElement.appendChild(this.addNavElements());
    // this.extendedOpt();
  }
  createBulets() {
    const bullet = <HTMLDivElement>document.createElement('div');
    bullet.classList.add('navBullet');
    return bullet;
  }

  addNavElements() {
    const navigation = <HTMLDivElement>document.createElement('div');
    navigation.classList.add('carousel_navigation');
    this.carouselElements.forEach(() => navigation.appendChild(this.createBulets()));
    return navigation;
  }
  handleNextClick(): void {
    super.handleNextClick();
    this.getActiveBullet();
  }
  handlePrevClick(): void {
    super.handlePrevClick();
    this.getActiveBullet();
  }

  getActiveBullet() {
    this.navBullets.forEach((el, i) => {
      if (i === this.curCarouselElement) {
        el.classList.add('navBullet--active');
      } else {
        el.classList.remove('navBullet--active');
      }
    });
  }

  getAllbulets() {
    const bullets = this.rootElement.querySelectorAll('.navBullet');
    return bullets;
  }

  enableNav() {
    this.navBullets.forEach((el, i) => {
      el.addEventListener('click', () => {
        this.handleBuletClick(i);
      });
    });
  }
  handleBuletClick(index:number) {
    this.curCarouselElement = index;
    this.replaceElements();
    this.getActiveBullet();
  }
}
