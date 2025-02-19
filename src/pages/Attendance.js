// src/pages/Attendance.js
import React from 'react';
import { Container, Table, Form } from 'react-bootstrap';

const Attendance = () => {
  return (
    <Container fluid>
      <h2 className="mb-4">Attendance Management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Class</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Class X-A</td>
            <td>2024-02-19</td>
            <td>
              <Form.Check type="checkbox" label="Present" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Attendance;