import React, { useState, useMemo, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import './Order.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dentalProducts, setDentalProducts] = useState([]);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);

  const columns = useMemo(() => [
    { Header: 'Product Name', accessor: 'productName' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Unit Price', accessor: 'unitPrice' },
    { Header: 'Quantity Available', accessor: 'quantityAvailable' },
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products/all');
        setDentalProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchSelectedProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products/${selectedProduct}`);
        setSelectedProductDetails(response.data);
      } catch (error) {
        console.error('Error fetching selected product details:', error);
      }
    };

    if (selectedProduct) {
      fetchSelectedProductDetails();
    }
  }, [selectedProduct]);

  const handleOrder = async () => {
    try {
      const response = await axios.post('http://localhost:8080/orders/add', {
        productId: selectedProduct,
        quantityOrdered: quantity
      });
      console.log('Order placed:', response.data);
      toast.success('Order placed successfully', { position: "top-right" });
      handleCancel();
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Error placing order', { position: "top-right" });
    }
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
                <option key={product.id} value={product.id}>{product.productName}</option>
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Order;
