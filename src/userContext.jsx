import { createContext, useContext, useState } from "react";

// Створення контекста
const userContext = createContext(); // Результатом виклику цієї функції є об'єкт контексту

export default function useUser() {
  return useContext(userContext); // Хук для доступу до об'єкту контексту
}

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return <userContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>{children}</userContext.Provider>;
};
