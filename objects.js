var playlist = {'song':'title'};

var updatePlaylist = function(playlist, artistName, songTitle){
   playlist[artistName] = songTitle
   return playlist
}

var removeFromPlaylist = functiong(playlist, artistName){
  delete playlist.artistName;
  return playlist
}
