import React from "react";
import Header from "./components/Header";
import Router from "./router";

import { useSelector, useDispatch } from "react-redux";
import { increment, decriment } from "./redux/slices/pizzaSlice";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(decriment())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="app">
          <div className="wrapper">
            <Header />
            <div className="content">
              <div className="container">
                <Router />
              </div>
            </div>
          </div>
        </div>
      </SearchContext.Provider>
    </>
  );
}

export default App;
