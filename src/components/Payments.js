import React from "react";
import Header from "./Header";
import Table from "./Table";
import Overview from "./Overview";

function Payments() {
  return (
    <div className="payments">
      <Header />
      <section className="overview">
        <Overview />
        <Table />
      </section>
    </div>
  );
}

export default Payments;
