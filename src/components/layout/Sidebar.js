import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ open }) => {
  const location = useLocation();

  return (
    <div className={`sidebar ${open ? 'open' : 'closed'}`} style={{ width: open ? '250px' : '0' }}>
      <Nav className="flex-column pt-3">
        <Nav.Link as={Link} to="/" active={location.pathname === '/'}>
          Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/users" active={location.pathname === '/users'}>
          Users
        </Nav.Link>
        <Nav.Link as={Link} to="/attendance" active={location.pathname === '/attendance'}>
          Attendance
        </Nav.Link>
        <Nav.Link as={Link} to="/results" active={location.pathname === '/results'}>
          Results
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
