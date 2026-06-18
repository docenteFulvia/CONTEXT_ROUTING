// ============================================
// pages/Home.jsx
// Route: "/"
// Legge utente dal context con useContext.
// Mostra un messaggio personalizzato se loggato.
// ============================================
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {NavLink} from 'react-router';

export default function Home() {
  //Stesso context, stesso dato — senza props
  const {utente, login} = useContext(AuthContext);

  return (
    <div className="page">
      <h1>Benvenuto in MyApp</h1>

      {utente ?
        <p className="msg-loggato">
          Sei loggato come <strong>{utente}</strong>. Vai al tuo <Link to="/profilo">profilo</Link> per vedere i
          dettagli.
        </p>
      : <>
          <p className="msg-ospite">
            Non sei loggato. Clicca su <strong>Accedi</strong> per entrare.
          </p>
          <button onClick={() => login('Mario')} className="btn-login">
            Accedi
          </button>
        </>
      }
    </div>
  );
}
