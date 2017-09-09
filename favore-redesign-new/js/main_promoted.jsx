import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

class PromotedBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      panelDisplay: "none"
    }
  }

  ButtonMouseEnter = (event) => {
    event.preventDefault()
    this.setState({panelDisplay: "block"});
  }
  ButtonMouseLeave = (event) => {
    this.setState({panelDisplay: "none"});
  }

  render() {

    const Box = styled.div `
    height: 30vh;
		width: 300px;
		background-repeat: no-repeat;
		background-size: contain;
		margin: 2.5vw;
		display: flex;
		align-items: flex-end;
    background-image: url(${this.props.imageUrl});
    `;

    const Panel = styled.div `
    height: 6vh;
    box-sizing: border-box;
    font-family: helvetica, arial, sans-serif;
    font-weight: 400;
    position: absolute;
    padding-left: 0.5vw;
    color: hsl(214, 77%, 33%);
    font-size: 1rem;
    display: ${props => props.display && this.state.panelDisplay};
    `;

    const Title = styled.h3 `
    height: 6.5vh;
    width: 45vw;
    color: hsl(214, 77%, 33%);
    font-family: helvetica, arial, sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    background-color: hsla(360, 100%, 100%, 0.7);
    padding-left: 0.5vw;
    padding-top: 0.5vh;
    `;

    return <Box onMouseEnter={this.ButtonMouseEnter} onMouseLeave={this.ButtonMouseLeave}>
      <Title>{this.props.title}</Title>
      <Panel display>
        {this.props.localization}
        {this.props.price}</Panel>
    </Box>

  }
};

export class PromotedBoxesSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slider1Display: "flex",
      slider2Display: "none",
      slider3Display: "none"
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.slider1Display == "flex") {
        this.setState({slider1Display: "none", slider2Display: "flex", slider3Display: "none"});
      } else if (this.state.slider2Display == "flex") {
        this.setState({slider1Display: "none", slider2Display: "none", slider3Display: "flex"});
      } else if (this.state.slider3Display == "flex") {
        this.setState({slider1Display: "flex", slider2Display: "none", slider3Display: "none"});
      }
    }, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  SliderClick = (event) => {
    if (this.state.slider1Display == "flex") {
      this.setState({slider1Display: "none", slider2Display: "flex", slider3Display: "none"});
    } else if (this.state.slider2Display == "flex") {
      this.setState({slider1Display: "none", slider2Display: "none", slider3Display: "flex"});
    } else if (this.state.slider3Display == "flex") {
      this.setState({slider1Display: "flex", slider2Display: "none", slider3Display: "none"});
    }
  }

  SliderLeftClick = (event) => {
    if (this.state.slider1Display == "flex") {
      this.setState({slider1Display: "none", slider2Display: "none", slider3Display: "flex"});
    } else if (this.state.slider2Display == "flex") {
      this.setState({slider1Display: "flex", slider2Display: "none", slider3Display: "none"});
    } else if (this.state.slider3Display == "flex") {
      this.setState({slider1Display: "none", slider2Display: "flex", slider3Display: "none"});
    }
  }

  render() {

    const mySlider1Style = {
      display: this.state.slider1Display,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center"
    };

    const mySlider2Style = {
      display: this.state.slider2Display,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center"
    };

    const mySlider3Style = {
      display: this.state.slider3Display,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center"
    };

    const All = styled.div `
    font-family: helvetica, arial, sans-serif;
    color: #134c95;
    font-size: 1.2rem;
    align: right;
    `;

    const Promoted = styled.h2 `
    font-family: helvetica, arial, sans-serif;
    color: #134c95;
    font-size: 1.7rem;
    margin-right: 10vw;
    `;

    return <div>
      <Promoted>
        Promowane ogłoszenia
      </Promoted>
      <div style={mySlider1Style}>
        <PromotedBox title="Chemiczne czyszczenie" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Mycie okien" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="Remonty i wykończenia wnętrz" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <PromotedBox title="Rozwój biznesowy i osobisty" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Przeprowadzki Lublin" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="Wynajem pawilonów, zadaszeń" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <PromotedBox title="Leasingi, kredyty, pożyczki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Pożyczyki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="Ozonowanie pomieszczeń" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
      </div>
      <div style={mySlider2Style}>
        <PromotedBox title="Wyprowadzanie psów" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Kładzenie kafelków" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="Kominki - czyszczenie" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <PromotedBox title="Zajęcia z j. angielskiego" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Przeprowadzki Lublin" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <PromotedBox title="Leasingi, kredyty, pożyczki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Pożyczyki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="Wynajem pawilonów, zadaszeń" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
      </div>
      <div style={mySlider3Style}>
        <PromotedBox title="Zakupy dla osób starszych" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Sprzątanie" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="Event manager" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <PromotedBox title="Rozwój biznesowy i osobisty. Coaching" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Przeprowadzki Lublin" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="Wynajem pawilonów, zadaszeń" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <PromotedBox title="Opieka nad kotem" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <PromotedBox title="Pożyczyki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <PromotedBox title="Doradztwo finansowe" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "right",
        alignContent: "right"
      }}>
        <All onClick={this.SliderClick}>Przewiń
        </All>
      </div>
    </div>
  }
}
