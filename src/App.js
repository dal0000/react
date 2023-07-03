import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year").then(res => res.json()).then(json => {
      setMovies(json.data.movies);
      setLoading(false);
    })
  },[]);
  console.log(movies);
  return (
    <div>
      {loading? <h3>loading....</h3> : null}
    </div>
  );
}

export default App;
// 