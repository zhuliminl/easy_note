import './styles/App.css';
import { useTheme } from './store/theme';
import Routes from './Routes';
import Dock from './components/Dock';

function App() {
  const Theme = useTheme();
  return (
    <div className="App">
      <Routes />
      {/* 启动栏 */}
      <Dock />
    </div>
  );
}

export default App;
