import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistrationForm.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const countries = [
  "Select Country",
  "USA",
  "Canada",
  "Australia",
  "United Kingdom",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Europe",
  "England",
  "South Korea",
  "Taiwan",
  "Vietnam",
  "Thailand",
  "Philippines",
  "Indonesia",
  "Malaysia",
  "Singapore",
  "Hong Kong",
  "Russia",
  "Mexico",
  "South Africa",
  "Nigeria",
  "Other",
];
const TShirt = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL"];
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    apartment: "",
    city: "",
    postalCode: "",
    country: "Select Country",
    churchName: "",
    ministryPosition: "",
    officeTitle: "",
    husbandName: "",
    tShirtSize: "",
  });


  const [isButtonClicked, setIsButtonClicked] = useState(false);
  
  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="registration-form-container form">
      <h2 className="text-center">Registration Form</h2>

      <Container className="mt-4 text pb-5">
        <Form onSubmit={handleSubmit} method="post" className="text-white">
          <Row>
            <Col sm={12} md={6}>
              <Form.Group controlId="formFirstName" className="pick">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  style={{ width: "70%" }}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  style={{ width: "70%" }}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  style={{ width: "70%" }}
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  style={{ width: "70%" }}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formAddress">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your street address"
                  name="streetAddress"
                  style={{ width: "70%" }}
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formApartment">
                <Form.Label>Apartment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your apartment"
                  name="apartment"
                  style={{ width: "70%" }}
                  value={formData.apartment}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your city"
                  name="city"
                  style={{ width: "70%" }}
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formZipCode">
                <Form.Label>ZIP/Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your ZIP/Postal code"
                  name="postalCode"
                  style={{ width: "70%" }}
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: "70%" }}
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formChurchName">
                <Form.Label>Name of Church</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the name of your church"
                  name="churchName"
                  style={{ width: "70%" }}
                  value={formData.churchName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formMinistryPosition">
                <Form.Label>Position in Ministry</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your position in ministry"
                  name="ministryPosition"
                  style={{ width: "70%" }}
                  value={formData.ministryPosition}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formOfficeTitle">
                <Form.Label>Title of Office</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your office title"
                  name="officeTitle"
                  style={{ width: "70%" }}
                  value={formData.officeTitle}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formHusbandsName">
                <Form.Label>Husband's Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your husband's name"
                  name="husbandsName"
                  style={{ width: "70%" }}
                  value={formData.husbandsName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6} className="pick">
              <Form.Group controlId="formTShirtSize">
                <Form.Label>T-Shirt Size</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: "70%" }}
                  name="tShirtSize"
                  value={formData.tShirtSize}
                  onChange={handleChange}
                >
                  {TShirt.map((tShirtSize, index) => (
                    <option key={index} value={tShirtSize}>
                      {tShirtSize}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            className="btn"
            onClick={handleButtonClick}
            style={{
              // backgroundColor: isButtonClicked ? "pink" : "white",
              // color: isButtonClicked ? "white" : "pink",
              backgroundColor: isButtonClicked
                ? "rgb(209, 33, 153)"
                : " rgb(255, 253, 255)",
              color: isButtonClicked
                ? "rgb(255, 253, 255)"
                : "rgb(209, 33, 153)",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegistrationForm;
