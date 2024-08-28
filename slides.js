// var slideRealIndex = 0;
// showRealSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideRealIndex++;
//   if (slideRealIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showRealSlides, 3000); // Change image every 2 seconds
// }


// 2nd PAGE

var slideRealIndex = 1;
showRealSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showRealSlides((slideRealIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showRealSlides((slideRealIndex = n));
}

function showRealSlides(n) {
  var i;
  var slidesReal = document.getElementsByClassName("realization__mySlides");
  var dotsReal = document.getElementsByClassName("realization__dot");
  if (n > slidesReal.length) {
    slideRealIndex = 1;
  }
  if (n < 1) {
    slideRealIndex = slidesReal.length;
  }
  for (i = 0; i < slidesReal.length; i++) {
    slidesReal[i].style.display = "none";
  }
  for (i = 0; i < dotsReal.length; i++) {
    dotsReal[i].className = dotsReal[i].className.replace(" active", "");
  }
  slidesReal[slideRealIndex - 1].style.display = "block";
  dotsReal[slideRealIndex - 1].className += " active";
}


// 1st PAGE

var slideIndex = [1, 1];
var dotsIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["projects__mySlides", "projects__mySlides_2"];
var dotsId = document.getElementsByClassName(
  "projects__dot",
  "projects__dot_2"
);
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var d = document.getElementsByClassName(dotsId[no]);

  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";

  // if (n > d.length) {
  //   dotsIndex[no] = 1;
  // }
  // if (n < 1) {
  //   dotsIndex[no] = d.length;
  // }
  // for (i = 0; i < d.length; i++) {
  //   x[i].style.display = "none";
  // }
  // d[dotsIndex[no] - 1].style.display = "block";
}
