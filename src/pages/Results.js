// src/pages/Results.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Results = () => {
  return (
    <Container fluid>
      <h2 className="mb-4">Results Management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Class X-A</td>
            <td>Mathematics</td>
            <td>85</td>
            <td>A</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Results;