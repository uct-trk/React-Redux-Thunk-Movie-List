import Footer from "./components/Footer";
import { Provider } from 'react-redux'
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import store from './redux/store'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Component } from "react";
import Movie from './components/Movie'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/movie/:id" component={Movie}/>
          <Footer />
        </Router>
      </Provider>

    );
  }
}

export default App;
