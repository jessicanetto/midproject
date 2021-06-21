import React from "react";

export default function Transaction({ transaction, id }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.name}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.from}</td>
    </tr>
  );
}
