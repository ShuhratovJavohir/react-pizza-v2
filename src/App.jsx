import React from 'react'
import Header from "./components/Header";
import Router from './router'


function App() {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <div className="app">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="content">
          <div className="container">
            <Router searchValue={searchValue} setSearchValue={setSearchValue}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;