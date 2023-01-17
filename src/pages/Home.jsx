import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
// import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../utils/mocks/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider/>
      </section>

     {/* =========== testimonial section =========== */}
    <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Sonhos realizados</h6>
              <h2 className="section__title">nosso clientes</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Nossos Prodrutos</h6>
              <h2 className="section__title"></h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
     
      {/* =========== about section ================ */}
      
        <AboutSection />
   
      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Veja</h6>
              <h2 className="section__title">Nosso Blog</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
