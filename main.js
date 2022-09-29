
class Slider {

  defaultSettings = {
    loop:false,
    arrows: false,
    dots: false,
    autoplay: {
      play: false,
      speed: 0,  
      duration: 0,
    },
  }

  state = {
    currentSlide: 0,
  }

  templates = {
    renderDots: function (slides) {
      return (
        `<ul class="slider-dots">
            ${slides.map(function (_, index) {
              return (
                `<li class="slider-dot">
                   <button type="button">${index + 1}</button>
                 </li>`
              )
            }).join('')}
        </ul>`
      )
    },

    renderArrows: function () {
      return (
        `<ul class="slider-arrows">
           <li class="arrow arrow-prev">
             <button class='arrows' type="button">prev</button>
           </li>
           <li class="arrow arrow-next">
             <button class='arrows' type="button">next</button>
           </li>
        </ul>`
      )
    },

    renderTrack: function(slides) {
      return `
      <div class="slider-list">
        <div class="slider-track">
          ${slides}
        </div>
      </div>
      `
    },

    renderSlides: function(slides) {
      return slides.map(slide => `<div class='slider-slide'>${slide.outerHTML}</div>`).join('');
    },

    renderAutoplay: function () {
      return (
        `<form class="slider-autoplay">
            <label style="display:none" class="label" for="autoplay">Set Timeout in seconds</label>
            <input style="display:none" class="input" type="text" name="autoplay" id="autoplay" placeholder="5">
             <button class='play' type="submit">Play</button>
             <button class='stop' type="button">Stop</button>
        </form>`
      )
    },
  }

  constructor (settings) {
    this.settings = Object.assign(this.defaultSettings, settings);
  }

  setState(state) {
    this.state = Object.assign(this.state, state);
  }


  render() {
    const slider = document.querySelector(this.settings.selector);
    const children = Array.from(slider.children);
    const slides = this.templates.renderSlides(children);
    const track = this.templates.renderTrack(slides);

    slider.innerHTML = track;
 
    if (this.settings.dots) {
      const dots = this.templates.renderDots(children);
      slider.insertAdjacentHTML('beforeend', dots);
    }

    if (this.settings.arrows) {
      const arrows = this.templates.renderArrows();
      slider.insertAdjacentHTML('beforeend', arrows);
    }

    if (this.settings.autoplay.play) {
      const autoplay = this.templates.renderAutoplay();
      slider.insertAdjacentHTML('beforeend', autoplay);
    }

    let state = {
        slidesCount: children.length,
        elements: {
          slider,
          track: slider.querySelector('.slider-track'),
          next: slider.querySelector('.arrow-next'),
          prev: slider.querySelector('.arrow-prev'),
          dots: slider.querySelector('.slider-dots'),
          autoplay: slider.querySelector('.slider-autoplay'),
      }
    }
    this.setState(state);
    
  }

  next() {
    const track = this.state.elements.track;
    let slidesCount = this.state.slidesCount;

    if(Math.abs(this.state.currentSlide) === slidesCount - 1 && !this.settings.loop) return;

    if (Math.abs(this.state.currentSlide) === slidesCount - 1) {
      this.state.currentSlide = 0;
      track.style.transform = `translateX(0%)`;  

    } else {
        this.state.currentSlide -= 1;
        track.style.transform = `translateX(${this.state.currentSlide * 100}%)`;
      }

  }

  prev() {
    const track = this.state.elements.track;
    let slidesCount = this.state.slidesCount;

    if (this.state.currentSlide === 0 && !this.settings.loop) return;
    
    if (this.state.currentSlide === 0) {
      this.state.currentSlide = -(slidesCount - 1);
      track.style.transform = `translateX(${this.state.currentSlide * 100}%)`;

    } else {
        this.state.currentSlide += 1;
        track.style.transform = `translateX(${this.state.currentSlide * 100}%)`;
    }
  }

  arrowsEvents() {
    const { elements: { next, prev, } } = this.state;
    
    next.addEventListener('click', this.next.bind(this)); 

    prev.addEventListener('click', this.prev.bind(this));
  }

  moveSlide(e) {
    const track = this.state.elements.track;
    const dot = e.target;

    if (dot.classList.contains('slider-dot')) {
      this.state.currentSlide = -(dot.textContent - 1);
      track.style.transform = `translateX(${this.state.currentSlide * 100}%)`;
    }
  }

  dotsEvents() {
    const dots = this.state.elements.dots;
    dots.addEventListener('click', this.moveSlide.bind(this));
  }

  autoPlayHeandler() {
    const track = this.state.elements.track;
    let slidesCount = this.state.slidesCount;

    // чтоб автоплей не останавливался на последнем слайде даже если loop false,
    // как было бы если бы просто вызывали this.next()
    if (Math.abs(this.state.currentSlide) === slidesCount - 1) {
      this.state.currentSlide = 1;
      track.style.transform = `translateX(${this.state.currentSlide * 100}%)`;  
    }
    this.next(); 
  }

  autoPlay(e){
    const autoplay = this.state.elements.autoplay; 
    const playButton = autoplay.querySelector('button.play');

    e.preventDefault();    
    console.log('start autoplay');
    playButton.disabled = true;

    let timerId = setInterval(this.autoPlayHeandler.bind(this), this.settings.autoplay.speed);
    setTimeout(() => { 
      clearInterval(timerId); 
      console.log('stop'); 
      playButton.disabled = false;
    }, this.settings.autoplay.duration);
  }

  stop() {
    const autoplay = this.state.elements.autoplay; 
    const playButton = autoplay.querySelector('button.play');

    console.log('stop autoplay');
    for (let i = setTimeout(()=>{}, 0); i > 0; i--) {
      clearInterval(i);
    }
    playButton.disabled = false;
  }

  autoPlayEvents() {
    if (!this.settings.autoplay.play) return;
    const autoplay = this.state.elements.autoplay; 
    const playButton = autoplay.querySelector('button.play');
    const stopButton = autoplay.querySelector('button.stop');
    
    playButton.addEventListener('click',  this.autoPlay.bind(this));
    stopButton.addEventListener('click',  this.stop.bind(this));
    
  }

  init() {
    console.log('init');
    this.render();
    this.arrowsEvents();
    this.dotsEvents();
    this.autoPlayEvents();

  }
}

const slider = new Slider({
  selector: ".your-class",
  arrows: true,
  dots: true,
  loop: true,
  autoplay: {
    play: true,
    speed: 1700,   // пока менять настройки автоплея можно тут, в будущем можно добавть поле в браузер
    duration: 50000,
  },
})

slider.init();