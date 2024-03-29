import React from "react";
import { extraIcons } from "../dummy-data/dummyData";

function Header() {
  return (
      <section className="payments-header grid align-center">
        <div className="heading flex align-center">
          <p>Payments</p>
          <div className="subtext flex align-center">
            <img src="/static/icons/Question mark.png" alt="que-mark" />
            <p>How it works?</p>
          </div>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search features, tutorials, etc." />
          <i>{extraIcons.search}</i>
        </div>
        <div className="menu flex">
          <i>{extraIcons.menu}</i>
          <i>{extraIcons.downarrow2}</i>
        </div>
      </section>
  );
}

export default Header;
