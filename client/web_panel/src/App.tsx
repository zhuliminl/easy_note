import './styles/App.css';
import { useTheme } from './store/theme';
import Routes from './Routes';
import Dock from './components/Dock';

function App() {
  const Theme = useTheme();
  return (
    <div className="App">
      <Dock>
        <Routes />
      </Dock>
    </div>
  );
}

export default App;
