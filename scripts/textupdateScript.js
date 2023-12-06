const dict = {
  1: {
    title: "Design Principles Can’t Control AI",
    author: "Max Emrich",
  },
  2: {
    title: "Cicada 3301: A Mystery Unsolved",
    author: "Joseph Wang",
  },
  3: {
    title: "The 21st Century Cyber War",
    author: "Gracia Goh",
  },
  4: {
    title: "Entangled Gazes",
    author: "Shravani Bagawde",
  },
  5: {
    title: "The Decolonial Web?",
    author: "Johann Yamin",
  },
  6: {
    title: "Are We Data Hoarders or Digital Librarians?",
    author: "Marshall Wang Meixuan",
  },
  7: {
    title: "Sharing Your Heartbeat?",
    author: "Sidsel Ostbjerg",
  },
  8: {
    title: "The Man He Became",
    author: "Rishi Shankar",
  },
  9: {
    title: "Digital Detoxes, Data Leakage and Me",
    author: "Rebecca Hart",
  },
  10: {
    title: "The College Board’s Guide to Subjugating Minors",
    author: "Sid",
  },
  11: {
    title: "Unveiling AI layers",
    author: "Guanhao Zhu",
  },
  12: {
    title: "Little Sweet Potato, Who Gets to Eat It?",
    title_short: "Little Sweet Potato",
    author: "Alvin Liu",
  },
  13: {
    title: "Digital Trust: Unmasking Deceptive Patterns",
    title_short: "Digital Trust",
    author: "Juliana Serna Mesa",
  },
  14: {
    title: "The Attention Economy Payday",
    author: "Haoxin Tao",
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
