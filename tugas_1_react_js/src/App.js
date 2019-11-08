import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import MenuUtama from "./page/MenuUtama";
import MenuProduct from "./page/MenuProduct";
import MenuKontak from "./page/MenuKontak";
import MenuTentangKami from "./page/MenuTentangKami";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MenuUtama/>
        <MenuProduct/>
        <MenuKontak/>
        <MenuTentangKami/>
        <Footer/>
      </div>
    );
  }
}

export default App;
