import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export class PanelWithStats extends React.Component {
  render() {

    const Panel = styled.div`
    display: flex;
    padding-top: 10vh;
    align-content: center;
    justify-content: center;
    `;
    
    const H2 = styled.h2`
    font-family: helvetica, arial, sans-serif;
    font-size: 1.7rem;
    font-weight: ${props => props.weight ? '500' : '300'};
    text-shadow: 1px #134c95;
    padding: 0 0.5vw 0 0.5vw;

    color: ${props => props.orange ? 'orange' : '#134c95'};
    `;

    const H3 = styled.h3`
    font-family: helvetica, arial, sans-serif;
    font-size: 1rem;
    font-weight: ${props => props.weight ? '500' : '300'};
    text-shadow: 1px #134c95;
    padding: 0 0.5vw 0 0.5vw;

    color: ${props => props.orange ? 'orange' : '#134c95'};
    `;

    const A = styled.a`
    color: orange;
    `;

    return <Panel>
      <H2>Favore.pl to:
      </H2>
      <H2 orange weight>
        200 000
      </H2>
      <H3>najlepszych firm<br/>
        ze wszystkich branż<br/>
        <A href="/search/">przeglądaj ogłoszenia »</A>
      </H3>
      <H2 orange weight>18 000 000</H2>
      <H3>potencjalnych klientów szukających
        <br/>
        wykonawcy lub dostawcy<br/>
      <A href="/zlecenia">zobacz aktualne zlecenia »</A>
      </H3>
    </Panel>
  }
}
