import React, { useRef ,useState} from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import Customer from '../../assets/customer.jpg';
import Admin from '../../assets/admin.jpg';
import Calculator from '../../assets/calculator.jpg';
import Portpolio from '../../assets/portpolio.jpg';
import Student from '../../assets/Student.jpg';

let data = [
    {
        img:Customer,
        disc : "Customer page for an online laundry portal",
        git :"https://github.com/nudara2000/Customer-page-Project"
    },
    {
        img :Admin,
        disc : "Admin Dashboard for an online laundry portal",
        git :"https://github.com/RuntimeTerrorOG/onlinedeliveryportal-frontend/tree/udara_dilaksha_feature_admin"
    },
    {
        img :Calculator,
        disc : "Basic Function Calculator using react",
        git:"https://github.com/nudara2000/React_Calculator"
    },
    {
        img : Portpolio,
        disc : "This website for My Portfolio",
        git:""
    },
    {
        img : Student,
        disc : "Student Registration Fullstack application",
        git:"https://github.com/nudara2000/Student_System_Front-End",

    },
  
];



var settings = {
  className: 'center',
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const SliderComp = () => {
  const arrowRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleDescription = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  let sliderProject = '';
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} active={i === activeIndex} toggleDescription={() => toggleDescription(i)} />
  ));

  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className='back'>
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className='next'>
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 3rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #4db5ff;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;