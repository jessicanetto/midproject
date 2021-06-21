import Transactions from "../Components/Transactions";

import Budget from "../Components/Budget";

import { apiURL } from "../util/apiURL";

import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = apiURL();

function Index({ transactions }) {
  const [budget, setBudget] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/budget`).then((response) => {
      console.log(response.data);
      const { data } = response;
      setBudget(Number(data[0].budget));
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const updateBudget = (value) => {
    const budgetObj = { budget: value };
    //console.log(budgetObj)
    setIsEditing(false);
    axios
      .put(`${API_URL}/budget`, budgetObj)
      .then(
        (response) => {
          console.log(response.data);
          setBudget(Number(response.data[0].budget));
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  return (
    <div className="container">
      <h2 className="mt-3">Transactions</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget budget={budget} updateBudget={updateBudget} handleEditClick={handleEditClick} isEditing={isEditing} />
        </div>

        <div className="row mt-3">
          <div className="col-sm">
            <Transactions transactions={transactions} budget={budget} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
