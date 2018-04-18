'use strict'

function loadJSON(callback) {
  var xobj = new XMLHttpRequest()
  xobj.overrideMimeType("appliation/json")
  xobj.open('GET', 'pages/data/colleges.json', true)
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    callback(xobj.responseText)
    }
  }
  xobj.send(null)
}
function init() {
  loadJSON(function(response) {
    let answer = ""
    let actualJSON = JSON.parse(response)
    let dataShown = document.getElementById('UL')
    for( let x=0; x<actualJSON.colleges.length; x++) {
      answer += '<li id="">' + actualJSON.colleges[x].name + '</li>'
    }
    dataShown.innerHTML = answer
  })
}

init() // run above code
