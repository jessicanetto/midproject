import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav bg-info text-white justify-content-center flex-column flex-sm-row">
      <button className="">
        <Link to="/" className="flex-sm-fill text-dark nav-link active">
          Home
        </Link>
      </button>

      <button className="">
        <Link to="/transactions" className="flex-sm-fill text-dark nav-link active">
          Transactions
        </Link>
      </button>

      <button className="">
        <Link to="/transactions/new" className="flex-sm-fill text-dark nav-link active">
          New Transaction
        </Link>
      </button>
    </nav>
  );
}
