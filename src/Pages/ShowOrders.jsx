import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import axios from 'axios';
import './ShowOrders.css';

const ShowOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [products, setProducts] = useState({});
  const [openPopup, setOpenPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupContent, setPopupContent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/orders/all');
      const orders = response.data;

      // Fetch product details for each order
      const productPromises = orders.map(order => fetchProduct(order.productId));
      await Promise.all(productPromises);

      setAllOrders(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
    setLoading(false);
  };

  const fetchProduct = async (productId) => {
    try {
      if (!products[productId]) {
        const response = await axios.get(`http://localhost:8080/products/${productId}`);
        setProducts(prevProducts => ({
          ...prevProducts,
          [productId]: response.data
        }));
      }
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
    }
  };

  const confirmOrder = async (orderId) => {
    try {
      await axios.put(`http://localhost:8080/orders/${orderId}/confirm`);
      setAllOrders(allOrders.filter(order => order.id !== orderId));
      fetchPopupData();
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  const cancelOrder = async (orderId) => {
    try {
      await axios.put(`http://localhost:8080/orders/${orderId}/cancel`);
      setAllOrders(allOrders.filter(order => order.id !== orderId));
      fetchPopupData();
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  const fetchPopupData = async () => {
    setLoading(true);
    if (popupTitle !== '') {
      let endpoint = '';
      if (popupTitle === 'Confirmed Orders') {
        endpoint = 'confirmed';
      } else if (popupTitle === 'Canceled Orders') {
        endpoint = 'canceled';
      }
      try {
        const response = await axios.get(`http://localhost:8080/orders/${endpoint}`);
        const orders = response.data;

        // Fetch product details for each order in popup
        const productPromises = orders.map(order => fetchProduct(order.productId));
        await Promise.all(productPromises);

        setPopupContent(orders);
      } catch (error) {
        console.error(`Error fetching ${endpoint} orders:`, error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPopupData();
  }, [popupTitle]);

  const openOrdersPopup = (title) => {
    setPopupTitle(title);
    setOpenPopup(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className='show_orders_container'>
      <div className='popup_buttons'>
        <Button variant="contained" onClick={() => openOrdersPopup('Confirmed Orders')}>Confirmed Orders</Button>
        <Button variant="contained" onClick={() => openOrdersPopup('Canceled Orders')}>Canceled Orders</Button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        allOrders.map((order) => (
          <div className='order_card' key={order.id}>
            <div><strong>Order Number:</strong> {order.id}</div>
            <div><strong>Order Date:</strong> {formatDate(order.orderDateTime)}</div>
            <div><strong>Product Name:</strong> {products[order.productId] ? products[order.productId].productName : 'Loading...'}</div>
            <div><strong>Quantity Ordered:</strong> {order.quantityOrdered}</div>
            <div className='order_buttons'>
              <Button variant="contained" className='confirm_button' onClick={() => confirmOrder(order.id)}>Confirm</Button>
              <Button variant="contained" className='cancel_button' onClick={() => cancelOrder(order.id)}>Cancel</Button>
            </div>
          </div>
        ))
      )}
        <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
          {popupContent && (
            <div>
              <DialogTitle>{popupTitle}</DialogTitle>
              <DialogContent>
                <table className='popup-table'>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Order ID</th>
                      <th>Order Date</th>
                      <th>Quantity Ordered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popupContent.map(order => (
                      <tr key={order.id}>
                        <td>{products[order.productId] ? products[order.productId].productName : 'Loading...'}</td>
                        <td>{order.id}</td>
                        <td>{formatDate(order.orderDateTime)}</td>
                        <td>{order.quantityOrdered}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenPopup(false)}>Close</Button>
              </DialogActions>
            </div>
          )}
        </Dialog>
    </div>
  );
};

export default ShowOrders;
