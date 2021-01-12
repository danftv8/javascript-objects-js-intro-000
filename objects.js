var playlist = {'song':'title'};

var updatePlaylist = function(playlist, artistName, songTitle){
   playlist[artistName] = songTitle
   return playlist
}

function removeFromPlaylist(playlist, artistName){
  var playlist = playlist;
  delete playlist.artistName
  return playlist
}