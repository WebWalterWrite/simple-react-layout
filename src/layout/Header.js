import React from "react";
import { Link } from "react-router-dom";

// import css
import "./layout.scss";

export default () => (
  <header>
    <div className="flexContain">
      <h1>
        <Link to="/">React Layout</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/menu-1">Menu 1</Link>
          </li>
          <li>
            <Link to="/menu-2">Menu 2</Link>
          </li>
          <li>
            <Link to="/menu-3">Menu 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
