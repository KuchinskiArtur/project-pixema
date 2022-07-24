import React, { FC } from "react";
import "./FilmList.css";
import { FilmType } from "../../common/types";
import FilmCard from "../FilmCard/FilmCard";

type FilmsCardsListProps = {
  FilmList: any;
};

const FilmsCardsList: FC<FilmsCardsListProps> = ({ FilmList }) => {
  return (
    <div className="AllFilms">
      {FilmList.map((film: FilmType) => (
        <FilmCard key={film.id} data={film}></FilmCard>
      ))}
    </div>
  );
};

export default FilmsCardsList;
