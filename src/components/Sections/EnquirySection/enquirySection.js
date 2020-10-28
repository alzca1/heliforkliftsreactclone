import React, { Component } from "react";
import Input from "../../UI/input/input";
import Button from "../../UI/button/button";
import emailjs from "emailjs-com";
import "./enquirySection.css";
import input from "../../UI/input/input";

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
        valid: false,
        touched: false,
        validation: {
          required: true,
          touched: false,
          minLength: 2,
          maxLength: 15,
        },
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
          touched: false,
          minLength: 2,
          maxLength: 15,
        },
      },
      phone: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Phone Number",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
          touched: false,
          minLength: 9,
          maxLength: 15,
        },
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
          touched: false,
        },
      },
      enquiry: {
        elementType: "textArea",
        elementConfig: {
          type: "text",
          placeholder: "How can we help you?",
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
          touched: false,
          minLength: 10,
          maxLength: 500,
        },
      },
    },
    isFormValid: false,
  };

  onTextInput = (event, inputIdentifier) => {
    let updatedForm = { ...this.state.enquiryForm };

    let updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;

    updatedFormElement.valid = this.formValidator(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
      this.setState({ isFormValid: formIsValid });
    }
    this.setState({ enquiryForm: updatedForm });
  };

  handleBlur(inputIdentifier) {
    console.log("handling_blur");
    let updatedForm = { ...this.state.enquiryForm };
    let updatedFormElement = { ...updatedForm[inputIdentifier] };
    updatedFormElement.touched = true;

    updatedForm[inputIdentifier] = updatedFormElement;
    console.log(updatedForm);
    this.setState({ enquiryForm: updatedForm });
  }

  formSubmitted = (event) => {
    event.preventDefault();
    const { name, lastName, phone, email, enquiry } = this.state.enquiryForm;

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;
    const userID = process.env.REACT_APP_EMAILJS_USERID;
    const templateID = "template_o9fx3x1";

    const form = {
      from_name: `${name.value} ${lastName.value}`,
      from_phone: phone.value,
      from_email: email.value,
      message: enquiry.value,
    };

    emailjs.send(serviceID, templateID, form, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  formValidator(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

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
          name={formElement.id}
          type={formElement.config.elementConfig.type}
          placeholder={formElement.config.elementConfig.placeholder}
          elementtype={formElement.config.elementType}
          value={formElement.config.value}
          waschanged={(event) => this.onTextInput(event, formElement.id)}
          className="inputElement"
          isvalid={formElement.config.valid? 'true': 'false'}
          touched={formElement.config.touched? 'true': 'false'}
          onBlur={() => this.handleBlur(formElement.id)}
        />
      );
    });

    return (
      <section id="enquirySection">
        <div className="enquirySection container">
          <h3 className="section-title white">forklift enquiry</h3>
          <div className="enquiryForm">
            <form
              className="form"
              id="form"
              onSubmit={(event) => this.formSubmitted(event)}
            >
              {form}
              <button
                type="submit"
                className="submitButton"
                disabled={!this.state.isFormValid}
              >
                Send Message
              </button>
              {/* <input
                type="submit"
                label="send message"
                className="submitButton"
                value="Send Message"
              /> */}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default EnquirySection;
