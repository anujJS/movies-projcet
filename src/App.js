import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./pages/MoviesDetail";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="text-white">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movieSearch/:search" element={<SearchPage />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
