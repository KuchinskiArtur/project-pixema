import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardTypes, MovieCardType, TableDataTypes } from "../../common/types";

export type MovieReducerStateType = {
  movieList: CardTypes[];
  favoritesList: MovieCardType[];
  singleMovie: MovieCardType | null;
  singleMovieLoading: boolean;
  movieCrew: TableDataTypes | null;
  relatedMovieList: MovieCardType[];
  searchResults: MovieCardType[];
  pageLoading: boolean;
  totalCount: number;
  lastPage: number;
};

const initialState = {
  movieList: [],
  favoritesList: [],
  singleMovie: null,
  singleMovieLoading: false,
  movieCrew: null,
  relatedMovieList: [],
  searchResults: [],
  pageLoading: false,
  totalCount: 0,
  lastPage: 1,
};

// const movieSlice = createSlice({
//   name: "films",
//   initialState,
//   reducers: {
//     loadMovieList: (state, action: any) => {},
//     setMovieList: (state, action) => {
//       state.movieList = action.payload.map((card: MovieCardType) => {
//         return {
//           ...card,
//           is_saved: false,
//         };
//       });
//     },
//     setSavedStatus: (state: any, action: any) => {
//       const card = state.movieList.find((c: any) => c.id === action.payload.id);
//       if (card) {
//         card.is_saved = action.payload.action === true;
//       }
//     },
//     setFavoritesList: (state: any, action: any) => {
//       state.favoritesList = action.payload;
//     },
//     loadSingleMovie: (state, action) => {},
//     setSingleMovie: (state, action) => {
//       state.singleMovie = action.payload;
//     },
//     setMovieCrew: (state, action) => {
//       state.movieCrew = action.payload;
//     },
//     setSingleMovieLoading: (state, action) => {
//       state.singleMovieLoading = action.payload;
//     },
//     loadRelatedMovieList: (state, action) => {},
//     setRelatedMovieList: (state, action) => {
//       state.relatedMovieList = action.payload;
//     },
//     setMoreRelatedMovieList: (state: any, action) => {
//       state.relatedMovieList = [...state.relatedMovieList, ...action.payload];
//     },
//     setSearchResults: (state, action) => {
//       state.searchResults = action.payload;
//     },
//     loadSearchResults: (state, action) => {},
//     setPageLoading: (state, action) => {
//       state.pageLoading = action.payload;
//     },
//     setTotalCount: (state, action) => {
//       state.totalCount = action.payload;
//     },
//     setLastPage: (state, action) => {
//       state.lastPage = action.payload;
//     },
//     setSelectedFilmId: (state: any, action: any) => {
//       state.selectedFilmId = action.payload;
//     },
//   },
// });

const movieSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    loadMovieList: (state, action: any) => {},
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },

    loadSingleMovie: (state, action) => {},
    setSingleMovie: (state, action) => {
      state.singleMovie = action.payload;
    },

    setMoreMovieList: (state: any, action) => {
      state.movieList = [...state.movieList, ...action.payload];
    },

    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    loadSearchResults: (state, action) => {},
    setSelectedFilmId: (state: any, action: any) => {
      state.selectedFilmId = action.payload;
    },
  },
});

export const {
  loadMovieList,
  setMovieList,
  loadSingleMovie,
  setSingleMovie,
  setSearchResults,
  loadSearchResults,
  setMoreMovieList,
  // setMovieCrew,
  // setSingleMovieLoading,
  // loadRelatedMovieList,
  // setRelatedMovieList,
  // setMoreRelatedMovieList,

  // setPageLoading,
  // setFavoritesList,
  // setSavedStatus,
  // setTotalCount,
  // setLastPage,
  setSelectedFilmId,
} = movieSlice.actions;

export default movieSlice.reducer;

export const MovieSelector = {
  getMovieList: (state: any) => state.films.movieList,
  getFavoritesList: (state: any) => state.films.favoritesList,
  getSingleMovie: (state: any) => state.films.singleMovie,
  getSingleMovieCrew: (state: any) => state.films.singleMovieCrew,
  getSingleMovieLoading: (state: any) => state.films.singleMovieLoading,
  getMovieCrew: (state: any) => state.films.movieCrew,
  getRelatedMovieList: (state: any) => state.films.relatedMovieList,
  getSearchResults: (state: any) => state.films.searchResults,
  getPageLoading: (state: any) => state.films.pageLoading,
  getTotalCount: (state: any) => state.films.totalCount,
  getLastPage: (state: any) => state.films.lastPage,
};
