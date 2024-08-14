import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-between py-6 px-12 items-center border-b-2 border-rose-600">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="text-rose-600 hover:text-rose-400 cursor-pointer text-5xl font-bold"
      >
        Logo
      </div>
      <div className="flex gap-11 justify-between items-center">
        <a
          className="text-rose-600 hover:text-rose-400 text-4xl"
          href="https://github.com/tyrex1829"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a
          className="text-rose-600 hover:text-rose-400 text-3xl"
          href="https://x.com/_tyrex__"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="text-rose-600 hover:text-rose-400 text-3xl"
          href="https://www.linkedin.com/in/sakshamkhare/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
