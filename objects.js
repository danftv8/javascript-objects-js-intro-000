var playlist = {'song':'title'};

var updatePlaylist = function(playlist, artistName, songTitle){
   return Object.assign({}, playlist, { [artistName]: songTitle })
}