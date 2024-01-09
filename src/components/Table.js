import React from "react";
import { extraIcons, ordersData } from "../dummy-data/dummyData";

function Table() {
  return (
    <section className="payment-tables">
    <h2>Transactions | This Month</h2>
    <div className="table">
      <div className="flex align-center justify-between table-header">
        <div className="searchbar searchbar-2">
          <input type="text" placeholder="Search by order ID..." />
          <i>{extraIcons.search}</i>
        </div>
        <div>
          <button className="button">
            Sort
            <i>{extraIcons.sort}</i>
          </button>
          <button className="button">
            <i>{extraIcons.download}</i>
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="order-id">Order ID</th>
            <th className="order-date">Order Date{extraIcons.downarrow2}</th>
            <th>Order Amount</th>
            <th>Transaction Fees</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => {
            return (
              <tr>
                <td className="order-id">#{order.orderId}</td>
                <td className="order-date">{order.orderDate}</td>
                <td>{order.orderAmount}</td>
                <td>{order.transactionFees}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </section>
  );
}

export default Table;
