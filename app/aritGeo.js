'use strict';

var exports = module.exports = {};

exports.aritGeo = function(arr)
{
  if (arr && arr.length === 0) return 0;

  let firstNum = arr[1] - arr[0];
  let geoNum = arr[1] / arr[0];
  
  for (let i=0; i<arr.length-1; i++) { 
  	if ((arr[i] + firstNum) != (arr[i+1])) {	
      for (let j=0; j<arr.length-1; j++) { 
        if (arr[j]*geoNum != arr[j+1]) {
          return -1;
        }
      }
      return "Geometric";	  
    }	
  }
  return "Arithmetic"; 
};
