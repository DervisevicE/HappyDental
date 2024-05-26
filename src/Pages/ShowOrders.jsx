import React from 'react';
import { Button } from '@mui/material';
import './ShowOrders.css';

const orders = [
  { id: 1, orderdetails: { name: 'Dental Implants', quantityOrdered: '2' }, orderDate: '12-12-1999' },
  { id: 2, orderdetails: { name: 'Dental Implants', quantityOrdered: '2' }, orderDate: '12-12-1999' },
  { id: 3, orderdetails: { name: 'Dental Implants', quantityOrdered: '2' }, orderDate: '12-12-1999' },
  { id: 4, orderdetails: { name: 'Dental Implants', quantityOrdered: '2' }, orderDate: '12-12-1999' },
];

const ShowOrders = () => {
  return (
    <div className='show_orders_container'>
      {orders.map((order) => (
        <div className='order_card' key={order.id}>
          <div><strong>Order Number:</strong> {order.id}</div>
          <div><strong>Order Details:</strong></div>
          <div>Name: {order.orderdetails.name}</div>
          <div>Quantity Ordered: {order.orderdetails.quantityOrdered}</div>
          <div><strong>Order Date:</strong> {order.orderDate}</div>
          <div className='order_buttons'>
            <Button variant="contained" className='confirm_button'>Confirm</Button>
            <Button variant="contained" className='cancel_button'>Cancel</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowOrders;
