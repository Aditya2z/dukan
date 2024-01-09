import React from "react";

function Overview() {
  return (
    <section className="overview-headings">
    <div className="flex align-center justify-between">
      <h2>Overview</h2>
      <select className="button" defaultValue={"Last Month"}>
        <option value={"Last Month"}>Last Month</option>
        <option value={"option 2"}>Option 2</option>
        <option value={"option 3"}>Option 3</option>
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
