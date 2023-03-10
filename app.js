const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const mainToolBar = document.querySelector('.main-tool-bar')
const maxPaletteBoxes = 1002;
const generatePalette = () => {
    container.innerHTML = ""; 
    for (let i = 0; i < maxPaletteBoxes; i++) {

        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        mainToolBar.style.backgroundColor = `${randomHex}`
 
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}
generatePalette();
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
  
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied!";
        colorElement.style.color = "#07ff7d";
        setTimeout(() => colorElement.style.color = "#444",1000)
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!")); // showing alert if color can't be copied
}
refreshBtn.addEventListener("click", generatePalette);