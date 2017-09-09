import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {ContactForm} from "./forms.jsx";
import {MainMenu} from "./menus.jsx";

class BackgroundSlider extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      slider1Display: "inline",
      slider2Display: "none",
      slider3Display: "none"
    }
  }

  componentDidMount() {

    this.intervalId = setInterval(() => {
      if (this.state.slider1Display == "inline") {
        this.setState({slider1Display: "none", slider2Display: "inline", slider3Display: "none"});
      } else if (this.state.slider2Display == "inline") {
        this.setState({slider1Display: "none", slider2Display: "none", slider3Display: "inline"});
      } else if (this.state.slider3Display == "inline") {
        this.setState({slider1Display: "inline", slider2Display: "none", slider3Display: "none"});
      }
    }, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {

    const BackgroundSliderStyle = styled.img `
      width: 100vw;
      height: 85vh;
      object-fit: cover;
      float: left;
      position: absolute;
      z-index: -1;

      display: ${props => props.slide1 && this.state.slider1Display};
      display: ${props => props.slide2 && this.state.slider2Display};
      display: ${props => props.slide3 && this.state.slider3Display};
`;

    return (
      <div>
        <BackgroundSliderStyle slide1 src="./images/slide1.jpg"></BackgroundSliderStyle>
        <BackgroundSliderStyle slide2 src="./images/slide2.jpg"></BackgroundSliderStyle>
        <BackgroundSliderStyle slide3 src="./images/slide3.jpg"></BackgroundSliderStyle>
      </div>
    )
  }
}

export class BackgroundSliderWithForm extends React.Component {
  render() {
    return <div><BackgroundSlider/>
    <MainMenu/>
    <ContactForm/>
    </div>
  }
}
