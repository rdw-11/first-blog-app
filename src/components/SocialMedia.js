import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia(props) {
  return (
    <div className="social-container">
      <h3>Follow me on social media!</h3>
      <a
        href="https://www.youtube.com/channel/UCVB-X7tb6qqO9lnkSBonoXQ"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://twitter.com/reidwilliamso13"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/reid_w21/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default SocialMedia;
