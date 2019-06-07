
//Constructor

const library = function(name, creator) {
  if(typeof name === "string" && typeof creator === "string") {
    this.name = name;
    this.creator = creator;
  }
}

const playlist = function(name) {
  this.name = name;
}

const track = function(title, rating, length) {
  if(rating >= 1 && rating <= 5) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}


//Library Prototype

library.prototype.playlists = [];
library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}


//Playlist Prototype

playlist.prototype.tracks = [];
playlist.prototype.addTracks = function(track) {
  this.tracks.push(track);
}
playlist.prototype.overallRating = function() {
  let totalRating = 0;
  this.tracks.forEach(track =>
    totalRating += track.rating
  )
  return totalRating / this.tracks.length;
}
playlist.prototype.totalDuration = function() {
  let totalDuration = 0;
  this.tracks.forEach(track =>
    totalDuration += track.length
  )
  return totalDuration;
}


//Test Code

const music_library = new library("pop","Shade");
console.log("Music_library created: ", music_library);
console.log("Music_library initial playlists: ", music_library.playlists);

const fav_playlist = new playlist("Pop country songs");
console.log("Fav_playlist created: ", fav_playlist);
console.log("Fav_playlist initial tracks: ", fav_playlist.tracks);

const track1 = new track("Getaway Car", 4, 180);
const track2 = new track("Gorgeous", 3, 140);
const track3 = new track("Real Friends", 4, 190);
const track4 = new track("Normal", 5, 176);

fav_playlist.addTracks(track1);
fav_playlist.addTracks(track2);
fav_playlist.addTracks(track3);
fav_playlist.addTracks(track4);
console.log("Tracks added to playlist: ",fav_playlist.tracks);

console.log("Overall rating: ", fav_playlist.overallRating());
console.log("Total duration: ", fav_playlist.totalDuration());

music_library.addPlaylist(fav_playlist);
console.log("Playlist added: ", music_library.playlists);














