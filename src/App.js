import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Category} from "./pages/Category";
import {NotFound} from "./pages/404";
import {Recipe} from "./pages/Recipe";

function App() {
    return (
        <>
            <Router basename="/food-site">
                <Header/>
                <main className="content container">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/contacts" component={Contact}></Route>
                        <Route path="/category/:name">
                            <Category/>
                        </Route>
                        <Route path="/meal/:id">
                            <Recipe/>
                        </Route>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
