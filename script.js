let index = 1;

// let timer = setInterval(diashow, 1000);
//
// function diashow() {
//   let image = document.getElementById("image").src = "flowers/" + index + ".jpg";
//   index++;
// }


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    // files is a FileList of File objects. List some properties.
    let reader = new FileReader();

    // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          document.getElementById("image").src = e.target.result;
        };
      })(files[0]);

      // Read in the image file as a data URL.
      reader.readAsDataURL(files[0]);

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
