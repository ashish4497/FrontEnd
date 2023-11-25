import Image from 'next/image';
import React from 'react';
import  "./style.css";
import bannerbg from "../../imges/04.png";
import bannerbg1 from "../../imges/07.png";
import bannerbg2 from "../../imges/06.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function CarouselSider() {
  return (
    <Carousel 
    swipeable={false}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={!true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
      <div className='bf-img'>
          <div style={{
             backgroundImage: `url(${bannerbg.src})`,
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
             width: "100vw",
             height: "100vh",
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center'
          }}>
            <h2 className='title-text'>premium <br/>xip <br/> hoodies</h2>
          </div>
      </div>
      <div className='bf-img'>
          <div style={{
             backgroundImage: `url(${bannerbg2.src})`,
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
             width: "100vw",
             height: "100vh",
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center'
          }}>
            <h2 className='title-text'>premium <br/>tees</h2>
          </div>
      </div>
      <div className='bf-img'>
          <div style={{
             backgroundImage: `url(${bannerbg1.src})`,
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat",
             width: "100vw",
             height: "100vh",
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center'
          }}>
            <h2 className='title-text-2'>heritage <br/> tees</h2>
          </div>
      </div>
      </Carousel>
  )
}
