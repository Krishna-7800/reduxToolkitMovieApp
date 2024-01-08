import "./App.scss"


import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <div className="container">

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      </div>
      <Footer/>
      </Router>

  
    </div>
  );
}

export default App;
