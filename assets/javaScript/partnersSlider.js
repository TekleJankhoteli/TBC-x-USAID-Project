const partnersData = [
    { src: "/assets/images/partners/USAID.png", name: "usaid" },
    { src: "/assets/images/partners/SpaceInt.png", name: "spaceint" },
    { src: "/assets/images/partners/Tinet.png", name: "tineti" },
    { src: "/assets/images/partners/Tegeta.png", name: "tegeta" },
    { src: "/assets/images/partners/Spectre.png", name: "spectre" },
    { src: "/assets/images/partners/TBCleasing.png", name: "tbcleasing" },
    { src: "/assets/images/partners/UFC.png", name: "ufc" },
  ];

  const carouselContainer = document.getElementById('carousel-container');
  const sliderContainer = document.getElementById('slider-container');
  let currentIndex = 0;

  function showSlides() {
    carouselContainer.innerHTML = '';
    const currentSet = partnersData.slice(currentIndex, currentIndex + 3);
    for (const partner of currentSet) {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      const image = document.createElement('img');
      image.src = partner.src;
      image.alt = partner.name;
      slide.appendChild(image);
      carouselContainer.appendChild(slide);
    }
  }

  function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = partnersData.length - 3;
    } else if (currentIndex > partnersData.length - 3) {
      currentIndex = 0;
    }

    sliderContainer.classList.add('manual-transition');
    showSlides();

    // Reset the transition class after the manual slide change
    setTimeout(() => {
      sliderContainer.classList.remove('manual-transition');
    }, 8000); // Adjust the timeout value to match your transition duration
  }

  function autoChangeSlide() {
    changeSlide(1);
    setTimeout(autoChangeSlide, 8000); // Change slide every 5 seconds
  }

  showSlides(); // Initial render
  autoChangeSlide(); // Start auto slide change