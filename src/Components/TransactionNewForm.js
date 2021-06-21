import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function TransactionNewForm(props) {
  const [transaction, setTrans] = useState({
    name: "",
    date: "",
    type: "",
    amount: 0,
  });

  const handleTextChange = (event) => {
    setTrans({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTrans({
      ...transaction,
      [event.target.id]: parseFloat(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTransaction(transaction);
    props.history.push("/transactions");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm col-lg-2">
            <label htmlFor="date">Date:</label>
            <input id="date" type="date" className="form-control" required value={transaction.date} placeholder="MM/DD/YYYY" onChange={handleTextChange} />
          </div>
          <div className="col-md col-lg-2">
            <label htmlFor="name">Name:</label>
            <input id="name" value={transaction.name} type="text" className="form-control" onChange={handleTextChange} placeholder="Name" required />
          </div>
          <div className="col-sm col-lg-2">
            <label htmlFor="from">From:</label>
            <input id="from" value={transaction.from} type="text" className="form-control" onChange={handleTextChange} placeholder="From" required />
          </div>
          <div className="col-sm col-lg-2">
            <label htmlFor="amount">Amount:</label>
            <input id="amount" type="number" name="amount" className="form-control" value={transaction.amount} placeholder="1,000,000" onChange={handleNumberChange} required />
          </div>

          <div className="row mt-3">
            <div className="col-sm">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
