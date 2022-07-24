import React, { FC } from "react";
import { FilmType } from "../../common/types";
import PostFilm from "../PostsAll";

type FilmsCardsListProps = {
  filmsList: any;
  data: any;
};

const PostsAll: FC<FilmsCardsListProps> = ({ filmsList }) => {
  return (
    <div className="AllFilms">
      {filmsList.map((film: FilmType) => (
        <PostFilm key={film.id} data={film} filmsList={undefined}></PostFilm>
      ))}
    </div>
  );
};

export default PostsAll;
