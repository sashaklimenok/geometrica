class Slider {
    constructor(selector, options) {
        this.container = document.querySelector(`.${selector}`);
        this.slides = this.container.children;
        this.activeSlide = 0;
        this.width = this.container.parentElement.getBoundingClientRect().width;

        this.initSlider();
        this.createPagination()
    }

    initSlider() {
        const styles = {
            display: 'flex',
            transition: 'transform .5s',
            transform: 'translateX(0)',
        };

        const slideStyles = {
            flexShrink: 0,
            width: this.width + 'px'
        }

        Object.entries(styles).forEach(([key, value]) => {
            this.container.style[key] = value;
        })

        Array.from(this.slides).forEach((item) => {
            Object.entries(slideStyles).forEach(([key, value]) => {
                item.style[key] = value
            })
        })
    }

    createPagination() {
        const ul = document.createElement('ul');
        ul.classList.add('slide-pagination');
        Array.from(this.slides).forEach((_, index) => {
            const li = document.createElement('li');
            li.setAttribute('data-point', index)
            li.classList.add('slide-dot')
            if (this.activeSlide === index) {
                li.classList.add('active-slide')
            }
            ul.append(li)
        });

        this.container.parentElement.append(ul);

        ul.addEventListener('click', (evt) => {
            this.activeSlide = evt.target.dataset.point;
            Array.from(ul.children).forEach((item) => item.classList.remove('active-slide'));
            evt.target.classList.add('active-slide')
            this.container.style.transform = `translateX(-${this.width * this.activeSlide}px)`
        })
    }

    next() {
        if (this.activeSlide < this.slides.length) {
            this.activeSlide = this.activeSlide + 1;
            this.container.style.transform = `translateX(-${this.width * this.activeSlide}px)`
        }
    }

    prev() {
        if (this.activeSlide !== 0) {
            this.activeSlide = this.activeSlide - 1;
            this.container.style.transform = `translateX(-${this.width * this.activeSlide}px)`
        }
    }


}

new Slider('slider__wrapper');

