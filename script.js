let index = 1;

let timer = setInterval(diashow, 1000);

function diashow() {
  let image = document.getElementById("image").src = "flowers/" + index + ".jpg";
  index++;
}
