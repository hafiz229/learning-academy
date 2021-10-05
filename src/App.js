import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Services from "./Services/Services";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          {/* general path setting */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          {/* handling wrong addresses */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
