
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import BooKDetails from './components/BookDetails/BookDetails';
import BookList from './components/bookList/BookList';
import Favourites from './components/favourite/Favourites';
import Home from './components/home/Home';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/bookList" element={<BookList/>} />
        <Route path="/book/:id" element ={<BooKDetails />} />
        <Route path="/components/favourite" element ={<Favourites />} />
      </Routes>
      <Footer />

      
    </div>
  );
}

export default App;
