import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";

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
  console.log(movie);
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.title}>{movie.title_long}</h1>
          <img className={styles.img} src={movie.large_cover_image} alt="" />
          <div className={styles.link}>
            <Link to={"/react"}>Back</Link>
            <Link to={movie.torrents[0].url}>Torrent(720p)</Link>
            <Link to={movie.torrents[1].url}>Torrent(1080p)</Link>
            <div className={styles.genres}>
              {movie.genres.map((g) => (
                <span key={g}>{g}</span>
              ))}
            </div>
            <div>⭐{movie.rating}</div>
          </div>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

// https://yts.mx/api/v2/movie_details.json?movie_id=

/*
background_image
: 
"https://yts.mx/assets/images/movies/the_art_of_un_war_2022/background.jpg"
background_image_original
: 
"https://yts.mx/assets/images/movies/the_art_of_un_war_2022/background.jpg"
date_uploaded
: 
"2023-05-24 03:54:59"
date_uploaded_unix
: 
1684893299
description_full
: 
"The Art of Un-War is an in-depth exploration of renowned artist Krzysztof Wodiczko's life and the art interventions he creates as powerful responses to the inequities and horrors of war and injustice. Throughout the film, the artist's powerful interventions become examples of how art can be used to disrupt public complacency. The evolution of Wodiczko's political art unfolds throughout the film from his first intervention created in Warsaw in 1968, to one of his most ambitious projects and a focal point of the film - a radical proposal to transform Paris' Arc De Triomphe war monument into a site for peace-building research and activism. Wodiczko counters the monument's glorification of war and portrayal of distorted histories by constructing scaffolding around the Arc De Triomphe and transforming it into its complete antithesis.—Maria Niro"
description_intro
: 
"The Art of Un-War is an in-depth exploration of renowned artist Krzysztof Wodiczko's life and the art interventions he creates as powerful responses to the inequities and horrors of war and injustice. Throughout the film, the artist's powerful interventions become examples of how art can be used to disrupt public complacency. The evolution of Wodiczko's political art unfolds throughout the film from his first intervention created in Warsaw in 1968, to one of his most ambitious projects and a focal point of the film - a radical proposal to transform Paris' Arc De Triomphe war monument into a site for peace-building research and activism. Wodiczko counters the monument's glorification of war and portrayal of distorted histories by constructing scaffolding around the Arc De Triomphe and transforming it into its complete antithesis.—Maria Niro"
download_count
: 
2222
genres
: 
['Documentary']
id
: 
52164
imdb_code
: 
"tt20101780"
language
: 
"en"
large_cover_image
: 
"https://yts.mx/assets/images/movies/the_art_of_un_war_2022/large-cover.jpg"
like_count
: 
0
medium_cover_image
: 
"https://yts.mx/assets/images/movies/the_art_of_un_war_2022/medium-cover.jpg"
mpa_rating
: 
""
rating
: 
9.4
runtime
: 
64
slug
: 
"the-art-of-un-war-2022"
small_cover_image
: 
"https://yts.mx/assets/images/movies/the_art_of_un_war_2022/small-cover.jpg"
title
: 
"The Art of Un-War"
title_english
: 
"The Art of Un-War"
title_long
: 
"The Art of Un-War (2022)"
torrents
: 
(2) [{…}, {…}]
url
: 
"https://yts.mx/movies/the-art-of-un-war-2022"
year
: 
2022
yt_trailer_code
: 
"O25cnBmvXA0"
*/
