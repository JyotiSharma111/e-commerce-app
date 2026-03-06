function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">MyStore</h2>

      <div className="cart">
        🛒 Cart ({cartCount})
      </div>
    </nav>
  );
}

export default Navbar;