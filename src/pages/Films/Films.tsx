import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowMore from "../../components/ShowMore";
import {
  MovieSelector,
  loadMovieList,
  loadSearchResults,
  setSearchResults,
} from "../../redux/reducers/movieReducer";
import {
  FilterSelectors,
  setCurrentPage,
} from "../../redux/reducers/filterReducer";
import "./Films.css";
import FilmAll from "../../components/FilmAll";

type FilmsProps = {
  pageName: string;
};

const Films: FC<FilmsProps> = ({ pageName }) => {
  const dispatch = useDispatch();
  const isHomePage = pageName === "Home";
  const order = isHomePage ? "budget:desc" : "popularity:desc";
  const searchValue = useSelector(FilterSelectors.getSearchValue);
  const genre = useSelector(FilterSelectors.getFilterGenres);
  const page = useSelector(FilterSelectors.getCurrentPage);
  const type = useSelector(FilterSelectors.getFilterSortTab);
  const country = useSelector(FilterSelectors.getFilterCountry);

  const filmsList = useSelector(
    // searchValue.trim() ? FilmSelectors.getSearchFilms : FilmSelectors.getFilms
    MovieSelector.getMovieList
  );

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(
      loadMovieList({
        isLoadMoreFilms: false,
        order,
        page: 1,
        type: type.toLowerCase(),
        genre,
        country,
      })
    );
  }, [pageName, type, country, genre]);

  // useEffect(() => {
  //   searchValue.trim()
  //     ? dispatch(loadSearchFilms({ query: searchValue }))
  //     : dispatch(setSearchFilms([]));
  // }, [searchValue]);

  const showMore = () => {
    dispatch(
      loadMovieList({
        isLoadMoreFilms: true,
        order,
        page: page + 1,
        type: type.toLowerCase(),
        genre,
        country,
      })
    );
    dispatch(setCurrentPage(page + 1));
  };

  return (
    <main className="films">
      <div className="films__container">
        <FilmAll FilmList={filmsList}></FilmAll>
        {!searchValue.trim() && <ShowMore onClick={showMore}></ShowMore>}
      </div>
    </main>
  );
};

export default Films;
