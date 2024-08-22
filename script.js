/* const colors = ["#c04343", "#43cc77", "#439acc", "#ccca43"] */
const colors = ["green", "blue", "yellow", "red"];

function createSquare() {
    var area = document.getElementById("tileSpace");

    console.log("making squares");

    for (let i = 0; i < 5000; i++) {
        const newTile = document.createElement("div");
        newTile.className = "squareTile";
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        newTile.classList.add(randomColor);
        area.appendChild(newTile);
    }
}

createSquare();