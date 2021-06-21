import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_URL = apiURL();

export default function EditTransaction(props) {
  let { id } = useParams();
  let history = useHistory();

  const [transaction, setTrans] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${id}`)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setTrans(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [id, history]);

  const handleTextChange = (event) => {
    setTrans({ ...transaction, [event.target.id]: event.target.value });
    console.log(transaction);
  };

  const handleNumberChange = (event) => {
    setTrans({
      ...transaction,
      [event.target.id]: parseFloat(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTrans(transaction, id);
    history.push(`/transactions/${id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm col-lg-2">
            <label htmlFor="date">Date:</label>
            <input id="date" type="date" className="form-control" required value={transaction.date} placeholder="MM/DD/YYYY" onChange={handleTextChange} />
          </div>
          <div className="col-sm col-lg-2">
            <label htmlFor="name">Name:</label>
            <input id="name" value={transaction.name} className="form-control" type="text" onChange={handleTextChange} placeholder="Name" required />
          </div>
          <div className="col-sm col-lg-2">
            <label htmlFor="from">From:</label>
            <input id="from" value={transaction.from} className="form-control" type="text" onChange={handleTextChange} placeholder="From" required />
          </div>
          <div className="col-sm col-lg-2">
            <label htmlFor="amount">Amount:</label>
            <input id="amount" type="number" name="amount" className="form-control" value={transaction.amount} placeholder="0" onChange={handleNumberChange} required />
          </div>

          <div className="row mt-3">
            <div className="col-sm">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>

      <div className="row mt-3">
        <Link to={`/transactions/${id}`}>
          <button className="btn btn-primary">Cancel</button>
        </Link>
      </div>
    </div>
  );
}
