import React from "react";
import Transaction from "./Transaction";
import uuid from "react-uuid";

export default function Transactions({ transactions }) {
  return (
    <div>
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">From</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, id) => {
              return <Transaction key={uuid()} transaction={transaction} id={id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
