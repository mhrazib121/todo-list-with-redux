import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>

      <div
        class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <NavBar />


        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr class="mt-4" />

          <Todos />

          <hr class="mt-4" />

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
