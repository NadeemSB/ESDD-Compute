function electroDischarge() {
  var sig1 = document.getElementById('sig1').value;
  var sig2 = document.getElementById('sig2').value;
  var theta = document.getElementById('theta').value;
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var v = document.getElementById('v').value;

  let sigTheta = (sig2 - sig1);
  let sig20 = sigTheta*(1-(b*(theta-20)))*(Math.pow(10, -4));
  let base = (sig20 * 5.7);
  let m = Math.pow(base, 1.03);
  let n = (m * v) / a;
  let salinity = (m).toFixed(4)
  let esdd = (n).toFixed(4)
  document.getElementById('res').innerHTML = 'ESDD: ' + esdd;
  document.getElementById('sal').innerHTML = 'Salinity: ' + salinity;
}
