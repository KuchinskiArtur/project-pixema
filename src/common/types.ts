import React from "react";

export type CardTypes = {
  id?: number;
  poster?: string;
  title?: string;
  text?: string;
  raiting?: string;
  onClick?: (event: any) => void;
  saved?: boolean;
};

export type GenresType = {
  id: number;
  type: string;
  name: string;
  display_name: string;
};

export type MovieCardType = {
  id: number;
  name?: string;
  poster?: string;
  tagline?: string;
  rating?: string;
  isTrends?: boolean;
  isSaved?: boolean;
  onClick?: (event: any) => void;
  original_title?: string;
  genre?: null | string;
  genres?: GenresType[];
  year?: number;
  budget?: number;
  country?: null | string;
  description?: string;
  adult?: boolean;
  affiliate_link?: null;
  allow_update?: boolean;
  backdrop?: string;
  certification?: string;
  created_at?: null | string;
  episode_count?: number;
  fully_synced?: boolean;
  imdb_id?: string;
  is_series?: boolean;
  language?: string;
  model_type?: string;
  popularity?: number;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  season_count?: number;
  series_ended?: boolean;
  show_videos?: boolean;
  stream_videos_count?: number;
  tmdb_id?: number;
  trailer?: null;
  type?: string;
  updated_at?: string;
  views?: number;
  vote_count?: number;
};

export type UserDataType = {
  first_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
};

export type RegisterUser = {
  first_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
  callback: () => void;
};

export type TableDataTypes = {
  director: string[];
  writers: string[];
  cast: string[];
};

export type LabelItemProps = {
  title: string;
  inputType: string;
  inputPlaceholder: string;
  inputName?: string;
  inputValue?: string;
  inputClassName?: string;
  inputReadonly?: boolean;
  onBlur?: (event: any) => any;
  onChange?: (event: any) => void;
};

export type InputProps = {
  type: string;
  name?: string;
  readonly?: boolean;
  className?: string;
  error?: boolean;
  placeholder?: string;
  value?: any;
  onBlur?: (event: any) => void;
  onChange?: (event: any) => void;
};

export type FilmType = {
  id: number;
  name: string;
  type: string;
  release_date: string;
  year: number;
  description: string;
  genre: any;
  tagline: string;
  poster: string;
  backdrop: string;
  runtime: number;
  trailer: any;
  budget: any;
  revenue: any;
  views: number;
  popularity: number;
  imdb_id: string;
  tmdb_id: number;
  season_count: number;
  fully_synced: boolean;
  allow_update: boolean;
  created_at: string;
  updated_at: string;
  language: string;
  country: any;
  original_title: string;
  affiliate_link: any;
  certification: string;
  episode_count: number;
  series_ended: boolean;
  is_series: boolean;
  show_videos: boolean;
  adult: boolean;
  rating: string;
  model_type: string;
  vote_count: number;
  data: any;
};

export enum Theme {
  Light = "light",
  Dark = "dark",
}
