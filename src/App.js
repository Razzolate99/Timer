import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <Form />
      </header>
    </div>
  );
}

export default App;
