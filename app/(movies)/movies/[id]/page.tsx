import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h2>Loading Movie Info</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading Movie Videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
