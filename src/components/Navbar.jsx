import {useContext} from 'react';
import {NavLink, Link} from 'react-router';
import {AuthContext} from '../context/AuthContext';

export default function Navbar() {
  const {utente, login, logout} = useContext(AuthContext);
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">App segretissima</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profilo">Profilo</NavLink>
      </div>

      <div className="nav-auth">
        {utente ?
          <>
            <span>Ciao {utente}</span>
            <button onClick={() => logout()} className="btn-logout">
              Esci
            </button>
          </>
        : <button onClick={() => login('Fulvia')} className="btn-login">
            Accedi
          </button>
        }
      </div>
    </nav>
  );
}
