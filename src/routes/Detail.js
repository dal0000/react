import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=" + id)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <div>
            <img src={movie.large_cover_image} alt="" />
          </div>
          <Link to={movie.url}>HomePage</Link>
          <div>
            <Link to={"/"}>Back</Link>
          </div>

          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

// https://yts.mx/api/v2/movie_details.json?movie_id=
