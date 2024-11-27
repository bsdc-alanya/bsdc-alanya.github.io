console.log("ITS WORKING!!! QUICK TRY IT AND PRESS THE BUTTON")

const grabMyButton = document.getElementById('myButton')

const myFunc = function () {
    console.log('its working!!1');
    console.log('its working!!2');
    console.log('its working!!3');
}

grabMyButton.addEventListener("click", myFunc)

// const myFunc = function () {
//     console.log(`it worked`);
// }

const grabMyButton2 = document.getElementById("myButton2");
const grabBody = document.querySelector("body");

grabMyButton2.addEventListener("click", function () {
    console.log(grabBody.className);
    if (grabBody.className === "red") {
        grabBody.className = "blue";
    } else {
        grabBody.className = "red"
    }
});