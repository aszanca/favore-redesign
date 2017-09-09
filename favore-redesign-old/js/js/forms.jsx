import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export class ContactFormHeader extends React.Component {
  render() {

    const H1 = styled.h1 `
color: white;
font-family: helvetica, arial, sans-serif;
font-weight: 300;
text-shadow: 1px 1px 8px grey;
padding: 2vh;
font-size: 1.5rem;
align-items: center;

@media (min-width: 769px) and (max-width: 1024px){
font-size: 1.7rem;
align-items: center;
}

@media (min-width: 1025px) {
  font-size: 1.8rem;
  align-items: center;
	}
`;
    return <H1>
      200 000 sprawdzonych firm czeka na zlecenia od Ciebie
    </H1>
  }
};

class SubmitButton extends React.Component {

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

    const SubmitButton = styled.button `
border-radius: 0.4rem;
margin-top: 0.5vh;
color: white;
font-size: 1rem;
text-transform: uppercase;
font-family: Helvetica, sans-serif;
font-weight: 300;
border-style: none;
outline: none;
margin: 0.5vh;
width: 85vw;
height: 5vh;

background-color: ${props => props.color && this.state.backgroundColor};

@media (min-width: 769px) and (max-width: 1024px){
  width: 60vw;
  height: 5vh;
}

@media (min-width: 1025px) {
  width: 600px;
  height: 40px;
 }
`;

    return <SubmitButton color onMouseEnter={this.ButtonMouseEnter} onMouseLeave={this.ButtonMouseLeave}>
      Wyślij >>
    </SubmitButton>
    } }; export class ContactForm extends React.Component {constructor(props) {
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
        formValid: " "
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
        this.setState({formValid: `Dziękujemy za przesłanie zlecenia! Niebawem wykonawcy skontaktują się z Tobą!`})
      } else {
        this.setState({formValid: " "});
      };
    };

    render() {

      const Label = styled.label `
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

      const ContactFormBox = styled.div `
background-color: hsla(214, 77%, 33%, 0.8);
height: 52vh;
width: 92vw;
justify-content: center;
align-content: center;
align-items: center;

@media (min-width: 769px) and (max-width: 1024px){
  width: 70vw;
  height: 59vh;
}

@media (min-width: 1025px) {
  width: 65vw;
  height: 60vh;

 }
`;

      const FormAll = styled.div `
display: flex;
flex-direction: column;
 align-content: center;
  justify-content: center;
   align-items: center;
`;

      const Textarea = styled.textarea `
width: 85vw;
height: 8vh;
align-items: center;

@media (min-width: 769px) and (max-width: 1024px){
  width: 60vw;
  height: 18vh;
}

@media (min-width: 1025px) {
  width: 600px;
  height: 150px;
 }
`;

      const Input = styled.input `
width: 85vw;
height: 4vh;

@media (min-width: 769px) and (max-width: 1024px){
  width: 60vw;
  height: 3vh;
}

@media (min-width: 1025px) {
  width: 600px;
  height: 25px;
 }
`;

      const Validation = styled.div `
color: red;

`;

      const FormValidation = styled.p `
color: green;
padding-top: 1vh;
`;

      const FormInputsTitle = styled.div `
padding-top: 1vh;
`;

      const SubmitButtonBox = styled.div `
padding-top:1vh;
display:flex;
justify-content:center;
align-content:center;
`;

      return <FormAll>
        <ContactFormHeader/>
        <ContactFormBox>
          <Validation>
            <p>{this.state.emailValid}</p>
            <p>{this.state.contentValid}</p>
            <p>{this.state.postCodeValid}</p>
            <p>{this.state.phoneValid}</p>
            <FormValidation>
              {this.state.formValid}
            </FormValidation>
          </Validation>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Label>
                <FormInputsTitle>
                  Co jest do zrobienia?
                </FormInputsTitle>
                <Textarea value={this.state.content} onChange={this.handleContentChange}/>
              </Label>
            </div>
            <div>
              <Label>
                <FormInputsTitle>
                  E-mail:
                </FormInputsTitle>
                <Input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
              </Label>
            </div>
            <div>
              <Label>
                <FormInputsTitle>
                  Twój kod pocztowy:
                </FormInputsTitle>
                <Input type="text" value={this.state.postCode} onChange={this.handlePostCodeChange}/>
              </Label>
            </div>
            <div>
              <Label>
                <FormInputsTitle>
                  Twój numer telefonu (opcjonalnie):
                </FormInputsTitle>
                <Input type="text" value={this.state.phone} onChange={this.handlePhoneChange}></Input>
              </Label>
            </div>
            <Label>
              <FormInputsTitle>
                <input type="checkbox" value="agree"></input>Akceptuję regulamin
              </FormInputsTitle>
            </Label>
            <SubmitButtonBox>
              <SubmitButton/>
            </SubmitButtonBox>
          </form>
        </ContactFormBox>
      </FormAll>
    };
}
