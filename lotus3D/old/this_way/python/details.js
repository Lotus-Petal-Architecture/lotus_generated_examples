
// -- details pane

  function showPointer () {
    document.body.style.cursor = 'pointer'
  }

  function nowPlaying (k) {
      l = link_order.indexOf(k)

      //volume = col_G[l]    
      //volume = (new Intl.NumberFormat().format(volume));


      if (col_A[l] == undefined)
      {
        document.getElementById('nowplaying').innerHTML =''
      }

      else

         document.getElementById('nowplaying').innerHTML =
      '<br><br><b>Symbol</b>: ' + col_A[l] + '&nbsp; &nbsp;'  
      + '<br><b>Current Price:</b> ' + '$' + col_B[l] + '&nbsp; &nbsp;'
      + '<br><b>Change Since Previous Close:</b> ' + col_C[l] + '%'
      + '<br><b>Volume:</b> ' + '$' + col_G[l] + '&nbsp; &nbsp;'
      + '<b>Open:</b> ' + '$' + col_D[l] + '&nbsp; &nbsp;' +  
      '<br><b>High:</b> ' + '$' + col_E[l] + '&nbsp; &nbsp;' + '<b>Low:</b> ' + '$'  + col_F[l] 
            }

  function datestamp (date,time) {
  document.getElementById('datestamp').innerHTML =
      '<span style = "color:#00A86B; font-weight:bold; font-size: 16px;">Trending Up</span>&nbsp; '+ active_links.length + ' links<br>' +
      '<span style = "color:#fa8072; font-weight:bold; font-size: 16px;">Trending Down</span>&nbsp; '+ active_links2.length + ' links<br>' +
      time + " &nbsp;" + date
      }


  //datestamp(date,time); 


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
      var URL = "https://finance.yahoo.com/quote/" + col_A[l]
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