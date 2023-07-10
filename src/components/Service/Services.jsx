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
    <Container id="service">
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
        <Slide direction="up">
          <Card
            Icon={SiSpringboot}
            title={"Backend Designning"}
            disc={`I'm good at Node.js environment and have used it to develop multiple backend applications.
            I have used Spring Boot for developments.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiFigma}
            title={"web designning"}
            disc={`UI/UX designning is one of the favourite thing I do for fun.
            I use Figma which is a collaborative web application for interface design, 
            with additional offline features.`}
          />
        </Slide>
        <Slide direction="right34343">
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
            title={"Art Designning"}
            disc={` My favorite database is MySQL. 
             As it is an open-source relational database management system
             which is very flexible and easy to use.
             I have also used MSSQL as well`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiBlender}
            title={"Blender"}
            disc={` Blender is a free and open-source 3D computer 
            graphics software tool set used for creating animated films, visual effects, 
            art, 3D-printed models, motion graphics, interactive 3D applications.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaAws}
            title={"Cloud / Hosting"}
            disc={`Amazon Web Services, Inc. is a subsidiary of Amazon that 
            provides on-demand cloud computing platforms`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaMicrochip}
            title={"Microchip Technology"}
            disc={`Amazon Web Services, Inc. is a subsidiary of Amazon that 
            provides on-demand cloud computing platforms`}
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