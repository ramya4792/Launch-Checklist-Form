// Write your JavaScript code here!
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
                    <h2> Mission Destination </h2>
                    <ol>
                        <li>Name: ${json[0].name}</li>
                        <li>Diameter: ${json[0].diameter}</li>
                        <li>Star: ${json[0].star}</li>
                        <li>Distance from Earth: ${json[0].distance}</li>
                        <li>Number of Moons: ${json[0].moons}</li>
                    </ol>
                    <img src="${json[0].image}"/>
                    `;
        });
    });
    let form = document.querySelector("form");
    form.addEventListener("submit", function () {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All feilds are required");
        }else if (isNaN(fuelLevel.value) === true) {
            alert("Fuel Level must be a number");
        }else if (isNaN(cargoMass.value) === true){
            alert("Cargo Mass should be a number");
        }
        event.preventDefault();

        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready to launch`;
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready to launch`;
        document.getElementById("faultyItems").style.visibility = "visible";
        if (fuelLevel.value < 10000) {
            document.getElementById("fuelStatus").innerHTML = `Fuel level is too low for launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = "red";
    
        } 
        if (cargoMass.value > 10000) {
            document.getElementById("cargoStatus").innerHTML = `Too much mass for the shuttle to launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = "red";
        }
        if (fuelLevel.value >= 10000 && cargoMass.value <=10000) {
                document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
                document.getElementById("launchStatus").style.color = "green";
        }



    });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
