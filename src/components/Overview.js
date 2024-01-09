import React from "react";

function Overview() {
  return (
    <section className="overview-headings">
    <div className="flex align-center justify-between">
      <h2>Overview</h2>
      <select className="button">
        <option selected>Last Month</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
    <div className="grid heading1 align-center justify-between">
      <div>
        <p>Online orders</p>
        <em>231</em>
      </div>
      <div>
        <p>Amount Recieved</p>
        <em>$23,92,312.19</em>
      </div>
    </div>
  </section>
  );
}

export default Overview;
