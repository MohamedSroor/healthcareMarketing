import React, { useEffect, useState } from "react";
import "./header.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import TextArea from "antd/es/input/TextArea";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  
  const windowWidth = useWindowWidth();
  const isSmallScreen = windowWidth < 768;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "70%" : 400,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: 5,
    outline: "none",
    padding: "20px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    maxHeight: "80vh",
    overflowY: "auto"
  };
  
  const textareaStyle = {
    resize: "none",
    height: "100px",
    marginBottom: "20px"
  }
  return (
    <div className="header">
      <div className="start-header">
        <h1>LOGO.</h1>
      </div>
      <div className="middle-header">
        <ul>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#join-us">Join Us</a>
          </li>
        </ul>
      </div>
      <div className="end-header">
        <button onClick={handleModalOpen}>Contact Us</button>
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modalBox">
            <div className="title">
              <h2 id="modalTitle">Contact Us</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                onClick={handleModalClose}
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            </div>
            <form>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{
                  width: "100%",
                  paddingBottom: "20px",
                  borderRadius: "15px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                sx={{ width: "100%", paddingBottom: "20px" }}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                sx={{ width: "100%", paddingBottom: "20px" }}
              />
              <TextField
                id="outlined-basic"
                label="Your Company"
                variant="outlined"
                sx={{ width: "100%", paddingBottom: "20px" }}
              />
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                sx={{ width: "100%", paddingBottom: "20px" }}
              />
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                sx={{ width: "100%", paddingBottom: "20px" }}
              />
              <TextArea
                id="outlined-basic"
                label="Message"
                variant="outlined"
                style={textareaStyle}
              />
              <button onClick={handleModalClose} id="modalButton">
                Contact Us
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <div className="small-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
          color="currentColor"
          onClick={toggleDropdown}
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
        {dropdownOpen && (
          <div className="dropdown">
            <div className="dropdown-content">
              <a href="#about-us">About Us</a>
              <a href="#services">Services</a>
              <a href="#clients">Clients</a>
              <a href="#join-us">Join Us</a>
              <a onClick={handleModalOpen}>Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
