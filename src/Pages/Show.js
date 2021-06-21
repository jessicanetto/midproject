import { useState } from "react";
import { useParams } from "react-router-dom";
import InfoTransaction from "../Components/InfoTransaction";

function Show({ deleteTrans, transactions }) {
  let { id } = useParams();
  const [transaction] = useState(transactions[id]);
  return (
    <div className="Show">
      <h2 className="mt-3">Transaction Details</h2>
      <section>
        <InfoTransaction transaction={transaction} id={id} deleteTrans={deleteTrans} />
      </section>
    </div>
  );
}

export default Show;
