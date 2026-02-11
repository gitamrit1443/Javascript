"use strict";
let isOn = false;

    const toggleBulb=()=> {
      const bulb = document.getElementById("bulb");
      const button = document.querySelector("button");

      if (isOn) {
        bulb.src = "dim.png";
        button.innerText = "Turn On";
      } else {
        bulb.src = "glow.png";
        button.innerText = "Turn Off";
      }

      isOn = !isOn;
    }