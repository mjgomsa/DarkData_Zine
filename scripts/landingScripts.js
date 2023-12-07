const imgDict = {
  Max: {
    web: "./assets/landing/gallery/MaxSQ.png",
    mobile: "./assets/landing/gallery/MaxSQ-mobile.png",
  },
  Joseph: {
    web: "./assets/landing/gallery/JosephSQ.png",
    mobile: "./assets/landing/gallery/JosephSQ-mobile.png",
  },
  Gracia: {
    web: "./assets/landing/gallery/GraciaSQ.png",
    mobile: "./assets/landing/gallery/GraciaSQ-mobile.png",
  },
  Shravani: {
    web: "./assets/landing/gallery/ShravaniSQ.png",
    mobile: "./assets/landing/gallery/ShravaniSQ-mobile.png",
  },
  Johann: {
    web: "./assets/landing/gallery/JohannSQ.png",
    mobile: "./assets/landing/gallery/JohannSQ-mobile.png",
  },
  Marshall: {
    web: "./assets/landing/gallery/MarshalSQ.png",
    mobile: "./assets/landing/gallery/MarshallSQ-mobile.png",
  },
  Sidsel: {
    web: "./assets/landing/gallery/SidselSQ.png",
    mobile: "./assets/landing/gallery/SidselSQ-mobile.png",
  },
  Rishi: {
    web: "./assets/landing/gallery/RishiSQ.png",
    mobile: "./assets/landing/gallery/RishiSQ-mobile.png",
  },
  Rebecca: {
    web: "./assets/landing/gallery/RebeccaSQ.png",
    mobile: "./assets/landing/gallery/RebeccaSQ-mobile.png",
  },
  Sid: {
    web: "./assets/landing/gallery/SidSQ.png",
    mobile: "./assets/landing/gallery/SidSQ-mobile.png",
  },
  Guanhao: {
    web: "./assets/landing/gallery/GuanhaoSQ.png",
    mobile: "./assets/landing/gallery/GuanhaoSQ-mobile.png",
  },
  Alvin: {
    web: "./assets/landing/gallery/AlvinSQ.png",
    mobile: "./assets/landing/gallery/AlvinSQ-mobile.png",
  },
  Juliana: {
    web: "./assets/landing/gallery/JuliannaSQ.png",
    mobile: "./assets/landing/gallery/JulianaSQ-mobile.png",
  },
  Haoxin: {
    web: "./assets/landing/gallery/HaoxinSQ.png",
    mobile: "./assets/landing/gallery/HaoxinSQ-mobile.png",
  },
};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function replaceImageOnMobile() {
  for (const [key, value] of Object.entries(imgDict)) {
    const flipCardId = document.getElementById("dynamicImageContainer_" + key);
    let cardImage = document.createElement("img");
    cardImage.id = "cardImage";
    if (window.innerWidth <= 780) {
      cardImage.src = value.mobile; // Use value.mobile instead of key.mobile
      flipCardId.appendChild(cardImage);
    } else {
      cardImage.src = value.web; // Use value.web instead of key.desktop
      flipCardId.appendChild(cardImage);
    }
  }
}

// Call the function to replace images on page load
replaceImageOnMobile();
