import React from "react";
import Header from "./components/Header";
import Router from "./router";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <div className="app">
        <div className="wrapper">
          <Header/>
          <div className="content">
            <div className="container">
              <Router/>
            </div>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
