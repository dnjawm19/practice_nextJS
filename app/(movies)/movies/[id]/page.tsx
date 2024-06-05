import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching Movie Time: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching Videos Time: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("start");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end");

  return (
    <div>
      {" "}
      <h1>{movie.title}</h1>{" "}
    </div>
  );
}
