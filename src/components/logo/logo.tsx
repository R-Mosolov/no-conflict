import React from "react";

import "./logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link style={{ textDecoration: "none" }} to="/">
        <p className="mt-3">Нет конфликту!</p>
      </Link>

      <hr />
    </div>
  );
}

export default Logo;
