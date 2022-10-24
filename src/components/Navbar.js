import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { supabase } from "../supabase/client";
import { Link } from "react-router-dom";

function Navbar() {
  const { logout } = useTasks();

  useEffect(() => {
    console.log(supabase.auth.user());
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">App de Dn. Yorch</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {supabase.auth.user() && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#!" onClick={() => logout()}>
                    Salir
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;