import {createContext, useState} from 'react';

//1:creiamo il canale su cui viaggeranno i dati
export const AuthContext = createContext();

//2:Leghiamo il Provider che gestisce lo stato e lo rende disponibile ai "consumatori di stato"
export function AuthProvider({children}) {
  //L'utente all'inizio è null perchè non ancora loggato
  const [utente, setUtente] = useState(null);
  const login = nome => setUtente(nome);
  const logout = () => setUtente(null);

  return <AuthContext.Provider value={{utente, login, logout}}>{children}</AuthContext.Provider>;
}
