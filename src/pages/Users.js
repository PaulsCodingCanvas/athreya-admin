// src/pages/Users.js
import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Users = () => {
  return (
    <Container fluid>
      <h2 className="mb-4">Users Management</h2>
      <Button variant="primary" className="mb-3">Add New User</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Student</td>
            <td>
              <Button variant="info" size="sm" className="me-2">Edit</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;



