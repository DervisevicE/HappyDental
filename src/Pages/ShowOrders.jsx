import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';
import './ShowOrders.css';

const ShowOrders = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupContent, setPopupContent] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/orders');
      setOrders(response.data.content);
      console.log('orderi su ovdje', response.data.content)

    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    if (openPopup) {
      let filteredOrders = [];
      if (popupTitle === 'Confirmed Orders') {
        filteredOrders = orders.filter(order => order.status === 'confirmed');
      } else if (popupTitle === 'Canceled Orders') {
        filteredOrders = orders.filter(order => order.status === 'canceled');
      }

      setPopupContent(
        <div>
          <DialogTitle>{popupTitle}</DialogTitle>
          <DialogContent>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr 2fr', gap: '8px' }}>
              <div>
                <strong>Order ID</strong>
                {filteredOrders.map(order => (
                  <div key={order.id}>{order.id}</div>
                ))}
              </div>
              <div>
                <strong>Name</strong>
                {filteredOrders.map(order => (
                  <div key={order.id}>{order.orderdetails.name}</div>
                ))}
              </div>
              <div>
                <strong>Quantity</strong>
                {filteredOrders.map(order => (
                  <div key={order.id}>{order.orderdetails.quantityOrdered}</div>
                ))}
              </div>
              <div>
                <strong>Price</strong>
                {filteredOrders.map(order => (
                  <div key={order.id}>{order.orderdetails.price}</div>
                ))}
              </div>
              <div>
                <strong>Order Date</strong>
                {filteredOrders.map(order => (
                  <div key={order.id}>{order.orderDate}</div>
                ))}
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPopup(false)}>Close</Button>
          </DialogActions>
        </div>
      );
    }
  }, [openPopup, orders, popupTitle]);

  const openOrdersPopup = (title) => {
    setPopupTitle(title);
    setOpenPopup(true);
  };

  return (
    <div className='show_orders_container'>
      <div className='popup_buttons'>
        <Button variant="contained" onClick={() => openOrdersPopup('Confirmed Orders')}>Confirmed Orders</Button>
        <Button variant="contained" onClick={() => openOrdersPopup('Canceled Orders')}>Canceled Orders</Button>
      </div>
      {orders.map((order) => (
        <div className='order_card' key={order.id}>
          <div><strong>Order Number:</strong> {order.id}</div>
          <div><strong>Order Details:</strong></div>
          <div>Quantity Ordered: {order.quantityOrdered}</div>
          <div><strong>Order Date:</strong> {order.orderDateTime}</div>
          <div className='order_buttons'>
            <Button variant="contained" className='confirm_button'>Confirm</Button>
            <Button variant="contained" className='cancel_button'>Cancel</Button>
          </div>
        </div>
      ))}
      <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        {popupContent}
      </Dialog>
    </div>
  );
};

export default ShowOrders;
