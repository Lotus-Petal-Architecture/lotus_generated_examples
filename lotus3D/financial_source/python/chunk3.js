  var percent_change = []
  var xmlhttp = new XMLHttpRequest()




  


// -------------------------------------------- //


init()
function init () {
  container = document.createElement('div')
  document.body.appendChild(container)


function calc_percent ()

{
  for (var i = 0; i < 2000; i++) { //convert change dollar values into percent
      var quote_change = change[i];
      var current_price =curr_price[i];
      quote_change = (quote_change/(current_price-quote_change))*100
      quote_change = quote_change.toFixed(2);
      percent_change.push([quote_change]);
    }
}

calc_percent();

function assignLinks () //this assigns k values to the ranked link ids, so that the highest values occur at the highest chart points for each concentric ring.

  {
  var interval = 50;

  for (var i = 0; i < 12; i++) { //link ids for the innermost petal ring
    k = (i * interval )+ 25;
    link_order.push([k]);
  }
  for (var h = 0; h < 24; h++) {
    for (var j = 0; j < 12; j++) {
      k = link_order[j];
      k1 = k - 2 - h;
      k2 = k - (-1) + h;
      link_order.push(k1);
      link_order.push(k2);
    }
  }

  var link_order_length = link_order.length;
  var stop= link_order_length + 14

  for (var i = 0; i < 14; i++) {  //link ids for the middle petal ring
    k = (i * interval )+ 25;
    k = k + 600;
    link_order.push([k]);
  }
  for (var h = 0; h < 24; h++) {
    for (var j = link_order_length; j < stop; j++) {
      k = link_order[j];
      k1 = k - 2 - h;
      k2 = k - (-1) + h;
      link_order.push(k1);
      link_order.push(k2);
    }
  }

  var link_order_length = link_order.length;
  var stop= link_order_length + 16

  for (var i = 0; i < 16; i++) {  //link ids for the outer petal ring
    k = (i * interval )+ 25;
     k = k + 1300;
    link_order.push([k]);
  }
  for (var h = 0; h < 24; h++) {
    for (var j = link_order_length; j < stop; j++) {
      k = link_order[j];
      k1 = k - 2 - h;
      k2 = k - (-1) + h;
      link_order.push(k1);
      link_order.push(k2);
    }
  }


}

assignLinks();


//console.log(link_order)
//console.log(symbols)



//Petal Constructor - draws outline of petal
function drawPetal (
    x,
    y,
    z,
    x0,
    y0,
    z0,
    x1,
    y1,
    z1,
    petalheight,
    ctrlpt,
    color_code,
  ) {
    var curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0 + petalheight, z0)
    )

    var points = curve.getPoints(50)
    var geometry = new THREE.BufferGeometry().setFromPoints(points)
    var material = new THREE.LineBasicMaterial({ color: color_code })
    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)

    var curve2 = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x0, y0 + petalheight, z0),
      new THREE.Vector3(x1, ctrlpt, z1),
      new THREE.Vector3(x1, y1, z1)
    )

    var points = curve2.getPoints(50)
    var geometry = new THREE.BufferGeometry().setFromPoints(points)
    var material = new THREE.LineBasicMaterial({ color: color_code })

    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)
  }


  //Chart Position Arc - returns points for top of chart lines
  function chartTop (
    x,
    y,
    z,
    x0,
    y0,
    z0,
    x1,
    y1,
    z1,
    petalheight,
    ctrlpt,
    color_code
  ) {
    var curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0 + petalheight, z0)
    )

    var points1 = curve.getSpacedPoints(25)
    var geometry = new THREE.BufferGeometry().setFromPoints(points1)
    var material = new THREE.LineBasicMaterial({ color: color_code })
    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)

    var curve2 = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x0, y0 + petalheight, z0),
      new THREE.Vector3(x1, ctrlpt, z1),
      new THREE.Vector3(x1, y1, z1)
    )

    var points2 = curve2.getSpacedPoints(25)
    var geometry = new THREE.BufferGeometry().setFromPoints(points2)
    var material = new THREE.LineBasicMaterial({ color: color_code })
    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)

    var points = points1.concat(points2)
    return points
  }


  //Chart Position - draws chart lines within petal arc
  function chartPosition (x, y, z, x0, y0, z0, petalheight, ctrlpt, color_code) {
    var cPcurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0, z0)
    )

    var points = cPcurve.getPoints(50)
    var geometry = new THREE.BufferGeometry().setFromPoints(points)
    var material = new THREE.LineBasicMaterial({ color: color_code })
    var curveObject = new THREE.Line(geometry, material)
    group.add(curveObject)
  }


//Invisible Spaghetti - add TubeGeometry objects that sheath chart lines representing active geometric links.
function invisibleSpaghetti (k, x, y, z, x0, y0, z0, petalheight, ctrlpt) {
    var link_curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0, z0)
    )

    var geometry = new THREE.TubeGeometry(link_curve, 8, 0.002, 4, false)  //previous values: 64, 0.004, 8,
    var material = new THREE.MeshBasicMaterial()
    var object = new THREE.Mesh(geometry, material)
    material.transparent = true
    material.opacity = 0
    object.label = k
    parentTransform.add(object)
  }

