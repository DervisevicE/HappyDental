import React, { useState, useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import './Order.css';
import { useNavigate } from 'react-router-dom';

import {Button} from "@mui/material";

const Order = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const dentalProducts = useMemo(() => [
    { id: 1, name: 'Dental Implants', description: 'Titanium dental implants', price: '$200.00', availableQuantity: 50 },
    { id: 2, name: 'Composite Fillings', description: 'Tooth-colored composite fillings', price: '$50.00', availableQuantity: 100 },
    { id: 3, name: 'Porcelain Veneers', description: 'Custom-made porcelain veneers', price: '$150.00', availableQuantity: 75 },
    { id: 4, name: 'Dental Crowns', description: 'Porcelain dental crowns', price: '$120.00', availableQuantity: 30 },
    { id: 5, name: 'Teeth Whitening Kits', description: 'Professional teeth whitening kits', price: '$80.00', availableQuantity: 20 },
    { id: 6, name: 'Orthodontic Braces', description: 'Metal orthodontic braces', price: '$1500.00', availableQuantity: 60 },
    { id: 7, name: 'Dental Bridges', description: 'Fixed dental bridges', price: '$250.00', availableQuantity: 45 },
    { id: 8, name: 'Dental Scalers', description: 'Professional dental scalers', price: '$80.00', availableQuantity: 25 },
    { id: 9, name: 'Dental X-Ray Machine', description: 'Digital dental X-ray machine', price: '$5000.00', availableQuantity: 15 },
  ], []);

  const columns = useMemo(() => [
    { Header: 'Product Name', accessor: 'name' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Unit Price', accessor: 'price' },
    { Header: 'Quantity Available', accessor: 'availableQuantity' },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
    prepareRow,
  } = useTable({ columns, data: dentalProducts, initialState: { pageSize: 8 } }, usePagination);

  const handleOrder = () => {
    console.log(`Ordering ${quantity} of ${selectedProduct}`);
  };

  const handleCancel = () => {
    setSelectedProduct('');
    setQuantity('');
  };

  const navigate = useNavigate();

  const goToNewPage = () => {
    navigate('/dental-clinic/show-orders');
  };

  return (
    <div className="order_section_container" id="order-product">
      <div className="order_content">
        <div className="product_table_container">
          <table {...getTableProps()} className="product_table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
          </div>
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
             <Button
               variant="contained"
               onClick={handleOrder}
                  sx={{
                    backgroundColor: "#02282b",
                    padding: 1,
                    width: "100%",
                    color: "white",
                    marginBottom: "10px",
                    borderColor: "#02282b",
                    "&:hover": {
                      backgroundColor: "#01585b",
                    },
                  }}
             >
               ORDER PRODUCT
             </Button>

             <Button
               variant="contained"
               onClick={handleCancel}
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    padding: 1,
                    color: "#02282b",
                    borderColor: "#02282b",
                    "&:hover": {
                      backgroundColor: "#f2f2f2",
                    },
                  }}
             >
               CANCEL
             </Button>

             <Button
               onClick={goToNewPage}
                  sx={{
                    backgroundColor: "#01585b",
                    padding: 1,
                    width: "100%",
                    color: "white",
                    marginBottom: "10px",
                    borderColor: "#02282b",
                    marginTop: "90px",
                    "&:hover": {
                      backgroundColor: "#017f82",
                    },
                  }}
             >
               SHOW ORDERS
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
