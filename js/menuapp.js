$(document).foundation()

// Get the modal
var modal = document.getElementById('myModal01');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modal = document.getElementById('myModal02');
var img = document.getElementById('myImg02');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption02");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modal = document.getElementById('myModal03');
var img = document.getElementById('myImg03');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption03");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modal = document.getElementById('myModal04');
var img = document.getElementById('myImg04');
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption04");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close01")[0];
var span = document.getElementsByClassName("close02")[0];
var span = document.getElementsByClassName("close03")[0];
var span = document.getElementsByClassName("close04")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
