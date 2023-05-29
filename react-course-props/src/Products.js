import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <Table>
        <thead>
          <tr>
          
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr>
              <td key={index}>{product}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
