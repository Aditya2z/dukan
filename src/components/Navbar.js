import React from "react";
import { pages, extraIcons } from "../dummy-data/dummyData";

function Navbar() {
  return (
    <nav>
      <div>
        <div className="nav-header flex justify-between align-center">
          <figure className="brand-logo">
            <img src="/static/images/shop.png" alt="brand-logo" />
          </figure>
          <div className="brand-name">
            <h3>Nishyan</h3>
            <p>Visit store</p>
          </div>
          <figure className="icon">{extraIcons.downArrow}</figure>
        </div>
        <ul className="nav-body">
          {pages.map((page) => {
            return (
              <li
                key={page.name}
                className={`page flex align-center ${page.name}`}
              >
                {page.icon}
                <h4>{page.name}</h4>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-footer flex align-center">
        <figure className="icon">{extraIcons.wallet}</figure>
        <div className="credits">
          <p>Available Credits</p>
          <h5>222.10</h5>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
