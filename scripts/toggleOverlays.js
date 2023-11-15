document
  .getElementById("toggleCheckbox")
  .addEventListener("change", function () {
    var overlay = document.getElementById("overlay");
    overlay.style.display = this.checked ? "block" : "none";
  });
