document.addEventListener('DOMContentLoaded', () => {
  const preview = document.querySelector(".card-image__preview");
  const miniatures = document.querySelectorAll(".card-miniatures__miniature");
  let currentImage = 0;

  const changeImage = (preview, img) => {
    const {dataset: {src}} = img;

    preview.src = src;

    const active = document.querySelector(".active");
    active.classList.toggle("active");

    img.classList.toggle("active");
  };

  miniatures.forEach((mini, index) => {
    mini.addEventListener('click', () => {
      changeImage(preview, mini);
      currentImage = index;
    });

  });

  setInterval(() => {
    if(currentImage > miniatures.length - 1) {
      currentImage = 0;
    };

    changeImage(preview, miniatures[currentImage]);

    currentImage++;

  }, 4000);
});