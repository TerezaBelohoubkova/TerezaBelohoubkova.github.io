import Carousel from '../pages/carousel.js';

new Carousel({
	target: document.querySelector('.carousel'),
  items: [
  	{
    	image: "../assets/coffee_trip/carousel-1.png"
    },
  	{
    	image: "../assets/coffee_trip/carousel-2.png"
    },
  	{
    	image: "../assets/coffee_trip/carousel-3.png"
    },
  	{
    	image: "../assets/coffee_trip/carousel-4.png"
    },
  	{
    	image: "../assets/coffee_trip/carousel-5.png"
    }
  ]
});