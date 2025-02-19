import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="d-flex">
      <Sidebar open={sidebarOpen} />
      <div className="flex-grow-1">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Container fluid className="main-content">
          {children}
        </Container>
      </div>
    </div>
  );
};

export default Layout;