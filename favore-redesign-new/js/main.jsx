import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {ContactForm} from "./forms.jsx";
import {PanelWithStats} from "./panels.jsx";
import {MenuFixed} from "./menus.jsx";
import {PromotedBoxesSlider} from "./main_promoted.jsx";
import {ProfitMaxBoxes} from "./profit_max_box.jsx";
import {Footer} from "./footer.jsx";
import {BackgroundSliderWithForm} from "./backgroundslider.jsx";

document.addEventListener('DOMContentLoaded', function() {

  class App extends React.Component {
    render() {
      return <div>
        <BackgroundSliderWithForm/>
        <PanelWithStats/>
        <PromotedBoxesSlider/>
        <ProfitMaxBoxes/>
        <Footer/>
        <MenuFixed/>
      </div>
    }
  }

  ReactDOM.render(
    <App/>, document.getElementById('app'));
});
