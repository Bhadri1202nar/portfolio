

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")

}

// Find the slider element
// Add event listeners to update slider value displays
pythonSlider.addEventListener('input', () => {
  pythonSliderValue.textContent = `Proficiency: ${pythonSlider.value}`;
});

cSlider.addEventListener('input', () => {
  cSliderValue.textContent = `Proficiency: ${cSlider.value}`;
});

javaSlider.addEventListener('input', () => {
  javaSliderValue.textContent = `Proficiency: ${javaSlider.value}`;
});
