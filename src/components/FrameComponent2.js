import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`hero-container-wrapper ${className}`}>
      <div className="hero-container">
        <div className="game-on-power-up-your-play-wrapper">
          <h1 className="game-on-power-container">
            <span>
              <p className="game-on-power-">Game On! Power-</p>
              <p className="up-your-play">Up Your Play.</p>
            </span>
          </h1>
        </div>
        <div className="unlock-limitless-gaming-possib-wrapper">
          <h3 className="unlock-limitless-gaming-container">
            <p className="unlock-limitless-gaming">
              Unlock Limitless Gaming Possibilities with Our Wide
            </p>
            <p className="range-of-digital">
              Range of Digital Gift Cards and In-Game Enhancements.
            </p>
          </h3>
        </div>
        <TextField
          className="hero-container-child"
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

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
