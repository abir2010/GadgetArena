import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import DataProvider from "./Contexts/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
