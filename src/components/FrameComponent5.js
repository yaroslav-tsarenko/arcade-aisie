import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import NavBar from "./NavBar";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`nav-bar-group ${className}`}>
      <NavBar />
      <div className="search-bar-wrapper-wrapper">
        <TextField
          className="search-bar-wrapper"
          placeholder="Gift Card, Top Up, Vouchers and more...."
          variant="outlined"
          InputProps={{
            endAdornment: (
              <img width="24px" height="24px" src="/searchnormal.svg" />
            ),
          }}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "48px",
              backgroundColor: "#ebebeb",
              paddingRight: "12px",
              borderRadius: "5px",
            },
            "& .MuiInputBase-input": { color: "#262626" },
            width: "720px",
          }}
        />
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
