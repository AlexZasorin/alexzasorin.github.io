function replaceAllImageSrc(newSrc) {
  var images = document.querySelectorAll("img");
  for (var i = 0; i < images.length; i++) {
    images[i].src = newSrc;
  }
}

var newSrc = "https://cdn3.emoji.gg/emojis/7215_thonk.png";
replaceAllImageSrc(newSrc);