//Visible Spaghetti - visible TubeGeometry objects represent highlighted links.
function visibleSpaghetti (k, x, y, z, x0, y0, z0, petalheight, ctrlpt, color_code) {
    var link_curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(x, y, z),
      new THREE.Vector3(x, ctrlpt, z),
      new THREE.Vector3(x0, y0, z0)
    )

    var geometry = new THREE.TubeGeometry(link_curve, 16, 0.004, 4, false)  //previous values: 32, 0.004, 4,
    var material = new THREE.MeshBasicMaterial({ color: color_code })
    var object = new THREE.Mesh(geometry, material)
    material.transparent = true
    material.opacity = .7
    object.label = k
    parentTransform.add(object)
  }

//Draw Petals - draws ring of lotus petals
function drawPetalRing (segmentCount, radius, depth, color_code, chartLines, divisor){
  var geometry = new THREE.Geometry(),
  material = new THREE.LineBasicMaterial({ color: color_code })

  for (var i = 0; i <= segmentCount; i++) {
    var theta = (i / segmentCount) * Math.PI * 2
    var iota = ((i + 0.5) / segmentCount) * Math.PI * 2
    var kappa = ((i + 1) / segmentCount) * Math.PI * 2
    drawPetal(
      Math.cos(theta) * radius,
      0,
      Math.sin(theta) * radius,
      Math.cos(iota) * (radius - depth),
      0,
      Math.sin(iota) * (radius - depth),
      Math.cos(kappa) * radius,
      0,
      Math.sin(kappa) * radius,
      0.5,
      0.45,
      color_code
    )
  }
  group.add(new THREE.Line(geometry, material))


  //Draws Chart Lines 
  var geometry = new THREE.Geometry(),
    material = new THREE.LineBasicMaterial({ color: color_code })

  for (var i = 0; i < chartLines; i++) {
    var k = 0
    var theta = (i / chartLines) * Math.PI * 2
    var iota = ((i + 0.5) / chartLines) * Math.PI * 2
    var kappa = ((i + 1) / chartLines) * Math.PI * 2
    var iota0 = ((i + divisor / 2) / chartLines) * Math.PI * 2
    var kappa0 = ((i + divisor) / chartLines) * Math.PI * 2
    var modulus = i % divisor

    var base_x = Math.cos(theta) * radius
    var base_y = 0
    var base_z = Math.sin(theta) * radius
    var petalheight = 0.5
    var ctrlpt = 0 //ctrl pt for chart lines (within petal)
    var arcpt = 0.45 //ctrl pt for petal arc (outline)

    if (modulus == 0) {

//this resets chart line variables for each new petal drawn

      var chartPoint = chartTop(
        Math.cos(theta) * radius,
        0,
        Math.sin(theta) * radius,
        Math.cos(iota0) * (radius - depth),
        0,
        Math.sin(iota0) * (radius - depth),
        Math.cos(kappa0) * radius,
        base_y,
        Math.sin(kappa0) * radius,
        petalheight,
        arcpt,
        0x00769d
      )

      for (var j = 1; j <= divisor; j++) {
        k = i + j
        k=k-1
        var theta0 = (k / chartLines) * Math.PI * 2
        var base_xk = Math.cos(theta0) * radius
        var base_yk = 0
        var base_zk = Math.sin(theta0) * radius
        if (chartLines==600) {  //this ensures that each k value is unique within the lotus flower
          k=k;
          }
        if (chartLines==700) {
          k=k+600;
          }
        if (chartLines==800) {
          k=k+1300;
          }
        

        chartPosition(
          chartPoint[j].x,
          chartPoint[j].y,
          chartPoint[j].z,
          base_xk,
          base_yk,
          base_zk,
          petalheight,
          ctrlpt,
          color_code
        )

        k_values.push([    //k values each define a unique curve in 3D space. They are not associated with a specific petal ring.
          k,
          chartPoint[j].x,
          chartPoint[j].y,
          chartPoint[j].z,
          base_xk,
          base_yk,
          base_zk,
          petalheight,
          ctrlpt,
        ])
      }
    }


    geometry.vertices.push(
      new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius)
    )
  }

  parentTransform = new THREE.Object3D()
  group.add(parentTransform)
  group.add(new THREE.Line(geometry, material));

}


  // -------------------------------- // 



drawPetalRing (12, .65, .1, 0x00769d, 600, 50) //center petals

drawPetalRing (14, .85, .1, 0x0289b6, 700, 50)  //middle petals

drawPetalRing (16, 1, 0,  0x0099cc, 800, 50)  //outer petals

getActiveLinks();
addLinks();
render();

document.getElementById('nowplaying').innerHTML =
      '<br><br><br><br><br>'

function getActiveLinks()  //sorts for a given set of values from the data obtained above
{

    var f = percent_change.entries();

    for (x of f) {
      var quote =x;
      var change_value = quote[1];
      var change_index = quote[0];

      if (change_value > uptrend) {
        
        active_links.push(change_index);
        //console.log(change_value)
      }

      else if (change_value < downtrend) {
        change_index = quote[0]
        active_links2.push(change_index);
      }
    }
}

