import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <footer>
    <div className="flexContain">
      <nav>
        <ul>
          <li>
            <Link to="#">Footer 1</Link>
          </li>
          <li>
            <Link to="#">Footer 2</Link>
          </li>
          <li>
            <Link to="#">Footer 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
