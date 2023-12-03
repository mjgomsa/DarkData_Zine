const dict = {
  1: {
    title: "Are We Data Hoarders or Digital Librarians?",
    author: "Marshall Wang",
  },
  2: {
    title: "Sharing Your Heartbeat?",
    author: "Sidsel Ostbjerg",
  },
  3: {
    title: "Entangled Gazes: Comparing Ring and Citizen",
    author: "Shravani Bagawde",
  },
  4: {
    title: "The Man He Became",
    author: "Rishi Shankar",
  },
  5: {
    title: "The 21st Century Cyber War",
    author: "Gracia Goh",
  },
  6: {
    title: "Design Principles Can’t Control AI",
    author: "Max Emrich",
  },
  7: {
    title: "Digital Detoxes, Data Leakage and Me",
    author: "Rebecca Hart",
  },
  8: {
    title: "Cicada 3301: A Mystery Unsolved",
    author: "Joseph Wang",
  },
  9: {
    title: "The Decolonial Web?",
    author: "Johann Yamin",
  },
  10: {
    title: "Unveiling the AI layers",
    author: "Guanhao Zhu",
  },
  11: {
    title: "Interplay between Blockchain and Attention Economics",
    author: "Haoxin Tao",
  },
  12: {
    title: "The College Board’s Guide to Subjugating Minors",
    author: "Sid",
  },
  13: {
    title: "NAME TBD",
    author: "Tuerhong Guliniali",
  },
  14: {
    title: "NAME TBD",
    author: "Juliana Serna Mesa",
  },
};

function updateHeaderText() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  for (var num = 1; num <= 14; num++) {
    var titleElement = document.getElementById("dynamicTitle_" + num);
    titleElement.textContent = dict[num].title;

    var authorElement = document.getElementById("dynamicAuthor_" + num);
    authorElement.textContent = dict[num].author;
  }
}

updateHeaderText();
window.addEventListener("resize", updateHeaderText);
