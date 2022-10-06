
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import BooKDetails from './components/BookDetails/BookDetails';
import BookList from './components/Home/BookList';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList/>} />
        <Route path="/book/:id"element ={<BooKDetails />} />
        <Route path="/favourites"element ={<Favourites />} />
        <Route path="/login"element ={<Login />} />
      </Routes>
      <Footer />

      
    </div>
  );
}

export default App;
