import { Route, Switch } from "react-router-dom";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";


// eslint-disable-next-line react/prop-types
const Routes = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearence }) => {
    return (
      <div>
         <Switch>
            <Route Route path="/" exact>
              <Products productItems={productItems}
               handleAddProduct={handleAddProduct} />
            </Route>
            <Route path="/signup" exact>
              <Signup/>
            </Route>
            <Route path="/cart" exact>
              <Cart cartItems={cartItems}
               handleAddProduct={handleAddProduct}
               handleRemoveProduct={handleRemoveProduct}
               handleCartClearence={handleCartClearence} />
            </Route>
        </Switch>  
      </div>
    )
  }
  
  export default Routes