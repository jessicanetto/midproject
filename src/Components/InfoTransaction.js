import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_URL = apiURL();

function InfoTransaction(props) {
  const { deleteTrans } = props;
  const [setTrans] = useState([]);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions`)
      .then((response) => {
        const { data } = response;

        setTrans(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [id, history]);

  // const handleDelete = () => {
  //   deleteTrans(id);
  //   history.push("/transactions");
  // };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">From</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
export default withRouter(InfoTransaction);
