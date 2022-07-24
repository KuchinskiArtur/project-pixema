import React from "react";
import "../App.css";
import Post from "./Post";

function FilmsOne() {
  return (
    <>
      <div className="postOne">
        <Post
          img="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/3fb781cd-2b98-4072-b102-311661121a2e/300x450"
          header="Knockin on Heaven"
          description="Action, Fantasy"
        />
      </div>
    </>
  );
}

export default FilmsOne;
