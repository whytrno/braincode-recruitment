/* @refresh reload */
import {render} from 'solid-js/web';

import './index.css';
import App from './App';
import {Route, Router} from "@solidjs/router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(() => (
    <Router root={App}>
        <Route path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/contact" component={ContactPage}/>
    </Router>
), root!);
