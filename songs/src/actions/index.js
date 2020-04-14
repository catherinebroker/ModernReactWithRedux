// Action Creator
export const selectSong = (song) => {
  // Return an action
  return {
    // Must have a type and maybe a payload
    type: 'SONG_SELECTED',
    payload: song
  };
};