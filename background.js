const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];
const chosenImage = images[Math.floor(Math.random()*quotes.length)];


const bgImage = document.createElement("img");
bgImage.setAttribute("id","img")


bgImage.src = `images/${chosenImage} ` ;
// bgImage.width  = 1300;
// bgImage.height = 800;
console.log(bgImage);

document.body.appendChild(bgImage)
