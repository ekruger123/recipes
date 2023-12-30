import './App.css';
import Favourites from './components/Favourites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './context';

function App() {
  const {showModal, favourites} = useGlobalContext()
  return (
      <div className="App">
      <Search />
      {favourites.length > 0 && <Favourites />}
      <Meals />
      {showModal && <Modal />}
    </div>
  );
}

export default App;
