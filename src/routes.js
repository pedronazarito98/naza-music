import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Artistas } from "./pages/Artistas";
import { Blog } from "./pages/Blog";
import { Contato } from "./pages/Contato";
import { Servicos } from "./pages/Servicos";
import { Shows } from "./pages/Shows";
import { Sobre } from "./pages/Sobre";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Release } from "./pages/Artistas/Release";
import { Navbar } from "./components/Navbar/NavBar";


export default function Routes() {
  return (
    <BrowserRouter>
      {/* <Parallax pages={3.2}> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/artistas" component={Artistas} />
        <Route path="/artista/:id" component={Release} />
        <Route path="/blog" component={Blog} />
        <Route path="/contato" component={Contato} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/shows" component={Shows} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
      <Footer />
      {/* </Parallax> */}
    </BrowserRouter>
  );
}
