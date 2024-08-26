// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("projects__mySlides");
//   var dots = document.getElementsByClassName("projects__dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

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
