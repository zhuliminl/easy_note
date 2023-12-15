import './styles/App.css';
import logo from './static/logo192.png';
import { useTheme } from './store/theme';

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
      <img
      // style={{ width: 100, height: 100, background: 'green' }}
      // src={logo}
      />
    </div>
  );
}

export default App;
