import logo from "./logo-shecodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={logo} className="App-logo img-fluid" alt="logo SheCodes" />
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small> Coded by Laura Herbert </small>
        </footer>
      </div>
    </div>
  );
}
