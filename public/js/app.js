// Create a new date instance dynamically with JS
let d = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let newDate =
  d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();

document.getElementById("search").addEventListener("click", performAction);

function performAction() {
  const locationEnter = document.getElementById("location");
  const location = document.getElementById("city");
  const temp = document.getElementById("temp");
  const date = document.getElementById("date");
  const png = document.getElementById("png");

  if (locationEnter.value !== "") {
    document.getElementById("search").style.cursor = "pointer";

    fetch(`/weather?address=${locationEnter.value}`).then(
      (res) => {
        res.json().then((data) => {
          if (data.error) {
            alert(data.error);
            document.querySelectorAll(".active")[0].style.display = "none";
          } else {
            location.innerHTML = data.location;
            temp.innerHTML = `${data.temp} °C`;
            date.innerHTML = newDate;
            png.setAttribute("src", data.png);
            document.querySelectorAll(".active")[0].style.display = "block";
          }
        });
      }
    );
  } else {
    // Active class
    document.querySelectorAll(".active")[0].style.display = "none";
    alert("You must provide an address!");
  }

  locationEnter.value = "";
}
