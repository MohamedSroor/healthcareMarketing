import React, { useState } from "react";
import "./content.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "../card/card";
import LogoSlider from "../slider/logoSlider";
import passion from "../../images/Vector (1).png";
import desire from "../../images/Vector (2).png";
import commitment from "../../images/Vector (3).png";
import persistence from "../../images/Vector.png";
import arrow from "../../images/Group 1.png";
import who from "../../images/Rectangle 22.svg";
import how from "../../images/Rectangle 22 (1).svg";
import mission from "../../images/Rectangle 22 (2).svg";
import listIcon1 from "../../images/Group 1.svg";
import listIcon2 from "../../images/Vector.svg";
import listIcon3 from "../../images/Frame 76.svg";
import listIcon6 from "../../images/Frame 74.svg";
import cardImg1 from "../../images/Rectangle 33.svg";
import cardImg2 from "../../images/Rectangle 33 (1).svg";
import cardImg3 from "../../images/Rectangle 33 (2).svg";
import cardImg6 from "../../images/Rectangle 33 (5).svg";
import cardRight from "../../images/Vector (1).svg";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 5,
  outline: "none",
  padding: "20px",
  boxShadow: 24,
  p: 4,
};

function Content() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [visibleCard, setVisibleCard] = useState(1);

  const handleClick = (id) => {
    setVisibleCard(id === visibleCard ? null : id);
  };

  const cards = [
    {
      id: 1,
      title: "Marketing",
      description: [
        "Market analysis and planning",
        "Strategic forecasting",
        "Benchmarking",
        "Market testing",
        "Market research",
        "Telephone call center experiential communication",
      ],
      icon: listIcon1,
      image: cardImg1,
      right: cardRight,
    },
    {
      id: 2,
      title: "Advertising",
      description: [
        "Advertising strategy",
        "Creative platform origination",
        "Concept testing",
        "Copywriting",
        "Broadcast media production",
        "Production",
      ],
      icon: listIcon2,
      image: cardImg2,
      right: cardRight,
    },
    {
      id: 3,
      title: "Event Management",
      description: [
        "Event Management",
        "Brand and product promotion",
        "Brand and product launches",
        "Conferences, seminars, and receptions",
      ],
      icon: listIcon3,
      image: cardImg3,
      right: cardRight,
    },
    {
      id: 4,
      title: "Training",
      description: [
        "Marketing Training",
        "Business Training",
        "Strategic Planning for managers",
        "Measuring ROI of Training",
      ],
      icon: listIcon6,
      image: cardImg6,
      right: cardRight,
    },
  ];

  return (
    <div className="contentPage">
      <div className="content">
        <div className="background"></div>
        <div className="buttons">
          <div className="arrow">
            <button className="button1">
              <img src={passion} alt="Passion" />
              PASSION
            </button>
            <div className="arrowImg">
              <img src={arrow} height={"70px"} alt="Arrow" />
            </div>
          </div>
          <button className="button2">
            <img src={desire} alt="Desire" />
            INTEREST
          </button>
        </div>
        <div className="the-full-content">
          <div className="sentences">
            <h1>
              We believe we can change the dynamics of{" "}
              <span>healthcare marketing</span>
            </h1>
          </div>
          <p>
            Empowering brands with innovative marketing solutions and
            unparalleled expertise.
          </p>
        </div>
        <div className="buttons">
          <button className="button3">
            <img src={persistence} alt="Persistence" />
            PERSISTENCE
          </button>
          <button className="button4">
            <img src={commitment} alt="Commitment" />
            COMMITMENT
          </button>
        </div>
        <div className="background1"></div>
      </div>
      <div className="row">
        <div className="custom-row">
          <div className="custom-col">
            <img src={who} alt="Who we are?" />
          </div>
          <div className="custom-col">
            <h2>Who we are?</h2>
            <p>
              A savvy, well-seasoned advertising and marketing consultation
              house operating across the Middle East, dedicated to innovating
              strategies, coordinating, and implementing unique campaigns. We
              aim to enhance patients' healthcare experiences through awareness,
              educational initiatives, support programs, and personalized
              medications.
            </p>
            <p>
              We aim to enhance patients' healthcare experiences through
              awareness, educational initiatives, support programs, and
              personalized medications.
            </p>
          </div>
        </div>

        <div className="custom-row">
          <div className="custom-col">
            <h2>How we do it?</h2>
            <p>
              We use strategic thinking and insight to create engaging stories
              and ideas. We communicate with consumers in their preferred
              language to impact their behavior effectively. Our specialized
              team, with diverse visions and backgrounds, works together to
              create magic.
            </p>
          </div>
          <div className="custom-col">
            <img src={how} alt="How we do it?" />
          </div>
        </div>

        <div className="custom-row">
          <div className="custom-col">
            <img src={mission} alt="Mission" />
          </div>
          <div className="custom-col">
            <h2>Our Mission</h2>
            <ul>
              <li>
                For clients: We deliver innovative and results-driven marketing,
                advertising, and PR campaigns to boost awareness, sales, and
                growth, enhancing patient care.
              </li>
              <li>
                For employees: We foster a healthy, exciting work atmosphere
                where individuals can develop ideas, educate, and fully utilize
                their talents.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Innovative solutions tailored for you</h1>
        <div className="cards-container">
          <div>
            <ul>
              {cards.map((card) => (
                <li
                  key={card.id}
                  onClick={() => handleClick(card.id)}
                  className={visibleCard === card.id ? "underlined" : ""}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={visibleCard === card.id ? "active" : ""}
                  />
                  {card.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="cards">
            {cards.map(
              (card) =>
                card.id === visibleCard && (
                  <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    image={card.image}
                    right={card.right}
                  />
                )
            )}
          </div>
        </div>
        <div className="section-card">
          <h1>Ready to take your brand to the next level?</h1>
          <button onClick={handleOpen}>Contact Us</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2 id="modalTitle">Join Us</h2>
              <form>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{ width: '100%', paddingBottom: '20px', borderRadius: '15px'}}
                  />
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  sx={{ width: '100%', paddingBottom: '20px'}}
                  />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  sx={{ width: '100%', paddingBottom: '20px'}}
                  />
                <TextField
                  id="outlined-basic"
                  label="Applying for position"
                  variant="outlined"
                  sx={{ width: '100%', paddingBottom: '20px'}}
                  />
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  sx={{ width: '100%', paddingBottom: '20px'}}
                  />
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: '100%', paddingBottom: '20px'}}
                  />
                <button onClick={handleClose} id="modalButton">Apply</button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="companies">
        <LogoSlider />
      </div>
      <div className="end-content">
        <div className="background2"></div>
        <h2>
          Join us in our mission to innovate and create outstanding marketing
          and advertising solutions.
        </h2>
        <button onClick={handleOpen}>Join Us</button>
      </div>
      <div className="footer">
        <div className="top-footer">
          <div className="left-footer">
            <h1>LOGO.</h1>
          </div>
          <div className="right-footer">
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Clients</li>
              <li>Join Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer">
          <hr></hr>
          <h3>©2024 LOGO, All Rights Reserved</h3>
        </div>
      </div>
    </div>
  );
}

export default Content;