console.log (active_links.length)
console.log (active_links2.length)

function addLinks() {  //adds links for selected values

  link_order_length = link_order.length
//  console.log(link_order_length)

for (i = 0; i < link_order_length; i++) {

    if (active_links.includes(i)) {

      var k = link_order[i];
      var color_code = 0x00A86B; 

      visibleSpaghetti(
        k,
        k_values[k][1],
        k_values[k][2],
        k_values[k][3],
        k_values[k][4],
        k_values[k][5],
        k_values[k][6],
        k_values[k][7],
        k_values[k][8],
        color_code
      )
    }

    if (active_links2.includes(i)) {

      var k = link_order[i];
      var color_code = 0xfa8072;

      visibleSpaghetti(
        k,
        k_values[k][1],
        k_values[k][2],
        k_values[k][3],
        k_values[k][4],
        k_values[k][5],
        k_values[k][6],
        k_values[k][7],
        k_values[k][8],
        color_code
      )
    }

    else

    var k = link_order[i];       

        invisibleSpaghetti(
        k,
        k_values[k][1],
        k_values[k][2],
        k_values[k][3],
        k_values[k][4],
        k_values[k][5],
        k_values[k][6],
        k_values[k][7],
        k_values[k][8],
        color_code
      )

  }
}


  // -- quote details code

  function showPointer () {
    document.body.style.cursor = 'pointer'
  }

  function nowPlaying (k) {
      l = link_order.indexOf(k)

      volume = vol[l]
      volume = (new Intl.NumberFormat().format(volume));


      if (symbols[l] == undefined)
      {
        document.getElementById('nowplaying').innerHTML =''
      }

      else

         document.getElementById('nowplaying').innerHTML =
      '<br><br><b>Symbol</b>: ' + symbols[l] + '&nbsp; &nbsp;'  
      + '<br><b>Current Price:</b> ' + '$' + price[l] + '&nbsp; &nbsp;'
      + '<br><b>Change Since Previous Close:</b> ' + percent_change[l] + '%'
      + '<br><b>Volume:</b> ' + '$' + volume + '&nbsp; &nbsp;'
      + '<b>Open:</b> ' + '$' + open[l] + '&nbsp; &nbsp;' +  
      '<br><b>High:</b> ' + '$' + high[l] + '&nbsp; &nbsp;' + '<b>Low:</b> ' + '$'  + low[l]
      /* + '<span style="color:#0099cc;">' + quote_change + '%</span>'
*/

            }

  function datestamp (date,time) {
  document.getElementById('datestamp').innerHTML =
      '<span style = "color:#00A86B; font-weight:bold; font-size: 16px;">Trending Up</span>&nbsp; '+ active_links.length + ' links<br>' +
      '<span style = "color:#fa8072; font-weight:bold; font-size: 16px;">Trending Down</span>&nbsp; '+ active_links2.length + ' links<br>' +
      time + " &nbsp;" + date
      }


  datestamp(date,time); 


  // --- raycaster code

  raycaster = new THREE.Raycaster()

  document.addEventListener('mousemove', onDocumentMouseMove, false)
  window.addEventListener('click', onMouseClick, false)
  window.addEventListener('resize', onWindowResize, false)
  
  function onDocumentMouseMove (event) {
    event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)

    var intersects = raycaster.intersectObjects(parentTransform.children, true)
    
    if (intersects.length > 0) {
      showPointer()
    }
    else {
      document.body.style.cursor = 'default'
      document.getElementById('nowplaying').innerHTML =
      '<br><br>'
    }

    for (var i = 0; i < intersects.length; i++) {
      var intersection = intersects[i],
      obj = intersection.object
      k = obj.label
      l = link_order.indexOf(k)   //connects the k value -- position on lotus petal graph -- to ID for link value
      nowPlaying(k)

      /*console.log(symbols[l])
      console.log(current_price[l])
      console.log(unit_prices[l])
      console.log(sales_change_30d[l])
      console.log(active_links)
      console.log(active_links2)*/
    }
  }


  function onMouseClick (event) {
    //event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    var intersects = raycaster.intersectObjects(parentTransform.children, true)
    for (var i = 0; i < intersects.length; i++) {
      var intersection = intersects[i],
      obj = intersection.object
      k = obj.label
      l = link_order.indexOf(k)   //connects the k value -- position on lotus petal graph -- to ID for link value
      var URL = "https://finance.yahoo.com/quote/" + symbols[l]
      //console.log(symbols[l])
      //console.log(quote_change_1h[l])
      window.open(URL, '_blank')
    }
  }

  function onWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  //animate and render

  camera.position.z = 5

  function animate () {
    requestAnimationFrame(animate)
    group.rotation.x += 0.0
    group.rotation.y += 0.0
  }
  animate()
  render()

  function render () {
    dot += 0
    renderer.render(scene, camera)
    renderer.setClearColor(0xffffff, 1)
  }
}

//  ---- reference code ----- //  


//  ---- reference code ----- //  
