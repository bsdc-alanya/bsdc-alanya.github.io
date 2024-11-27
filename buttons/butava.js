console.log("ITS WORKING!!! QUICK TRY IT AND PRESS THE BUITTON")

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