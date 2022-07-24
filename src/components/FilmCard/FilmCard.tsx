import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedFilmId } from "../../redux/reducers/movieReducer";
import { FilmType } from "../../common/types";
import "./FilmCard.css";

type FilmProps = {
  data: FilmType;
};

const PostFilm: FC<FilmProps> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, poster, is_series } = data;

  const onTitleClick = () => {
    dispatch(setSelectedFilmId(id));
    navigate(`/film/${id}`);
  };

  return (
    <div className="PostFilm">
      <div className="FilmImage">
        <img src={poster} alt={name} />
      </div>
      <div className="FilmInfo">
        <h3 onClick={onTitleClick} className="FilmInfoTittle">
          {name}
        </h3>
        <p className="FilmInfoType">{is_series ? "series" : "movie"}</p>
      </div>
    </div>
  );
};

export default PostFilm;
