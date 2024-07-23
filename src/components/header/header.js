import React, { useState } from "react";
import './header.css';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="header">
      <div className="start-header">
        <h1>LOGO.</h1>
      </div>
      <div className="middle-header">
        <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Clients</li>
            <li>Join Us</li>
        </ul>
      </div>
      <div className="end-header">
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
  );
}

export default Header;
