import './App.css';
import { CenterPage } from './components/CenterPage';
import MenuPrincipal from './components/MenuPrincipal';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuPrincipal/>
      </header>
      <CenterPage/>
    </div>
  );
}

export default App;
