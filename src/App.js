// Package import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// container import
import Home from "./containers/Home";

// component import
import Header from "./components/Header";
import Footer from "./components/Footer";

//SCSS import
import "./App.scss";

// fontAwesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faEdit, faTrashAlt, faPlus);

// const server = "http://localhost:3000";
const server = "https://product-list-back.herokuapp.com";

function App() {
    return (
        <Router>
            {/* HEADER COMPONENT */}
            <Header />
            <Switch>
                {/* HOME CONTAINER */}
                <Route path="/">
                    <Home server={server} />
                </Route>
            </Switch>
            {/* FOOTER COMPONENT */}
            <Footer />
        </Router>
    );
}

export default App;
