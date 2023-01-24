
// Get the input field
var input = document.getElementById("gradeentry");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("button").click();
    }
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img2 = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


// Arrays to store grades
const yds = ["5.2", "5.3",
    "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c",
    "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c",
    "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c",
    "5.14d", "5.15a", "5.15b", "5.15c", "5.15d", "5.16a"]

const french = ["1", "2",
    "3", "4", "5a", "5b", "5c", "6a", "6a+", "6a+", "6b",
    "6b+", "6c", "6c+", "7a", "7a+", "7b", "7b+", "7c",
    "7c+", "7c+", "8a", "8a+", "8b", "8b+", "8c", "8c+",
    "9a", "9a+", "9b", "9b+", "9c", "9c+"]

function gradeConvert() {

    var grade = document.getElementById("gradeentry").value;

    if (!grade.includes('5.')) {

        grade = '5.' + grade

    }

    var div = document.getElementById('gradereveal');
    if (yds.includes(grade, 0)) {

        const yds_grade = yds.indexOf(grade);
        const fr_grade = french.at(yds_grade);
        document.getElementById('gradeanswer').textContent = fr_grade


    } else {

        document.getElementById('gradeanswer').textContent = 'Please enter a YDS grade!'

    }
}


