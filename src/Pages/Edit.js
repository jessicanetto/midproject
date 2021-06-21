import EditTransaction from "../Components/EditTransaction";

function Edit({ updateTrans, transactions }) {
  return (
    <>
      <h3 className="mt-3">Edit Transaction</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <EditTransaction updateTrans={updateTrans} transactions={transactions} />
        </div>
      </div>
    </>
  );
}

export default Edit;
