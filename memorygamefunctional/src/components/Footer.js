import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      An{" "}
      <a href="http://theodinproject.com" target="_blank">
        Odin Project
      </a>{" "}
      challenge completed by{" "}
      <a href="http://davehillman.herokuapp.com" target="_blank">
        Dave Hillman
      </a>
      . I do not own any characters used here. The logo and title fonts are
      provided by{" "}
      <a href="https://fontmeme.com/pokemon-font" target="_blank">
        fontMeme.com
      </a>
    </div>
  );
};

export default Footer;
