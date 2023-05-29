import React from 'react';
import { Table } from 'reactstrap';

const Dashboard = ({ members }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;
