import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

const App = () => {
  const title = "React Uygulaması";
  const menuItems = ["Anasayfa", "Hakkımızda", "İletişim"];
  const members = [
    { name: 'Alihan Tokuc', email: 'info@example.com', role: 'Admin' },
    { name: 'İsmail Yazıcı', email: 'info@example1.com', role: 'User' },
    { name: 'Hasan Yıldırım', email: 'info@example2.com', role: 'User' },
  ];
  return (
    <Container fluid>
      <Row>
        <Col xs="12">
          <Navbar title={title} />
        </Col>
        <Col xs="3">
          <Menu menuItems={menuItems} />
        </Col>
        <Col xs="9">
        <Dashboard members={members} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
