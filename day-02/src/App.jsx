import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 89.99,
      rating: 4.5,
      quantity: 0,
      stock: 2,
      image:
        "https://images.unsplash.com/photo-1518444028785-8f0c1f8b5b7b?w=600",
      description:
        "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality.",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      category: "Electronics",
      price: 129.99,
      rating: 4.3,
      quantity: 0,
      stock: 20,
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600",
      description:
        "Track your health and fitness with heart-rate monitoring, sleep tracking, step counter, and smartphone notifications.",
    },
    {
      id: 3,
      name: "Men's Running Shoes",
      category: "Fashion",
      price: 74.99,
      rating: 4.6,
      quantity: 0,
      stock: 50,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      description:
        "Lightweight and breathable running shoes designed for comfort, durability, and high performance.",
    },
    {
      id: 4,
      name: "Leather Travel Backpack",
      category: "Accessories",
      price: 59.99,
      rating: 4.2,
      quantity: 0,
      stock: 15,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600",
      description:
        "Stylish leather backpack with multiple compartments, perfect for travel, work, and everyday use.",
    },
    {
      id: 5,
      name: "Gaming RGB Mouse",
      category: "Electronics",
      price: 39.99,
      rating: 4.7,
      stock: 60,
      quantity: 0,
      image:
        "https://images.unsplash.com/photo-1587202372775-989f0c38d4b0?w=600",
      description:
        "High-precision gaming mouse with customizable RGB lighting and programmable buttons for ultimate performance.",
    },
    {
      id: 6,
      name: "Classic UV Sunglasses",
      category: "Fashion",
      price: 24.99,
      rating: 4.1,
      quantity: 0,
      stock: 80,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
      description:
        "Trendy UV-protected sunglasses designed for style and eye protection during sunny days.",
    },
  ]);
  const [cardItems, setCardItems] = useState([]);
  const [selectCategory, setSelectedCategory] = useState("All");
 

  const categories = ["All", ...new Set(products.map((item) => item.category))];
  const filteredProducts = selectCategory === "All" ? products : products.filter((p) => p.category === selectCategory);
  // console.log(filteredProducts)
  console.log("all Categories", categories)

  const increaseValue = (id) => {
    const findmatch = products.find((item) => item.id === id);
    if (findmatch) {
      setProducts(
        (prevState) =>
          prevState.map((item) =>
            item.id === id
              ? item.quantity < item.stock
                ? { ...item, quantity: item.quantity + 1 }
                : item
              : item,
          ),
        // prevState.map((item)=> item.id === id ? {...item, quantity:item.quantity+1}:item )
      );
    }
  };

  const decreaseValue = (id) => {
    const findmatch = products.find((item) => item.id === id);
    if (findmatch) {
      setProducts((prevState) =>
        prevState.map((item) =>
          item.id === id
            ? item.quantity <= 0
              ? { ...item, quantity: 0 }
              : { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  const addToCart = (id) => {
    const checkitems = cardItems.find((item) => item.id === id);
    const productdetail = products.find((item) => item.id === id);
    const productquantity = productdetail.quantity;
    if (productquantity === 0) {
      console.log("Quantity is 0 )");
    } else {
      // console.log(products);
      if (checkitems) {
        setCardItems((prevState) =>
          prevState.map((item) =>
            item.id == id
              ? { ...item, quantity: item.quantity + productquantity }
              : item,
          ),
        );
      } else {
        setCardItems((prevState) => [...prevState, productdetail]);
      }
      setProducts((prevState) =>
        prevState.map((item) =>
          item.id === id
            ? { ...item, stock: item.stock - productquantity, quantity: 0 }
            : item,
        ),
      );
      console.log(products);
    }
  };

  const total = cardItems.reduce((sum,item)=>
            sum +(item.price*item.quantity),
          
          
          
         0 )
         console.log(total)


  const handleValueChange =(e)=> {
    console.log(e.target.value)
    setSelectedCategory(e.target.value)

  }
  return (
    <>


    <select onChange={handleValueChange} value={selectCategory}>
      {
        categories.map((item,index)=>
          <option key={index} value={item} >{item}</option> 
        
        
        
        )
      }
      


    </select>

      <h2>Products</h2>

      <div className="products-container">
        {filteredProducts?.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
            <h4>Price</h4>
            <span>{item.price}</span>
            <h5>Stock</h5>
            <span>{item.stock}</span>

            <div className="quantity">
              <button onClick={() => increaseValue(item.id)}>+</button>
              <input type="text" readOnly value={item.quantity} />
              <button onClick={() => decreaseValue(item.id)}>-</button>
            </div>

            <button className="add-btn" onClick={() => addToCart(item.id)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div>
        <h1>Cart</h1>
        {cardItems.length === 0 ? (
          <>
            {" "}
            <span>Card is empty</span>
          </>
        ) : (
          <>
            {cardItems?.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.image} alt={item.image} />
                </div>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <div>
                  <button>+</button>
                  <input type="text" readOnly value={item.quantity || 0} />
                  <button>-</button>
                </div>
              </div>
            ))}
          </>
        )}

        
          <h4>total:</h4><span>{total}</span>

        



        

         
          
      
        
       
      
        








      </div>
    </>
  );
};

export default App;