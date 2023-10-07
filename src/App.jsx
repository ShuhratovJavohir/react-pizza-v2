import Header from "./components/Header";
import Router from './router'

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Router/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;