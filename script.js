const colorDiv = document.getElementById("container-colors");
let colorCount = 100;

async function getColors(colorCount) {
  let response = await fetch(`https://apis.scrimba.com/hexcolors?count=${colorCount}`);
  let data = await response.json();

  console.log(data);

  let colors = data.colors;

  console.log(colors);

  setColors(colors);
}

function setColors(colors) {
  let allColors = colors
    .map(
      color => `<div class="each-color" style="background-color: ${color.value};">
    ${color.value}
    </div>`
    )
    .join("");

  colorDiv.innerHTML = allColors;
}

getColors(colorCount);
