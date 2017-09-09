import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

class ProfitMaxBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      borderBottom: "lightgrey"
    }
  }

  ButtonMouseEnter = (event) => {
    this.setState({borderBottom: "orange"});
  }

  ButtonMouseLeave = (event) => {
    this.setState({borderBottom: "lightgrey"});
  }

  render() {

    const Box = styled.div `
  height: 15vh;
  width: 300px;
  background-repeat: no-repeat;
  margin: 2.5vw;
  display: flex;
  align-items: flex-end;
  background-image: url(${this.props.imageUrl});
  `;

    const Title = styled.h3 `
  height: 6.5vh;
  width: 300px;
  color: hsl(214, 77%, 33%);
  font-family: helvetica, arial, sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  background-color: hsla(360, 100%, 100%, 0.7);
  padding-left: 0.5vw;
  padding-top: 0.5vh;
  border-bottom-color: ${props => props.bottom && this.state.borderBottom};
  `;

    return <Box onMouseEnter={this.ButtonMouseEnter} onMouseLeave={this.ButtonMouseLeave}>
      <Title>{this.props.title}</Title>
    </Box>

  }
};

export class ProfitMaxBoxes extends React.Component {

  render() {

    const Promoted = styled.h2 `
    font-family: helvetica, arial, sans-serif;
    color: #134c95;
    font-size: 1.7rem;
    margin-right: 10vw;
    `;

    return <div>
      <Promoted>
        Ostatnie ogłoszenia z pakietem Max i Profit
      </Promoted>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <ProfitMaxBox title="Chemiczne czyszczenie wymienników ciepła" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <ProfitMaxBox title="Mycie okien" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <ProfitMaxBox title="Remonty i wykończenia wnętrz" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <ProfitMaxBox title="Rozwój biznesowy i osobisty. Coaching" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <ProfitMaxBox title="Przeprowadzki Lublin" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <ProfitMaxBox title="Wynajem pawilonów, zadaszeń" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <ProfitMaxBox title="Leasingi, kredyty, pożyczki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <ProfitMaxBox title="Pożyczyki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <ProfitMaxBox title="Ozonowanie pomieszczeń i samochodów" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <ProfitMaxBox title="Rozwój biznesowy i osobisty. Coaching" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <ProfitMaxBox title="Przeprowadzki Lublin" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <ProfitMaxBox title="Wynajem pawilonów, zadaszeń" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
        <ProfitMaxBox title="Leasingi, kredyty, pożyczki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_1.jpg"/>
        <ProfitMaxBox title="Pożyczyki" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_2.jpg"/>
        <ProfitMaxBox title="Ozonowanie pomieszczeń i samochodów" localization="Wrocław" price="100zł/h" imageUrl="images/main_promoted_3.jpg"/>
      </div>
    </div>
  }
}
