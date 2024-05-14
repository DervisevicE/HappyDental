import React, { useState } from 'react';
import "./Order.css";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  // Dummy data for dental products from supplier
  const dentalProducts = [
    { id: 1, name: "Dental Implants", description: "Titanium dental implants", price: "$200.00", availableQuantity: 50 },
    { id: 2, name: "Composite Fillings", description: "Tooth-colored composite fillings", price: "$50.00", availableQuantity: 100 },
    { id: 3, name: "Porcelain Veneers", description: "Custom-made porcelain veneers", price: "$150.00", availableQuantity: 75 },
    { id: 4, name: "Dental Crowns", description: "Porcelain dental crowns", price: "$120.00", availableQuantity: 30 },
    { id: 5, name: "Teeth Whitening Kits", description: "Professional teeth whitening kits", price: "$80.00", availableQuantity: 20 },
    { id: 6, name: "Orthodontic Braces", description: "Metal orthodontic braces", price: "$1500.00", availableQuantity: 60 },
    { id: 7, name: "Dental Bridges", description: "Fixed dental bridges", price: "$250.00", availableQuantity: 45 },
    { id: 8, name: "Dental Scalers", description: "Professional dental scalers", price: "$80.00", availableQuantity: 25 },
    { id: 9, name: "Dental X-Ray Machine", description: "Digital dental X-ray machine", price: "$5000.00", availableQuantity: 15 },
  ];

  const handleOrder = () => {
    console.log(`Ordering ${quantity} of ${selectedProduct}`);
  };

  const handleCancel = () => {
    setSelectedProduct("");
    setQuantity("");
  };

  const navigate = useNavigate()

  const gotToNewPage=()=>{
     navigate("/dental-clinic/show-orders");
  }

  return (
    <div className="order_section_container" id="order-product">
      <div className="order_content">
        <div className="product_table_container">
          <table className="product_table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Unit Price</th>
                <th>Quantity Available</th>
              </tr>
            </thead>
            <tbody>
              {dentalProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.availableQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="order_form_container">
          <div className="form_group">
            <label htmlFor="productName">Product Name</label>
            <select
              id="productName"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Select Product</option>
              {dentalProducts.map((product) => (
                <option key={product.id} value={product.name}>{product.name}</option>
              ))}
            </select>
          </div>
          <div className="form_group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="order_form_buttons">
            <button className="order_button" onClick={handleOrder}>
              ORDER PRODUCT
            </button>
            <button className="cancel_button" onClick={handleCancel}>
              CANCEL
            </button>
            <button onClick={() => gotToNewPage()} className="show_orders_button">SHOW ORDERS</button>
{/*             <Link to="/dental-clinic/show-orders" className="show_orders_button"> */}
{/*               SHOW ORDERS */}
{/*             </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
