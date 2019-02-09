import * as actions from "./constanst";

export const signupMusicalGenre = (musicalgenre) => {
  return {
    type: actions.SIGNUP_MUSICAL_GENRE,
    musicalgenre
  }
};

export const signupMusicalSuccess = (data) => ({
  type: actions.SIGNUP_MUSICAL_GENRE_SUCCESS,
  data
});

export const signupMusicalFailed = (error) => ({
  type: actions.SIGNUP_MUSICAL_GENRE_FAILED,
  error
});

export const getMusicalGenre = () => ({
  type: actions.GET_MUSICAL_GENRE,
});

export const getMusicalGenreSuccess = (data) => ({
  type: actions.GET_MUSICAL_GENRE_SUCCESS,
  data
});

export const getMusicalFailed = (error) => ({
  type: actions.SIGNUP_MUSICAL_GENRE_FAILED,
  error
});
