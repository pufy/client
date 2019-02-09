import * as actions from "./constanst";

export const getPlayList = () => ({
  type: actions.GET_PLAYLIST,

});


export const getPlayListSuccess = (data) => ({
  type: actions.GET_PLAYLIST_SUCCESS,
  data
});

export const getPlayerFailed = (error) => ({
  type: actions.GET_PLAYER_FAILED,
  error
});