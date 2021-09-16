import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";
import { UIContextProvider } from "./context/UIContext";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { Checkout } from "./components/Checkout/Checkout";
import { Footer } from "./components/Footer/Footer";
import { AboutMe } from "./components/AboutMe/AboutMe";


function App() {

  return (

    <>
   
      <UIContextProvider>
       
        <CartProvider>

          <BrowserRouter>

            <NavBar/>

            <Switch>
            
                <Route exact path="/">
                 <ItemListContainer/>
                </Route>
                
                <Route exact path="/category/:catId">
                 <ItemListContainer/>
                </Route>

                <Route exact path="/detail/:itemId">
                 <ItemDetailContainer/>
                </Route>

                <Route exact path="/aboutme">
                 <AboutMe/>
                </Route>

                <Route exact path="/cart">
                 <CartScreen/>
                </Route>

                <Route exact path="/checkout">
                  <Checkout/>
                </Route>

                <Route path="*">
                  <Redirect to="/"/>
                </Route>

            </Switch>

            <Footer/>
            
          </BrowserRouter>

        </CartProvider>

      </UIContextProvider> 

    </>
    
  );
}

export default App;

