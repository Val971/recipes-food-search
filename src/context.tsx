import React, { useContext } from "react";
import { createContext, useState } from "react";
import Axios from "axios";

const userContext = createContext({});

const YOUR_APP_ID = "a33493dc";
const YOUR_APP_KEY = "6630424c6fb9f2eab11f18d6b95680f8";

export function UserProvider({ children }) {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("Hover me");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=9&calories=591-722&health=${healthLabel}`;

  async function getRecipes() {
    setLoading(true);
    setRecipes([])
    setError(null)
    await Axios.get(url)
      .then((result) => {setRecipes(result.data.hits) 
        setQuery('')})
      .catch(err=> setError(err.message))
      .finally(() => setLoading(false));
  }

  
  const handleQuery = (label) => {
    return setQuery(label.target.value);
  };

  const handleHealthLabel = (label) => {
    return setHealthLabel(label)
  };

  const contextValue = {
    handleHealthLabel,
    handleQuery,
    getRecipes,
    recipes,
    loading,
    query,
    healthLabel,
    error
  };
  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}