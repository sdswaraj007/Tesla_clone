import React from "react";
import Header from "./Header";
import Section from "./Section";
import styled from "styled-components";
import data from "./carInfo.json";

function Home() {
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        disc="Order Online for Touchless Delivery"
        backimg="/images/model-s.jpg"
        leftbut="customer order"
        rightbut="exesting inventory"
      />
      <Section
        title="Model 3"
        disc="Order Online for Touchless Delivery"
        backimg="/images/model-3.jpg"
        leftbut="customer order"
        rightbut="exesting inventory"
      />
      <Section
        title="Model Y"
        disc="Order Online for Touchless Delivery"
        backimg="/images/model-y.jpg"
        leftbut="customer order"
        rightbut="exesting inventory"
      />
      <Section
        title="Model X"
        disc="Order Online for Touchless Delivery"
        backimg="/images/model-x.jpg"
        leftbut="customer order"
        rightbut="exesting inventory"
      />
      <Section
        title="Lowest cost Solar Panels in America"
        disc="Money-back Gurantee"
        backimg="/images/solar-panel.jpg"
        leftbut="Order Now"
        rightbut="Learn more"
      />
      <Section
        title="Solar New Roofs"
        disc="Tesla Solar Roofs costs less than the Stander Roofs"
        backimg="/images/solar-roof.jpg"
        leftbut="Order Now"
        rightbut="Learn more"
      />
      <Section
        title="Accessories"
        disc=""
        backimg="/images/accessories.jpg"
        leftbut="Shop Now"
        // rightbut="Learn more"
      />
      {/* props are important for the dynamic representation of the site */}
      {/* <Section /> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  ${"" /* font-size: 30px; */}
  text-align: center;
`;
