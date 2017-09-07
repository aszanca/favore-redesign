import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";



export class ContactFormHeader extends React.Component {
  render() {

const H1 = styled.h1`
color: white;
font-family: helvetica, arial, sans-serif;
font-weight: 300;
text-shadow: 1px 1px 8px grey;


`


  return <H1> 200 000 sprawdzonych firm czeka na zlecenia od Ciebie </H1>
  }
};

class SubmitButton extends React.Component {

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

let SubmitButton = styled.button`

border-radius: 0.4rem;
margin-top: 0.5vh;
height: 4vh;
color: white;
font-size: 1rem;
text-transform: uppercase;
font-family: Helvetica, sans-serif;
font-weight: 300;
border-style: none;
outline: none;
width: 500px;

background-color: ${props => props.color && this.state.backgroundColor};

`;

return <SubmitButton color onMouseEnter={this.ButtonMouseEnter} onMouseLeave={this.ButtonMouseLeave}> Wyślij >> </SubmitButton>

}
};



export class ContactForm extends React.Component {
     constructor(props) {
    super(props);
   this.state = {

        email: " ",
     emailValid: " ",
 content: " ",
         contentValid: " ",
         postCode: " ",
         postCodeValid: " ",
         phone: " ",
         phoneValid: " ",
         formValid: " ",
      };
     }

      handleEmailChange = (event) => {
        this.setState({email: event.target.value})
      };

      handleContentChange = (event) => {
        this.setState({content: event.target.value});
      };

      handlePostCodeChange = (event) => {
        this.setState({postCode: event.target.value})
      };

      handlePhoneChange = (event) => {
        this.setState({phone: event.target.value})
      };

      handleSubmit = (event) => {
        event.preventDefault();


      if (this.state.content === " ") {
        this.setState({contentValid: "Proszę opisać czego potrzebujesz."});
      } else {
        this.setState({contentValid: " "});
       };

       if (this.state.phone === " ") {
         this.setState({phoneValid: "Proszę wypisać numer telefonu."});
       } else {
         this.setState({phoneValid: " "});
        };

       if (this.state.email.indexOf("@") === -1) {
        this.setState({emailValid: "Proszę wpisać poprawny adres e-mail"});
      } else {
        this.setState({emailValid: ''});
       };

       if (this.state.postCode === " ") {
        this.setState({postCodeValid: "Proszę wpisać poprawny kod pocztowy"});
      } else {
        this.setState({postCodeValid: ''});
       };

      if (this.state.phone !== " " && this.state.email.indexOf("@") !== -1 && this.state.content !== " " && this.state.postCode === " ") {
         this.setState({
          formValid: `Dziękujemy za przesłanie zlecenia! Niebawem wykonawcy skontaktują się z Tobą!`
        })
     } else {
         this.setState({formValid: " "});
       };
     };

    render() {

const Label = styled.label`

font-family: helvetica, arial, sans-serif;
color: white;
text-shadow: 1px 1px 10px grey;
font-weight: 100;
letter-spacing: 1.5px;
font-size: 16px;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
flex-direction: column;

`;

const ContactFormBox = styled.div`
background-color: hsla(214, 77%, 33%, 0.8);
height: 55vh;
width: 75vw;
justify-content: center;
align-content: center;
align-items: center;
`;







       return <div style={{display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
       <ContactFormHeader />
       <ContactFormBox>
         <div style={{
           color: "red"
        }}>
           <p>{this.state.emailValid}</p>
           <p>{this.state.contentValid}</p>
           <p>{this.state.postCodeValid}</p>
           <p>{this.state.phoneValid}</p>
           <p style={{
            color: "green"
           }}>
             {this.state.formValid}
           </p>
         </div>
         <form onSubmit={this.handleSubmit}>

<div>
           <Label>
           <div style={{paddingTop:"1vh"}}>
             Co jest do zrobienia?
             </div>
             <textarea style={{width:"500px", height:"120px"}} value={this.state.content} onChange={this.handleContentChange}/>
           </Label>
          </div>
          <div>
           <Label>
           <div style={{paddingTop:"1vh"}}>
             E-mail:
             </div>
             <input style={{width:"500px", height:"20px"}} type="text" value={this.state.email} onChange={this.handleEmailChange}/>
           </Label>
           </div>
           <div>
  <Label>
  <div style={{paddingTop:"1vh"}}>
            Twój kod pocztowy:
            </div>
             <input style={{width:"500px", height:"20px"}} type="text" value={this.state.postCode} onChange={this.handlePostCodeChange}/>
          </Label>
          </div>
          <div>
          <Label>
          <div style={{paddingTop:"1vh"}}>
Twój numer telefonu (opcjonalnie):
</div>
            <input  style={{width:"500px", height:"20px"}}type="text" value={this.state.phone} onChange={this.handlePhoneChange}></input>
          </Label>
          </div>
            <Label>
            <div style={{paddingTop:"1vh"}}>
            <input type="checkbox" value="agree"></input>Akceptuję regulamin
            </div>
            </Label>
            <div style={{paddingTop:"1vh", display:"flex", justifyContent:"center", alignContent:"center" }}>
              <SubmitButton/>
                            </div>
         </form>
         </ContactFormBox>
        </div>
      };
    };
