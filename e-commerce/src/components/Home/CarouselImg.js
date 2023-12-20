import Carousel from "./Carousel";


export default function ImageCarousel() {
    let slides = [
        "./img/carousel.jpg",
        "./img/carousel.jpg",

      ];
    
      return (
        <div className="w-full m-auto">
          <Carousel slides={slides} />
        </div>
      );
    }

