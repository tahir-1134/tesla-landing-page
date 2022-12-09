import React from "react";
import styled from "styled-components";
import Section from "./Section";
import cars from "../carInfo";
function Home() {
  return (
    <Container>
      <Section
        sectionTitle={cars[0].title}
        description={cars[3].description}
        sectionImage={cars[0].image}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        sectionTitle={cars[1].title}
        description={cars[3].description}
        sectionImage={cars[1].image}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        sectionTitle={cars[2].title}
        description={cars[3].description}
        sectionImage={cars[2].image}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        sectionTitle={cars[3].title}
        description={cars[3].description}
        sectionImage={cars[3].image}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        sectionTitle="Solar Panels"
        description="Lowest cost solar Panels in America"
        sectionImage="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        sectionTitle="Solar Roofs"
        description="Produce Clean Energy From Your Roof"
        sectionImage="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        sectionTitle="Accessories"
        description=""
        sectionImage="accessories.jpg"
        leftBtnText="Shop Now"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
