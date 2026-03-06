import './App.css';
import products from './Products';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import ShowCart from './components/ShowCart';

function App() {

  const [cart,setCart]=useState([])
  const [cartDisplay,setCartDisplay]=useState(false)
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter]=useState()
  const [sortorder, setSetorder]=useState("")

  const AddtoCart=(p)=>{
    const existingItem= cart.find((item)=> item.id===p.id)

    let newcart;

    if (existingItem){
      newcart= cart.map((i)=>
        i.id===p.id
      ? {...i, quantity: i.quantity+1}
      : i
      );
    } else{
      newcart=[...cart,{...p, quantity:1}]
    }

    setCart(newcart)
  }

  const refreshCart = (cartItems) => {
    setCart(cartItems);
  }
  const filteredProducts= products.filter((p)=>{
  const matchessearch=p.product.toLowerCase().includes(search)
  let matchesCategory;
  if (categoryFilter){
    if (categoryFilter===p.category){
      matchesCategory= true
    } else{
      matchesCategory=false
    }
  } else{
    matchesCategory=true
  }
 return matchessearch && matchesCategory
  }
  )

  if(sortorder==="lowTOhigh"){
    filteredProducts.sort((a,b)=>a.price-b.price)
  } else{
   filteredProducts.sort((a,b)=>b.price-a.price)
  }



  return (
    <div className="App">

      {/* Navbar */}
      <header className="navbar">
        <h2>MyStore</h2>
      {!cartDisplay && (
        <div className='filter-wrapper'>
          <select 
          value={categoryFilter}
          onChange={(e)=>setCategoryFilter(e.target.value)}
          >
          <option value="">All categories</option>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
        </select>
        <select 
          value={sortorder}
          onChange={(e)=>setSetorder(e.target.value)}
          >
          <option value="">sort by</option>
          <option value="lowTOhigh">Price:Low → High</option>
          <option value="highTOlow">Price: High → Low</option>
        </select>
                <input 
        type='text'
        value={search}
        placeholder='Enter the search term'
        onChange={(e)=> setSearch(e.target.value)}
         className="search-input"
        />
        </div>
        
      )}





        {!cartDisplay && (
          <button
            className="cart-btn"
            onClick={()=> setCartDisplay(true)}
          >
            🛒 Cart ({cart.reduce((acc,i)=>acc+i.quantity,0)})
          </button>
        )}
      </header>

      {/* Page Content */}
      <div className="container">

        {!cartDisplay && (
          <ProductCard
            products={filteredProducts}
            AddtoCart={AddtoCart}
          />
        )}

        {cartDisplay && (
          <>
            <ShowCart
              cart={cart}
              refreshCart={refreshCart}
           
            />

            <button
              className="back-btn"
              onClick={()=> setCartDisplay(false)}
            >
              Back to Products
            </button>
          </>
        )}

      </div>

    </div>
  );
}

export default App;