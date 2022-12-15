// Copyright (c) 2022 Darcy Murphy All rights reserved
//
// Created by: Darcy Murphy
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-01/sw.js", {
    scope: "/ICS2O-Unit3-01-JS/",
  })
}

/**
 * This function calculates the area of a trapezoid
 */
function enterClicked() {
  //input
  const baseA = parseInt(document.getElementById("base-a-of-trapezoid").value)
  const baseB = parseInt(document.getElementById("base-b-of-trapezoid").value)
  const height = parseInt(document.getElementById("height-of-trapezoid").value)

  //process
  const area = ((baseA + baseB) / 2) * height

  //output
  document.getElementById("area-of-trapezoid").innerHTML =
    "The area of the trapezoid is: " + area.toFixed(2) + " cm²."
}