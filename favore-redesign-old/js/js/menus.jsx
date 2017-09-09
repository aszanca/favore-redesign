import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export class MenuFixed extends React.Component {
  render() {

  const MenuFixedBox = styled.ul `
  position: fixed;
  display: flex;
  list-style-type: none;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 90vw;
  `;

    return <MenuFixedBox>
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
    </MenuFixedBox>
  }
}

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "orange"
    }
  }

  ButtonMouseEnter = (event) => {
    this.setState({backgroundColor: "darkorange"});
  }

  ButtonMouseLeave = (event) => {
    this.setState({backgroundColor: "orange"});
  }

  render() {

    const Button = styled.button `
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

    @media (max-width: 666px) {
    order: 1;
    height: 5vh;
    width: 88vw;
    align-items: center;
    margin-right: 8vw;
    	}
    `;

    return <Button color onMouseEnter={this.ButtonMouseEnter} onMouseLeave={this.ButtonMouseLeave}>Świadczysz usługi? Zobacz zlecenia
    </Button>
  }
};

    const Logo = styled.img `
    padding-top: 1vh;
    width: 150px;
    height: 50px;
    `;

export class MainMenu extends React.Component {
  render() {

    const Menu = styled.menu `
    padding-top: 1.5vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    `;

    return <Menu>
      <Logo src="images/logo_favore_hp_white.png"/>
      <Button/>
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
    `;

    const IconClose = styled.img`
      top: 0;
      right: 25px;
      margin-left: 50px;
  width: 30px;
  height: 30px;
    `;

    const Ul = styled.ul`

    height: 100%;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: darkgrey;
      overflow-x: hidden;
      padding-top: 3vh;
      transition: 0.5s;
      font-family: helvetica, arial, sans-serif;


    > li {
      padding: 1vh 2vw 1vh 3vw;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
      text-align: right;
      line-height: 30px;
      align-items: left;
      font-size: 1rem;
      font-weight: 200;

            a {
            				text-decoration-line: none;

            				&:link {
            					color: white;
            				}
            				&:visited {
            					color: white;
            				}
            				&:active {
            					color: white;
            				}

  				}

    `;

      return <menu>
        <HamburgerMenu hamburger onClick={this.handleHamburgerClick}>
          <Icon src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Rozwiń menu kategorii"></Icon>
        </HamburgerMenu>
        <HamburgerMenu dropdown onClick={this.handleDropdownClick}>

          <Ul>
          <li>
          <IconClose src="images/close.png"/>
          </li>
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
          </Ul>

        </HamburgerMenu>
      </menu>
    }
  }
