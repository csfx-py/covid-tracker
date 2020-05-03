const txtSet = ["Tracker","Symptoms","Safety"];
const data = "https://api.rootnet.in/covid19-in/stats/latest";
const lastUpdated = document.querySelector(".ref_date");
let count = 0;
let index = 0;
let currTxt = "";
let letter = "";

fetch(data)
  .then((response) => response.json())
  .then((data) => {
    const myData = Object.values(data.data.summary);
    const refreshed = data.lastOriginUpdate;
    const refreshedDate = new Date(refreshed);
    lastUpdated.textContent = refreshedDate;
    console.log(myData); // For Debugging
    document.querySelector(".total .number").textContent =
      myData[0];
    document.querySelector(".infected .number").textContent = `${
      myData[0] - myData[3]
    }`;
    document.querySelector(".recovered .number").textContent =
      myData[3];
    document.querySelector(".dead .number").textContent =
      myData[4];
  });

(function type() {
    if (count === txtSet.length) {
        count = 0;
    }
    currTxt = txtSet[count];
    letter = currTxt.slice(0, ++index);
    
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currTxt.length){
        count++;
        index = 0;
    }

    setTimeout(type, 400);
})();

function cascNav() {
    var x = document.getElementById("myNav");
    if(x.className === "navmenu") {
        x.className += " responsive";
        console.log(x.className);
    }
    else {
        x.className = "navmenu";
    }
}