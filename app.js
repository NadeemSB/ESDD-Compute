function electroDischarge() {
  var sig1 = document.getElementById('sig1').value;
  var sig2 = document.getElementById('sig2').value;
  var theta = document.getElementById('theta').value;
  var a = document.getElementById('a').value;
  var v = document.getElementById('v').value;

  let b = ((-3200*(Math.pow(10,-8))*Math.pow(theta,3)) + (1032*(Math.pow(10,-5))*Math.pow(theta,2)) - (8272*(Math.pow(10,-4))*theta) + (3544*(Math.pow(10, -2))))/1000;
  let sigTheta = (sig2 - sig1);
  let sig20 = sigTheta*(1-(b*(theta-20)))*(Math.pow(10, -4));
  let base = (sig20 * 5.7);
  let m = Math.pow(base, 1.03);
  let n = (m * v) / a;
  let salinity = (m).toFixed(4);
  let esdd = (n).toFixed(4);
  document.getElementById('res').innerHTML = 'ESDD: ' + esdd;
  document.getElementById('sal').innerHTML = 'Salinity: ' + salinity;
}

function refresh(){
  location.href = "index.html";
  document.getElementByClassName("refresh").innerHTML = location.href;
}
