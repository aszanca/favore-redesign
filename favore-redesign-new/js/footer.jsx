import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

class FooterMenu extends React.Component {

  render() {

    const FooterMenuColumn = styled.div `
color: hsl(214, 77%, 33%);
font-family: helvetica, arial, sans-serif;
font-weight: 200;
`;

    const Ul = styled.ul `
list-style-type: none;
`;

    const FooterMenuContainer = styled.div `
display: flex;
justify-content: space-around;
align-items: center;
`;

    return (
      <FooterMenuContainer>
        <FooterMenuColumn>
          <h4>FAVORE.PL</h4>
          <Ul>
            <li>O nas</li>
            <li>Aktualności</li>
            <li>Polityka Prywatności</li>
            <li>Regulamin</li>
            <li>Kontakt</li>
          </Ul>
        </FooterMenuColumn>

        <FooterMenuColumn>
          <h4>WSPÓŁPRACA</h4>
          <Ul>
            <li>Reklama</li>
            <li>Program Partnerski</li>
            <li>Cetrum Webmastera</li>
            <li>Praca</li>
            <li>e-prawnik.pl</li>
          </Ul>
        </FooterMenuColumn>

        <FooterMenuColumn>
          <h4>STRONY FAVORE.PL</h4>
          <Ul>
            <li>Usługi</li>
            <li>Zlecenia</li>
            <li>Przetargi</li>
            <li>Centrum Finansowe</li>
            <li>Favore.pl mobile</li>
          </Ul>
        </FooterMenuColumn>

        <FooterMenuColumn>
          <h4>TEMATY POMOCY</h4>
          <Ul>
            <li>Kolejność ogłoszeń</li>
            <li>Jak zdobywać rangi?</li>
            <li>Jak wystawić opinię?</li>
            <li>Rangi wykonawców</li>
            <li>Cennik</li>
          </Ul>
        </FooterMenuColumn>

      </FooterMenuContainer>
    )
  }
};

class FooterLine extends React.Component {
  render() {
    return <div style={{
      display: "flex"
    }}>
      <div>
        <span>O NAS</span>
        <span>REKLAMA</span>
        <span>PRACA</span>
        <span>KONTAKT</span>
        <span>PROGRAM PARTNERSKI</span>
        <span>POMOC</span>
        <span>ARCHIWUM</span>
        <span>TAGI</span>
      </div>
      <div>
        <span>
        KORZYSTANIE Z PORTALU OZNACZA AKCEPTACJĘ
        <a href="/regulations">REGULAMINU</a>
        </span>
      </div>
    </div>
  }
}

export class Footer extends React.Component {
  render() {
    return <div>
      <FooterMenu/>
      <FooterLine/>
    </div>
  }
}
