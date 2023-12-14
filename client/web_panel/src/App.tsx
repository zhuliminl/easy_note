/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
import "./App.css";
import logo from './static/logo192.png'

function App() {
  return (
    <div className="App">
      <img style={{width: 100, height: 100, background: 'green'}} src={logo} />
    </div>
  );
}

export default App;
