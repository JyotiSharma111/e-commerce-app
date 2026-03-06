export const IncreaseItem = (cart, c) => {
  /* c already exists in cart-no need to check
    find the item in cart (use map) and increase quantity by 1*/
  let newcart = cart.map((i) =>
    i.id === c.id ? { ...i, quantity: i.quantity + 1 } : i,
  );
  return newcart;
};

export const DecreaseItem = (cart, c) => {
  /*
    let result = [];
    function cartMap(i){
     if (i.id===c.id && i.quantity>=1){
          i.quantity--;
        }
      result.push(i);
      return result;
    }
    */
  let newcart = cart.map(
    (i) => {
      if (i.id === c.id && i.quantity >= 1) {
        i.quantity--;
      }
      return i;
    },
    /*   i.id===c.id && i.quantity>=1
      ? {...i, quantity:i.quantity-1}
      : i
    */
  );
  let finalcart = newcart.filter((items) => items.quantity > 0);
  return finalcart;
};

export const RemoveFromCart = (cart, c) => {
  let newcart = cart.filter((item) => item.id !== c.id);
  return newcart;
};
