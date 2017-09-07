import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export class FooterMenu extends React.Component {
  render() {
    return <ul style={{
      position: "fixed",
      display: "flex",
      listStyleType: "none",
      left: "0px",
      bottom: "0px",
      height: "30px",
      width: "90vw"
    }}>
      <li>
        <a title="Dodaj usługi, które świadczysz" href="/login">Dodaj usługę
        </a>
      </li>
      <li>
        <a title="Dodaj produkty, które sprzedajesz" href="/login">Dodaj produkt
        </a>
      </li>
      <li>
        <a title="Dodaj zlecenie, dla którego szukasz wykonawcy" href="/dodaj-zlecenie">Dodaj zlecenie</a>
      </li>
      <li>
        <a title="Zaloguj się" href="/login">Logowanie/Rejestracja</a>
      </li>
    </ul>

  }
}

class Button extends React.Component {

constructor(props) {
super(props);
this.state = {
  backgroundColor: "orange",
}
}

ButtonMouseEnter = (event) => {
    this.setState({backgroundColor: "darkorange"});
}

ButtonMouseLeave = (event) => {
    this.setState({backgroundColor: "orange"});
}

render(){

let Button = styled.button`

border-radius: 0.4rem;
margin-top: 2vh;
height: 4vh;
color: white;
font-size: 1rem;
text-transform: uppercase;
font-family: Helvetica, sans-serif;
font-weight: 300;
border-style: none;
outline: none;

background-color: ${props => props.color && this.state.backgroundColor};

`;

return <Button color onMouseEnter={this.ButtonMouseEnter} onMouseLeave={this.ButtonMouseLeave}>Świadczysz usługi? Zobacz zlecenia >></Button>

}
};



class Logo extends React.Component {
  render() {
    return <img style={{
      paddingTop: "1vh",
      width: "150px",
      height: "50px"
    }} src="images/logo_favore_hp_white.png"/>
  }
}

export class MainMenu extends React.Component {
  render() {


const Menu = styled.menu `
padding-top: 1.5vh;
display: flex;
justify-content: space-around;
`


    return <Menu>

      <Logo/>
<Button />
<CategoryMenu/>
    </Menu>
  }
}

class CategoryMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerIcon: "flex",
      dropdownMenu: "none"
    };
  }

  handleHamburgerClick = () => {
    this.setState({hamburgerIcon: "none", dropdownMenu: "flex"});
  }

  handleDropdownClick = () => {
    this.setState({hamburgerIcon: "flex", dropdownMenu: "none"});
  }

  render() {

  const HamburgerMenu = styled.div`


  display: ${props => props.hamburger && this.state.hamburgerIcon};
  display: ${props => props.dropdown && this.state.dropdownMenu};
    `;

  const Icon = styled.img`
  color: "white";
  fill: currentColor;


  `

    return <menu>
      <HamburgerMenu hamburger onClick={this.handleHamburgerClick}>
        <Icon src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Rozwiń menu kategorii"></Icon>
      </HamburgerMenu>
      <HamburgerMenu dropdown onClick={this.handleDropdownClick}>
        <ul style={{
          listStyleType: "none"
        }}>
          <li>
            <a title="Zobacz usługi z kategorii Budowa, dom, ogród" href="/cat10_budowa-dom-ogrod.html">Budowa, Dom, Ogród</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Dla firmy i biura" href="/cat11_dla-firmy-i-biura.html">Dla Firmy i Biura</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Edukacja, nauka" href="/cat12_edukacja-nauka.html">Edukacja, Nauka</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Elektronika, foto, wideo" href="/cat13_elektronika-foto-wideo.html">Elektronika, Foto, Wideo</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Finansowe i prawne" href="/cat14_finansowe-i-prawne.html">Finansowe i Prawne</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Informatyka i telekomunikacja" href="/cat15_informatyka-i-telekomunikacja.html">Informatyka i Telekomunikacja</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Motoryzacja i transport" href="/cat16_motoryzacja-i-transport.html">Motoryzacja i Transport</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Rozrywka, imprezy i sztuka" href="/cat17_rozrywka-imprezy-i-sztuka.html">Rozrywka, Imprezy i Sztuka</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Rzemiosło i przemysł" href="/cat18_rzemioslo-i-przemysl.html">Rzemiosło i Przemysł</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Turystyka, sport i rekreacja" href="/cat19_turystyka-sport-i-rekreacja.html">Turystyka, Sport i Rekreacja</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Zdrowie i uroda" href="/cat20_zdrowie-i-uroda.html">Zdrowie i Uroda</a>
          </li>
          <li>
            <a title="Zobacz usługi z kategorii Pozostałe" href="/cat21_pozostale.html">Pozostałe</a>
          </li>
        </ul>
        <div>Schowaj menu</div>
      </HamburgerMenu>
    </menu>
  }
}
