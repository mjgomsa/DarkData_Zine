const dict = {
  1: {
    author: "Marshall Wang",
    description: "",
  },
  2: {
    author: "Sidsel Ostbjerg",
    description: "",
  },
  3: {
    author: "Shravani Bagawde",
    description: [
      "Shravani is based in New York, NY and is working towards a BFA in Communication Design from Parsons School of Design. She enjoys making things that can exist somewhere between online and offline, and always finds herself approaching design through writing. She has worked with the Center for Urban Pedagogy and is currently freelancing with Partner & Partners. She is interested in digital folklore, infrastructural media, and correspondence.",
      "In her free time, she likes to collect GIFs that she finds on Wikimedia Commons.",
    ],
  },
  4: {
    author: "Rishi Shankar",
    description: "",
  },
  5: {
    author: "Gracia Goh",
    description: [
      "Gracia is a designer working in the intersections of urbanism, design, and justice. She is currently pursuing a Masters in Design & Urban Ecologies where she is researching ecofeminism and art as activism. Coming from Singapore, she previously worked as a designer at Chemistry, a strategic design consultancy focused on circularity and human-centered design.",
    ],
  },
  6: {
    author: "Juliana Serna Mesa",
    description: [
      "Juliana is a Latina designer based in New York. Member of IDSA and Women in Design Association. Her work spans from physical objects to digital experiences and user interfaces. She graduated with a B.S. in Industrial Design, featuring an award-winning project that re-imagines the future experience of smart living. Following this, she completed her studies in Advanced Product Design at NABA in Milano and at the intersection of art, design, and engineering at Harvard (GSD).",
      "Currently, she is finishing a STEM master's program in Design and Technology at Parsons School of Design, with a focus on user experiences and interaction. Alumni of the MBA collab-year program at Cornell Tech as a digital product designer, working with her own Latin-American public interest startup. Previously, worked at The RealReal, where she improved the company's mannequin luxury interaction, as well as experiences in health-tech and entertainment with Johnson & Johnson, Mount Sinai, IBM, and Disney. Juliana actively contributes to her community as a guest professor at Pratt Institute in Design for the Elderly and Biomimicry Capstone Studios, as well as a Design & Tech tutor at The New School.",
    ],
  },
  7: {
    author: "Rebecca Hart",
    description: "",
  },
  8: {
    author: "Joseph Wang",
    description: "",
  },
  9: {
    author: "Johann Yamin",
    description: "",
  },
  10: {
    author: "Guanhao Zhu",
    description: "",
  },
  11: {
    author: "Haoxin Tao",
    description: "",
  },
  12: {
    author: "Sid",
    description: "",
  },
  13: {
    author: "Tuerhong Guliniali",
    description: "",
  },
  14: {
    author: "Juwon Lee",
    role: "Editor / Design Director",
    description: "",
  },
  15: {
    author: "Anne-Isabelle de Bokay",
    role: "Editor / Art Director",
    description: "",
  },
  16: {
    author: "Dayna Brislane",
    role: "Art Director",
    description: "",
  },
  17: {
    author: "MJ Gomez-Saavedra",
    role: "Technical Director",
    description: "",
    portafolio: "https://www.mjgomez-saavedra.com/",
    instagram: "https://www.mjgomez-saavedra.com/",
  },
  18: {
    author: "Max Emrich",
    role: "Technical Director / Contributor",
    description: [
      "Max Emrich is a reformed industrial designer & systems thinker rooted in Munich, based in New York and influenced by places around the globe.",
      "Rooted in prototyping and making, he is a connector of dots, people and ideas, trying to untangle systems instead of simplifying them — as such, he is a wanderer between disciplines. Speaking his mind and following through on his words, he asks harder questions and pursues their answers. Accepting that “everything must change so that everything can stay the same“,  he aims to make things right and push forward.",
    ],
  },
};

function makeAccordion(numberOfSections, startNum, parentDiv) {
  for (let i = startNum; i < startNum + numberOfSections; i++) {
    const collapsableSection = document.createElement("div");
    collapsableSection.className = "collapsableSection";

    // Create the details element
    const details = document.createElement("details");

    // Create the summary element with the specified content
    const summary = document.createElement("summary");
    if (dict[i].role) {
      summary.innerHTML = dict[i].author + " <span>" + dict[i].role + "</span>";
    } else {
      summary.innerHTML = dict[i].author;
    }

    // Create the paragraphs and set their content
    if (dict[i].description) {
      const numParagraphs = dict[i].description.length;

      dict[i].description.forEach((paragraphText, index) => {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = paragraphText;

        // Add breaks between paragraphs but skip adding a break after the last paragraph
        if (index < numParagraphs - 1) {
          paragraph.innerHTML += "<br/><br/>";
        }

        details.appendChild(paragraph);
      });
    }

    // Create the links div and the anchor elements
    const linksDiv = document.createElement("div");
    linksDiv.className = "links";

    if (dict[i].portafolio) {
      const portfolioLink = document.createElement("a");
      portfolioLink.href = dict[i].portafolio;
      portfolioLink.innerHTML = "Portafolio ↗";
      linksDiv.appendChild(portfolioLink);
    }

    if (dict[i].linkedIn) {
      const linkedInLink = document.createElement("a");
      linkedInLink.href = dict[i].linkedIn;
      linkedInLink.innerHTML = "LinkedIn ↗";
      linksDiv.appendChild(linkedInLink);
    }

    if (dict[i].instagram) {
      const instagramLink = document.createElement("a");
      instagramLink.href = dict[i].instagram;
      instagramLink.innerHTML = "Instagram ↗";
      linksDiv.appendChild(instagramLink);
    }

    // Append all elements to the details element
    details.appendChild(summary);
    details.appendChild(linksDiv);

    // Append the details element to the collapsable section
    collapsableSection.appendChild(details);

    // Append the collapsable section to the parentDiv
    parentDiv.appendChild(collapsableSection);
  }
}

// Accordion 1 call
const ac1_numberOfSections = 5;
const ac1_startNum = 14;
const ac1_parentDiv = document.getElementById("dynamicAccordion1");

makeAccordion(ac1_numberOfSections, ac1_startNum, ac1_parentDiv);

// Accordion 2 call
const ac2_numberOfSections = 13;
const ac2_startNum = 1;
const ac2_parentDiv = document.getElementById("dynamicAccordion2");

makeAccordion(ac2_numberOfSections, ac2_startNum, ac2_parentDiv);
