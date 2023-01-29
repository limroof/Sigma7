import React from "react";
import Home from "./home/home.jsx";
import Presentation from "./presentation/presentation.jsx";
import Gallerie from "./gallery/Gallerie.jsx";
import Contact from "./contact/contact.jsx";

import Header from "../Component/Header/Header.jsx";
import Footer from "../Component/Footer/Footer.jsx";
import {
  /* BrowserRouter,  */ HashRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Index() {
  return (
    <HashRouter basename='/'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} title='Ismailos' />
        <Route
          path='/presentation'
          element={<Presentation />}
          title='Ismailos'
        />
        <Route path='/gallerie' element={<Gallerie />} title='Ismailos' />
        <Route path='/contact' element={<Contact />} title='Ismailos' />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
