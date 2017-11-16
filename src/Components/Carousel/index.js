import React, { Component } from 'react';

import './style.css';

class Carousel extends Component {
  render() {
    const { carouselSlides, Dots = null} = this.props;
    return (
     <div className="carouselRoot">
       {Dots && <Dots />}
       {
         carouselSlides.map((slide, index) => (
           <div className="carouselSlide">
             {slide}
           </div>
         ))
       }
     </div>
   );
  }
}

export default Carousel;
