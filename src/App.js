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
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a href="/about.html" title="About - Laura Herbert">
              Laura
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/lauher/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
              title="Github - Laura Herbert"
            >
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
