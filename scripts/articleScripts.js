function toggleImgHover(clickedElement) {
  var imgHoverClicked = clickedElement.querySelector(".img-hover");

  // Check if the clicked container already has the 'active' class
  if (imgHoverClicked.classList.contains("active")) {
    // Toggle off if already active
    imgHoverClicked.classList.remove("active");
    removeOverlay();
  } else {
    // Get all image containers
    var imageContainers = document.querySelectorAll(".image-container");

    // Loop through all containers to reset img-hover display
    imageContainers.forEach(function (container) {
      var imgHover = container.querySelector(".img-hover");
      imgHover.classList.remove("active");
    });

    // Toggle on for the clicked container
    imgHoverClicked.classList.add("active");
    createOverlay();
  }
}

function createOverlay() {
  var overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
}

function removeOverlay() {
  var overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var initialContainer = document.querySelector(".columns"),
    columnItems = document.querySelectorAll(".columns li"),
    columns = null,
    column = 1; // account for initial column

  function updateColumns() {
    column = 0;
    columnItems.forEach(function (el, idx) {
      if (
        idx !== 0 &&
        idx > columnItems.length / columns.length + column * idx
      ) {
        column += 1;
      }
      console.log(column, el, idx);
      columns[column].appendChild(el);
    });
  }

  function setupColumns() {
    columnItems.forEach(function (el) {
      el.remove();
    });

    var columnCount = initialContainer.dataset.columns;
    while (column++ < columnCount) {
      var clone = initialContainer.cloneNode(true);
      initialContainer.parentNode.insertBefore(clone, initialContainer);
      column++;
    }
    columns = document.querySelectorAll(".columns");
    updateColumns();

    // Clearfix: Add an element with clear: both after the floated columns
    var clearfix = document.createElement("div");
    clearfix.style.clear = "both";
    initialContainer.parentNode.appendChild(clearfix);

    // Responsive styling
    var mediaQuery = window.matchMedia("(max-width: 1400px)"); // Adjust the breakpoint as needed

    function handleMediaQuery(mediaQuery) {
      columns.forEach(function (col) {
        col.style.width = mediaQuery.matches ? "102%" : "48%";
      });
    }

    // Set initial styles
    handleMediaQuery(mediaQuery);

    // Listen for changes in media query
    mediaQuery.addListener(handleMediaQuery);
  }

  setupColumns();
});
