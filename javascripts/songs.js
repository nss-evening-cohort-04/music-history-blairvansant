var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("JoJo's Chillin - by Killer Mike on the album R.A.P. Music");
songs.unshift("Sweat Leaf - by Black Sabbath on the album Master of Reality");

for (var i = 0; i < songs.length; i++) {
	document.getElementById("songDescription").innerHTML +='<p>' + songs[i].replace(">", "-").replace("@", "").replace("(", "").replace("!", "").replace("*", "") + "</p>";
}

