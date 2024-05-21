import React, { useState } from 'react';
import { Button } from '@mui/material';
import { divide } from 'lodash';


const orders =[
  {id:1, orderdetails:{ name: "Dental Implants",quantityOrdered: "2"},orderDate:"12-12-1999"},
  {id:2, orderdetails:{ name: "Dental Implants",quantityOrdered: "2"},orderDate:"12-12-1999"},
  {id:3, orderdetails:{ name: "Dental Implants",quantityOrdered: "2"},orderDate:"12-12-1999"},
  {id:4, orderdetails:{ name: "Dental Implants",quantityOrdered: "2"},orderDate:"12-12-1999"}
]
const ShowOrders = () => {
  return (
/* <Button variant="contained" sx={{
  backgroundColor:"red"
}}>Containedssss</Button> */
  <div className='show_orders_container'>
    <div className='order_container'>
      <div className='order_table'>
        <table className='order_table'>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Order Details</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order)=>(
              <tr key={order.id}>
              <td>{order.id}</td>
              <td>
                <tr>{order.orderdetails.name}</tr>
                <tr>{order.orderdetails.quantityOrdered}</tr>
              </td>
              <td>{order.orderDate}</td>
              <td><Button variant="contained" sx={{backgroundColor:"green"}}>Confirm</Button></td>
              <td><Button variatn="contained" sx={{backgroundColor:"red",color:"white"}}>Cancel</Button></td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default ShowOrders;