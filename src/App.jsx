import React, { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      image: "https://picsum.photos/200?random=1",
      stock: 10,
      quantity: 0,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 150,
      image: "https://picsum.photos/200?random=2",
      stock: 8,
      quantity: 0,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 80,
      image: "https://picsum.photos/200?random=3",
      stock: 12,
      quantity: 0,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 45,
      image: "https://picsum.photos/200?random=4",
      stock: 15,
      quantity: 0,
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 95,
      image: "https://picsum.photos/200?random=5",
      stock: 7,
      quantity: 0,
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 35,
      image: "https://picsum.photos/200?random=6",
      stock: 20,
      quantity: 0,
    },
    {
      id: 7,
      name: "USB-C Hub",
      price: 40,
      image: "https://picsum.photos/200?random=7",
      stock: 14,
      quantity: 0,
    },
    {
      id: 8,
      name: "External SSD",
      price: 180,
      image: "https://picsum.photos/200?random=8",
      stock: 6,
      quantity: 0,
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleIncrease = (id) => {
    const findProduct = products.find((item) => item.id == id);
    console.log(findProduct);
    setProducts((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? item.quantity < item.stock
            ? { ...item, quantity: item.quantity + 1 }
            : item
          : item,
      ),
    );
  };

  const handleDecrease = (id) => {
    const findProduct = products.find((item) => item.id == id);
    console.log(findProduct);
    setProducts((prevState) =>
      prevState.map((item) =>
        item.id == id
          ? item.quantity <= 0
            ? { ...item, quantity: 0 }
            : { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleAddToCart = (id) => {
    const findProduct = products.find((item) => item.id == id);
    const findCartItems = cartItems.find((item) => item.id == id);
    const productQuantity = findProduct.quantity;
    if (productQuantity == 0) {          // if product quantity is 0
      alert("Add the products quantity");
    } else {
      if (findCartItems) {  // if any item already exists in card then just only update card quantity. 
        setCartItems((prevState) =>
          prevState.map((item) =>
            item.id == id
              ? { ...item, quantity: item.quantity + productQuantity }
              : item,
          ),
        );
      } else {  // if first time add items in card
        setCartItems((prevState) => [...prevState, findProduct]);
      }
    }
    setProducts((prevState) =>  // upadate the stock in product which is add in card{minus the stock in products} 
      prevState.map((item) =>
        item.id == id
          ? { ...item, stock: item.stock - productQuantity, quantity: 0 }
          : item,
      ),
    );
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginTop: "20px",
          color: "#2c3e50",
          fontWeight: "bold",
        }}
      >
        Products
      </h1>
      <div className="product-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">Price: ${item.price}</p>
            <p className="stock">Stock: {item.stock}</p>
            <div className="quantity-container">
              <button
                className="qty-btn"
                onClick={() => handleIncrease(item.id)}
              >
                +
              </button>
              <p className="quantity">Quantity: {item.quantity}</p>
              <button
                className="qty-btn"
                onClick={() => handleDecrease(item.id)}
              >
                -
              </button>
            </div>
            <div>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(item.id)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginTop: "20px",
          color: "#2c3e50",
          fontWeight: "bold",
        }}
      >
        Cart
      </h1>
      <div className="product-container">
        {cartItems.length == 0 ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginTop: "20px",
              color: "#2c3e50",
              fontWeight: "bold",
            }}
          >
            Card is empty...
          </p>
        ) : (
          cartItems.map((item) => (
            <div className="product-card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "20%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3>{item.name}</h3>
              <p className="price">Price: ${item.price}</p>

              <div className="quantity-container">
                <button className="qty-btn">+</button>
                <p className="quantity">Quantity: {item.quantity}</p>
                <button className="qty-btn">-</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
