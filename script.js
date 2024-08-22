const colors = ["#c04343", "#43cc77", "#439acc", "#ccca43"]

function createSquare() {
    var area = document.getElementById("tileSpace");

    console.log("making squares");

    for (let i = 0; i < 100; i++) {
        const newTile = document.createElement("div");
        newTile.className = "squareTile";
        const randomColor = colors[Math.floor(Math.random) * colors.length];
        newTile.style.backgroundColor = randomColor;
        area.appendChild(newTile);
    }
}

createSquare();