
class Carousel {
	constructor (config) {
  	this.target = config.target;
    this.items = config.items;
    this.active = 0;
    this.animating = false;
    
    this.populate();
  }
  
  slide (forward) {
  	const delay = 50;
    
    this.elements.items.out.classList.add('static');
    
  	switch (forward) {
   		case true: 
      	setTimeout(() => {
        	this.elements.items.out.classList.add('carousel__item--right');
        	this.elements.items.out.classList.remove('carousel__item--left');
          
          setTimeout(() => {
          	this.elements.items.out.classList.remove('static');
          	
            setTimeout(() => {
              this.elements.items.left.classList.add('carousel__item--out');
              
              this.elements.items.center.classList.remove('carousel__item--center');
              this.elements.items.center.classList.add('carousel__item--left');
              
              this.elements.items.right.classList.remove('carousel__item--right');
              this.elements.items.right.classList.add('carousel__item--center');
              
              this.elements.items.out.classList.remove('carousel__item--out');
            }, delay);
          }, delay);
        }, delay);
      break;
      
      case false:
      	setTimeout(() => {
        	this.elements.items.out.classList.add('carousel__item--left');
        	this.elements.items.out.classList.remove('carousel__item--right');
          
          setTimeout(() => {
          	this.elements.items.out.classList.remove('static');
          
            setTimeout(() => {
              this.elements.items.right.classList.add('carousel__item--out');

              this.elements.items.center.classList.remove('carousel__item--center');
              this.elements.items.center.classList.add('carousel__item--right');

              this.elements.items.left.classList.remove('carousel__item--left');
              this.elements.items.left.classList.add('carousel__item--center');

              this.elements.items.out.classList.remove('carousel__item--out');
            }, delay);
          }, delay);
        }, delay);      
      break;
    }  
              
    setTimeout(() => {
      this.elements.items.left = this.target.querySelector('.carousel__item--left:not(.carousel__item--out)');
      this.elements.items.center = this.target.querySelector('.carousel__item--center');
      this.elements.items.right = this.target.querySelector('.carousel__item--right:not(.carousel__item--out)');
      this.elements.items.out = this.target.querySelector('.carousel__item--out');
      
      this.animating = false;
    }, delay * 4);
  }
  
  updateValues (forward) {
  	if (!this.animating) {
    	this.animating = true;
      
      let newItem = 0;

			switch (forward) {
        case true:
          if (this.active < this.items.length - 1) {
            ++this.active;
          } else {
            this.active = 0;
          }

          newItem = this.active + 1 <= this.items.length - 1 ? this.active + 1 : 0;
        break;
        
        case false:
          if (this.active > 0) {
            --this.active;
          } else {
            this.active = this.items.length - 1;
          }

          newItem = this.active - 1 >= 0 ? this.active - 1 : this.items.length - 1;
        break;
      }

      this.elements.items.out.style.backgroundImage = `url('${this.items[newItem].image}')`;

      this.slide(forward);
    }
  }
  
  eventListeners () {
  	this.elements.arrows.left.addEventListener('click', this.updateValues.bind(this, false));
  	this.elements.arrows.right.addEventListener('click', this.updateValues.bind(this, true));
  }
  
  populate () {
    function append (obj, target) {
      for (const el in obj) {
        if (obj[el].nodeName) {
          target.appendChild(obj[el]);
        } else {
          append(obj[el], target);
        }
      }
    }

  	this.elements = {};
    this.elements.items = {};
    this.elements.arrows = {};
    
    this.elements.items.left = document.createElement('div');
    this.elements.items.center = document.createElement('div');
    this.elements.items.right = document.createElement('div');
    this.elements.items.out = document.createElement('div');
    this.elements.arrows.left = document.createElement('div');
    this.elements.arrows.right = document.createElement('div');
    
    this.elements.items.left.classList.add('carousel__item');
    this.elements.items.center.classList.add('carousel__item');
    this.elements.items.right.classList.add('carousel__item');
    this.elements.items.out.classList.add('carousel__item');
    this.elements.items.left.classList.add('carousel__item--left');
    this.elements.items.center.classList.add('carousel__item--center');
    this.elements.items.right.classList.add('carousel__item--right');
    this.elements.items.out.classList.add('carousel__item--right');
    this.elements.items.out.classList.add('carousel__item--out');
    this.elements.arrows.left.classList.add('carousel__arrow');
    this.elements.arrows.right.classList.add('carousel__arrow');
    this.elements.arrows.left.classList.add('carousel__arrow--left');
    this.elements.arrows.right.classList.add('carousel__arrow--right');
    
    this.elements.items.left.style.backgroundImage = `url('${this.items[this.items.length - 1].image}')`;
    this.elements.items.center.style.backgroundImage = `url('${this.items[0].image}')`;
    this.elements.items.right.style.backgroundImage = `url('${this.items[1].image}')`;
    
    append(this.elements, this.target);
    
    this.eventListeners();
  }
}

export default Carousel;