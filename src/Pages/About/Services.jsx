import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
  'https://Logicruise.com/wp-content/uploads/2023/10/Ads.svg',
  'https://Logicruise.com/wp-content/uploads/2023/10/iecl.svg',
  'https://Logicruise.com/wp-content/uploads/2023/05/gewch.svg',
  'https://Logicruise.com/wp-content/uploads/2023/05/make-the-dot-1.svg',
  'https://Logicruise.com/wp-content/uploads/2023/10/Solaire.svg'
];

const SlideItem = ({ index }) => (
  <div className="flex items-center justify-center h-20 bg-blue-800 mx-auto p-4">
    <img src={logos[index % logos.length]} alt={`Logo ${index + 1}`} className="max-h-12 max-w-full" />
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 2000, // Transition speed in milliseconds
  autoplay: true, // Auto play slides
  autoplaySpeed: 2000, // Time between slides in milliseconds
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
  draggable: true,
  arrows: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

const Services = () => {
  return (
    <div className='bg-white text-gray-800'>
      <div className="text-center mt-20 px-5">
        <h4 className="text-blue-500 font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-2">
          T H O U G H T S &nbsp; A N D &nbsp; B L O G S
        </h4>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4'>
          Read My Narrative
        </h1>
        <h5 className='text-gray-600 text-sm sm:text-base md:text-lg'>
          Pages filled with design wisdom, imagination, and much more
        </h5>
      </div>
      <div className='lg:flex justify-evenly text-gray-800 lg:mt-40 mt-20 p-5'>
        <div className='lg:w-1/2'>
          <h5 className='text-gray-600 text-base lg:text-lg'>
            MARKETING SOLUTIONS PROVIDER
          </h5>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-blue-500 mt-5'>
            We’re a leader in digital <br /> marketing solutions
          </h2>
        </div>
        <div className='lg:w-1/3 text-gray-700 lg:mt-0 mt-10'>
          <p className='text-base sm:text-lg'>
            After years of experience, we have learned that each marketing channel has its own unique advantages, but they work best when strategically combined with other channels. Therefore, we provide our clients with full-service strategies that utilize a comprehensive mix of digital channels to enhance visibility, boost conversions, and drive revenue.
          </p>
        </div>
      </div>
      <div className='mx-auto mt-40 text-blue-500 font-bold'>
        <h5 className='font-semibold mb-10 text-center'>OUR CLIENTS</h5>
        <div id='slider' className="mx-auto w-full bg-blue-800">
          <Slider {...settings}>
            {[...Array(8).keys()].map((_, index) => (
              <SlideItem key={index} index={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Services;
