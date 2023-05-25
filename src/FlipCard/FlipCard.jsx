import React, { useState } from "react";
import "./FlipCard.css";
import MyImage from "../images/MyImage.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import AccountCircle from "@mui/icons-material/AccountCircle";

const FlipCard = () => {
  const [flip, setFlip] = useState(false);
  const [firstName, setFirstName] = useState("Petar");
  const [lastName, setLastName] = useState("Stojanovic");
  const [officeLocation, setOfficeLocation] = useState("11 Oktomvri");
  const [data, setData] = useState({
    firstname: firstName,
    lastName: lastName,
    officeLocation: officeLocation,
  });

  const flipCard = () => {
    setFlip(!flip);
  };

  const save = () => {
    setData((oldData) => ({
      ...oldData,
      firstName: firstName,
      lastName: lastName,
      officeLocation: officeLocation,
    }));
    // setData((oldData) => [...oldData, lastName]);
    // setData((oldData) => [...oldData, officeLocation]);
    flipCard();
  };

  const cancel = () => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setOfficeLocation(data.officeLocation);

    flipCard();
  };

  return (
    <div className={`flip-card ${flip !== true ? "front-flip" : "back-flip"}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={MyImage} alt="Profile-Pic" className="image" />
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
          <h2>
            <IoLocationOutline className="locationIcon" /> {officeLocation}
          </h2>
          <Button
            variant="contained"
            onClick={flipCard}
            endIcon={<ModeEditOutlineIcon />}
          >
            edit
          </Button>
        </div>

        <div className="flip-card-back">
          <img src={MyImage} alt="Profile-Pic" className="image" />
          <div className="inputField">
            <TextField
              className="textField"
              sx={{ input: { color: "white" } }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputField">
            <TextField
              className="textField"
              sx={{ input: { color: "white" } }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoLocationOutline sx={{ color: "#eee", mr: 1, my: 0.5 }} />
            <TextField
              sx={{ input: { color: "white" } }}
              className="textField"
              id="input-with-sx"
              label="Office Location"
              variant="standard"
              value={officeLocation}
              onChange={(e) => setOfficeLocation(e.target.value)}
            />
          </Box>
          <div className="inputField">
            <Button
              variant="contained"
              onClick={cancel}
              endIcon={<CancelIcon />}
            >
              cancel
            </Button>
            <Button
              variant="contained"
              onClick={save}
              endIcon={<ModeEditOutlineIcon />}
            >
              save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
