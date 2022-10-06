
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import BooKDetails from './components/BookDetails/BookDetails';
import BookList from './components/Home/BookList';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<BookList/>} />
        <Route path="/book/:id"element ={<BooKDetails />} />
        <Route path="/Favourites"element ={<Favourites />} />
        <Route path="/Login"element ={<Login />} />
        <Route path="/Navbar"element ={<Navbar />} />
        <Route path="/Footer"element ={<Footer />} />
      </Routes>

      
    </div>
  );
}

export default App;
