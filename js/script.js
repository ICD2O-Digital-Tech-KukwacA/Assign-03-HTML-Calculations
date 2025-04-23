// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Kukwac
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates speed of light in different mediums.
 */
function calculate() {
  // input
    let n = parseFloat(document.getElementById('diamond').value);
    let n2 = parseFloat(document.getElementById('water').value);
    const c = 300000000
  // process
    let v = c / n;
    let v2 = c / n2;

  // output
    document.getElementById('speed').innerHTML = 'The speed of light in diamond is ' + v.toExponential(2) + 'm/s' + '.'
    document.getElementById('speed2').innerHTML = 'The speed of light in water is ' + v2.toExponential(2) + 'm/s' + '.'
}
