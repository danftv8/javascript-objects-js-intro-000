var playlist = {
  artist: "song"
};
var updatePlaylist = function(playlist, artistName, songTitle){
   return Object.assign({}, playlist, { [artistName]: songTitle })
}
