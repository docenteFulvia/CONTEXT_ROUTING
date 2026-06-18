import {useContext} from 'react';
import {Link} from 'react-router';
import {AuthContext} from '../context/AuthContext';

export default function nomeFunzione() {
  //utente non loggato (early return o guardia)
  const {utente, logout, login} = useContext(AuthContext);
  if (!utente) {
    return (
      <div className="page">
        <h1>Profilo</h1>
        <p className="msg-ospite">
          Devi essere loggato per vedere questa pagina. Clicca su <span class="grassetto">Accedi</span>
        </p>
        <button onClick={() => login('Fulvia')} className="btn-login">
          Accedi
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Il profilo di {utente}</h1>
      <div className="profilo-info">
        <p>
          <span class="grassetto">Nome:</span>
          {utente}
        </p>
        <p>
          <span class="grassetto">Ruolo:</span> Super presidente{' '}
        </p>
        <p>
          <span class="grassetto">Stato:</span> Loggato
        </p>
      </div>
      <button onClick={() => logout()} className="btn-logout">
        Esci
      </button>
    </div>
  );

  //utente loggato
  return <></>;
}
