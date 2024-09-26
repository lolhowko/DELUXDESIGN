document.querySelectorAll(".portfolio__img").forEach((img) => {
  console.log(img);
  img.onClick = () => {
    document.querySelector(".realization__portfolio__pop-up").style.display =
      "block";
    document.querySelector(".realization__portfolio__pop-up__img").src =
      img.getAttribute("src");
  };
});
