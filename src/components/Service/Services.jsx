import React from "react";
import { SiMysql } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { DiPhotoshop } from "react-icons/di";
import { SiBlender } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="skills">
      <Slide direction="down">
        <h4>
          My <span className="green">Skills</span>
        </h4>
        <h1>Technologies I work with</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BiLogoReact}
            title={"Frontend Designning"}
            disc={`I have used React to develop web applications. 
                   I have also used bootstrap as ccs styling and Html and Css as well.
                   Front end development is more fun.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={SiSpringboot}
            title={"Backend Designning"}
            disc={`I'm good at Node.js environment and have used it to develop multiple backend applications.
            I have used Spring Boot for developments which uses Java Programming.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={FiFigma}
            title={"web designning"}
            disc={`UI/UX designning is one of the favourite thing I do for fun.
            I use Figma which is a collaborative web application for interface design, 
            with additional offline features.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={SiMysql}
            title={"DataBase"}
            disc={` My favorite database is MySQL. 
             As it is an open-source relational database management system
             which is very flexible and easy to use.
             I have also used MSSQL as well`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={DiPhotoshop}
            title={"2D Image Designning"}
            disc={`I used to work with adobe Photoshop and adobe Illustrator.
            When ever I get free time I do edit some images and create some attractive designs.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiBlender}
            title={"3D graphic applications"}
            disc={` Blender is a free and open-source 3D computer 
            graphics software tool that I used for creating animated content and
             Interactive 3D applications.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaAws}
            title={"Cloud / Hosting"}
            disc={`Amazon Web Services provides on-demand cloud computing platforms,
                   I Workedon a project which is hosting through AWS.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaMicrochip}
            title={"Microchip Technology"}
            disc={`I specifically used microchip technology in a hardware project.
            apart from that I also familiar with the arduino technology as well`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;