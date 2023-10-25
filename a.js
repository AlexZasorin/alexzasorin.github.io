function replaceAllBackgroundImages(newUrl) {
  var divs = document.querySelectorAll("div");
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].style.backgroundImage) {
      divs[i].style.backgroundImage = "url(" + newUrl + ")";
    }
  }
}

var newUrl = "https://cdn3.emoji.gg/emojis/7215_thonk.png";
replaceAllBackgroundImages(newUrl);
