import React, { Component } from "react";
import Input from "../../UI/input/input";
import Button from "../../UI/button/button";
import "./enquirySection.css";

class EnquirySection extends Component {
  state = {
    enquiryForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
        },
        value: "",
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name",
        },
        value: "",
      },
      phone: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Phone Number",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
        },
        value: "",
      },
      enquiry: {
        elementType: "textArea",
        elementConfig: {
          type: "text",
          placeholder: "How can we help you?",
        },
        value: "",
      },
    },
  };

  onTextInput = (event, inputIdentifier) => {
    let updatedForm = { ...this.state.enquiryForm };

    let updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;

    updatedForm[inputIdentifier] = updatedFormElement;
    console.log(updatedForm)
    this.setState({ enquiryForm: updatedForm });
  };

  render() {
    const { enquiryForm } = this.state;

    let formElementsArray = [];

    for (let key in enquiryForm) {
      formElementsArray.push({
        id: key,
        config: enquiryForm[key],
      });
    }


    let form = formElementsArray.map((formElement) => {
      return (
        <Input
          key={formElement.id}
          type={formElement.config.elementConfig.type}
          placeholder={formElement.config.elementConfig.placeholder}
          elementtype={formElement.config.elementType}
          value={formElement.config.value}
          waschanged={(event) => this.onTextInput(event, formElement.id)}
        />
      );
    });

    return (
      <section id="enquirySection">
        <div className="enquirySection container">
          <h3 className="section-title white">forklift enquiry</h3>
          <div className="enquiryForm">
            <form className="form">
              {form} <Button buttonStyle="red-button" label="Send Message" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default EnquirySection;
