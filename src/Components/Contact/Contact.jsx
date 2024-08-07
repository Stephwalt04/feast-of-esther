import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";


// const Contact = () => {
//   const [formData, setFormData] = useState({
//     yourName: "",
//     yourEmail: "",
//     yourMessage: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formDataObject = new FormData();
//     formDataObject.append("yourName", formData.yourName);
//     formDataObject.append("yourEmail", formData.yourEmail);
//     formDataObject.append("yourMessage", formData.yourMessage);

//     fetch(
//       "https://script.google.com/macros/s/AKfycbzaX9275JHoF68IMluBLlKwi873KSaFLwnWi27AXcJRDfBwtHxLE4Vxb8xACdp8WFd9/exec",
//       {
//         method: "POST",
//         body: formDataObject,
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };





const Contact = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct FormData object
    const formDataObject = new FormData();
    formDataObject.append("yourName", formData.yourName);
    formDataObject.append("yourEmail", formData.yourEmail);
    formDataObject.append("yourMessage", formData.yourMessage);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz1rskrNhQG1VFjeZz2ZuP1vNHXoX1_d1tyX5mr59viBHBgslYuzUGN-o37zYgRE6ri/exec",
        {
          method: "POST",
          body: formDataObject,
          mode: 'no-cors'
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

 

  return (
    <>
      <div className="body2">
        <Container>
          <Row className="position">
            <Col sm={12} md={4} className="bg-secondary pt-3 pb-5 move">
              <h1 className="text-center text-white ">Contact Us</h1>
              <Form
                onSubmit={handleSubmit}
                className="form4"
                method="post"
                target="_blank"
              >
                <label>Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "70%" }}
                  name="yourName"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
                <label>Your Email</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "70%" }}
                  name="yourEmail"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
                <label>Your Message</label>
                <textarea
                  id=""
                  className="form-control"
                  style={{ width: "70%" }}
                  name="yourMessage"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                ></textarea>
                <input
                  type="button"
                  value="Submit"
                  className="btn3"
                  onClick={handleSubmit}
                />
              </Form>
            </Col>
            <Col sm={12} md={4} className="head pt-3 pb-5">
              <h1 className="text-center mb-3">Get In touch with us</h1>
              <div className="text-center accord">
                <h6>FEAST OF ESTHER NORTH AMERICA USA:</h6>
                <p>
                  Feast of Esther is an annual Feast organized by the wife of
                  the General Overseer of the Redeemed Christian church of God
                  Pastor (Mrs.) Folu Adeboye. It is a vision and a divine
                  assignment given by God.
                </p>
              </div>
              <p className="text-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  className="icon"
                />
                15227 Old Richmond RD Sugar land, Tx 77498
              </p>
              <div>
                <p className="text-center">
                  {" "}
                  <FontAwesomeIcon icon={faPhone} size="2x" className="icon" />
                  +1(919)885-9765
                </p>
                <p className="text-center">
                  {" "}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="icon"
                  />
                  feastofesthernc@gmail.com
                </p>
                <p className="text-center">
                  {" "}
                  <FontAwesomeIcon icon={faGlobe} size="2x" className="icon" />
                  www.feastofestherna.com
                </p>
              </div>
              <div className="text-center">
                <h5 className="d-inline">Follow Us: </h5>
                <a href="https://www.instagram.com/feast_of_esther_na">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="icon"
                  />
                </a>
                <a href="https://www.tiktok.com/@feastofestherna">
                  <FontAwesomeIcon icon={faTiktok} size="2x" className="icon" />
                </a>
                <a href="https://www.facebook.com/groups/feastofestherna/">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    className="icon"
                  />
                </a>
                <a href="https://www.youtube.com/@feastofesther5437">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                    className="icon"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
