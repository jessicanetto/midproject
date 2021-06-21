import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = apiURL();

function App() {
  const [transactions, setTranss] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/transactions`).then((response) => {
      const { data } = response;

      console.log(data);
      setTranss(data);
    });
  }, []);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API_URL}/transactions`, newTransaction)
      .then(
        (response) => {
          return axios.get(`${API_URL}/transactions`);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((x) => {
        console.warn("catch", x);
      });
  };
  const deleteTrans = (id) => {
    axios
      .delete(`${API_URL}/transactions/${id}`)
      .then(
        (response) => {
          setTranss(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  const updateTrans = (updatedTransaction, id) => {
    axios
      .put(`${API_URL}/transactions/${id}`, updatedTransaction)
      .then(
        (response) => {
          setTranss(response.data);
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
    <div className="App">
      <NavBar />
      <div className="bg-info text-white">
        <h1 className="mt-3">The Budgeting App </h1>
        <main>
          <Switch>
            <Route exact path="/">
              {" "}
              <Home />{" "}
            </Route>

            <Route path="/transactions/new">
              {" "}
              <New addTransaction={addTransaction} />{" "}
            </Route>

            <Route path="/transactions/:id">
              {" "}
              <Show transactions={transactions} deleteTrans={deleteTrans} />{" "}
            </Route>

            <Route path="/transactions/:id/edit">
              {" "}
              <Edit transactions={transactions} updateTrans={updateTrans} />{" "}
            </Route>

            <Route path="/transactions">
              {" "}
              <Index transactions={transactions} />{" "}
            </Route>
            <Route path="*">
              {" "}
              <Error />{" "}
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
