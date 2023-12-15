import './styles/App.css';
import { useTheme } from './store/theme';
import Routes from './Routes';

function App() {
  const Theme = useTheme();
  return (
    <div
      className="App"
      style={{
        width: Theme.Sizes.cardBaseHeight,
        height: Theme.Sizes.cardBaseHeight,
        backgroundColor: Theme.Colors.primary,
      }}>
      <Routes />
    </div>
  );
}

export default App;
