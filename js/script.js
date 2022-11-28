// Copyright (c) 2022 Darcy Murphy All rights reserved
//
// Created by: Darcy Murphy
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use-strict"
/**
 * This function calculates the area and preimter of a trapezoid
 */
function calculated() {
  // input
  const height = parseInt(document.getElementById("sample3").value);
  const baseb = parseInt(document.getElementById("sample2").value);
  const basea = parseInt(document.getElementById("sample1").value);

  // process 
  const area = [(basea + baseb) / 2] * height;

  // output
  document.getElementById("area").innerHTML = "Area is:" + area + cm2;
}