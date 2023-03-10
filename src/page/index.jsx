import React from "react";
import Home from "./home/home.jsx";
import Presentation from "./presentation/presentation.jsx";
import Gallerie from "./gallery/Gallerie.jsx";
import Contact from "./contact/contact.jsx";
import Header from "../Component/Header/Header.jsx";
import Footer from "../Component/Footer/Footer.jsx";
import ScrollToTop from "../helpers/ScrollToTop.js";
import {
  /* BrowserRouter,  */ HashRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Index() {
  return (
    <HashRouter basename='/'>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home title='Accueil' />} />
        <Route
          path='/presentation'
          element={<Presentation title='Presentation' />}
        />
        <Route path='/gallerie' element={<Gallerie title='Gallerie' />} />
        <Route path='/contact' element={<Contact title='Contact' />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
