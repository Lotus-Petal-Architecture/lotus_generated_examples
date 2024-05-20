//Copyright 2024 by Lotus.fm LLC

var camera, scene, raycaster, renderer, parentTransform
var mouse = new THREE.Vector2()
var r = 100,
  dot = 0

  var scene = new THREE.Scene()

  var camera = new THREE.PerspectiveCamera(  
    7.5, // This variable controls size -- the lower the value the larger the rendering. Original value was 27.
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  var container = document.getElementById('container')

  containerWidth = window.innerWidth
  containerHeight = window.innerHeight

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  var controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.minDistance = 0
  controls.maxDistance = 100
  controls.maxPolarAngle = Math.PI / 2
  controls.addEventListener( 'change', () => renderer.render( scene, camera ) );


  var light = new THREE.PointLight(0xffffff)
  light.position.set(-100, 200, 100)
  scene.add(light)

  var group
  group = new THREE.Group()
  group.position.set( 0, -.08, -5);
  group.rotation.set(1,0,0);
  scene.add(group)

  var link_order_length = 0
  var link_order = [] // list of all link values in the module, with k values assigned to each index position
  var k_values = [] // list of all k values generated for corresponding module chart lines
  var active_links = [] //index values of active links
  var active_links2 = [] //index values of active links


//dynamically generated code is inserted here

var time = ' '
var date = ' '

var col_A = ["used to proliferate incorrect information","that its spying and the info is incorrect and will take away work from people","that it will invade my privacy","taking over my device and the way AI can become real","safety, private data at work and at home","replacing the human factor in the long run","nothing concern me about ai so yeah","my concerns are basically security","leaking info that is confidential","it being weponised for military use","i fear it will replace humans in jobs","data security, bias, privacy issues","bias in the results since a hyman is not overseeing","Worried AI will take over identities","What are the greatest concerns? It would be hacks and other malfunctions.","Using it to scam people out of identity or money","Too powerful and can be used for deep fake","Too much dependent on using it rather then looking for stuff yourself.","To be improved to be very perfect like human","They will be taking jobs away. Many people will lose jobs","They help improve with your work","They are smarter than humans it's a scary thought","The some people might use it to commit crimes","The software's lack of ability to interpret and or explain the decisions or result it does not provide can generate distrust","The safety and concerns for protecting my personal information.","The privacy of my information and data concerns me with AI","The potential for misuse and making people more lazy and stupid","The medical records are on my phone","The fact that it could overtake humans and destroy us. Or that u can be scammed easier.","The effects of glitches it not running properly","The deep fakes and misinformation","The company brand terms of service","The ability to pretend or take another‚Äôs image and likeness","That they will take over human capabilities in all aspects","That they are to intelligent to","That the robots will take over the world and hurt people","That the children of the world will use it in lieu of their own intelligence.","That some people might use it to commit crimes","That personal information is protected","That one day there will be no jobs for no one","That it will take over the world and we won't be able to stop it.","That it will take away more jobs making everything so automated l.","That it will take away jobs that people need.","That it will put people out of their jobs and on the other hand that it is limited.","That it will get too smart and turn on its creator","That it will cause misinformation.  It will be used too much and will really dampen the impact of certain things, like research papers.","That it will be used in negative ways","That it will be used by scammers and those with nefarious reasons","That it replace all the workers with robots and we lose control of everything","That it interfere with jobs of humans","That humans will become even worse at critical thinking than we already are","That cars and such will not be controlled by people","That I won't know how to use it and it is frustrating","That Al will be taking humans jobs in the future","That AI is going to take over the world","Talking over the world because it really how I feel","Taking over everything and what harm it can cause.","Taking away the fun jobs and stealing art content","Take over for humans not at all going forward","Spyware and sometimes it is not accurate","Some answers may not be accurate.","Selling my information and spam calls every second","Security safety for the future of the world","Security is my main concern as well as privacy","Security concerns I don‚Äôt want my personal information sold shared or otherwise made available without my knowledge","Security and loss of jobs and constant surveillance","Safety and security in using it and the ramifications.","Robots taking over the world. And it ending.","Robotic mistakes might happen.","Replacing jobs like writers so that everything just becomes generic.","Replacing humans. No sympathy. Can be hacked","Regulation. It's very important.","Providing inaccurate results, relying too much on  AI and not doing own research.","Providing false information. And creating images that are not disclosed as AI","Privacy problems and it's to new it seems to know how negatively it can affect me","Privacy of personal information","Privacy and security issues concern me the mist","Privacy and ownership concerns","Peoples‚Äô fears and concerns that are not true.","People using it to do bad things.AI becoming self aware.","Oh how it functions faster that most things","Obviously that it would take over the Internet and then the world and universe.","Nothing really just be careful","Nothing really concerns me.  About Al it‚Äôs greay so far","Nothing in particular I think it will be great","Nothing at all I love the money","Nothing I have no concerns it seems great so far","Not working normal when i need it assistance it will be very painful","Not sure I have no yet*still figuring it out. I'll know soon","None really. Has I might use grocery shopping.","None none none none none none jone onejoej joej oke joej joej","None at all not to much concerns","None I don't know about AI at all","No regulation seems to be the issue. In the wrong hands who knows.","No concerns about AI. To be very honest","N/a don‚Äôt care to much about it","My greatest concerns when it comes to AI is that it‚Äôs gonna take over the worlds","My greatest concerns is identity theft","My greatest concerns about AI is that it can soon be smarter then humans and that can be dangerous since they could take over the world.","My greatest concern is they may take over","My greatest concern is my personal privacy.","My greatest concern is AI stealing and selling my information","My greatest concern about AI is that they might take over one day","My concerns would be loss of jobs and people using it for bad intentions","Misinformation   artificial news being passed off as factual.","Making sure my information is safe","Major privacy concerns and facial recognition","Like my previous written answer things like the transformers walking amongst us.","Like i said, AI is clearly the future and as long as we have UBI for every American, it is great. Without Universal basic income, AI shouldn't exist.","Lack of privacy and lack of common sense and lack of freedom","Just seems scary to me in certain areas","Job replacement that's it may have a bad impact on employment situations","I‚Äôm not sure about ai at this moment","I‚Äôm not really concerned by much of it even when you all the security scares","I‚Äôm concerned that society isn‚Äôt ready for such a huge responsibility.","I‚Äôm concerned that it will make society dumber.","It‚Äôs involved in things that aren‚Äôt necessary like Instagram","It will take over the world and it will become to smart to turn off","It will take over and eliminate jobs","It will take jobs away from humans.","It will take away actual conversation with humans","It will make people lazy and also people misusing AI.","It will eliminate jobs from people.","It will change what is real or not","It will be used for fraud, scams, etc.  It could make it harder to know when you are interacting with a real person.","It seems to pop up on my device unwarranted and unwarranted and unasked","It not providing correct information.","It might do more harm than good who's in control of it?","It might be too overwhelming and too high in frequency","It could turn on us or just not comfortable with a robot","It concerns me that powerful people can use it for evil and greed.","It can take people jobs and not give accurate answers sometimes","It can be used to falsify information and can directly harm humans.","It can be dangerous if not restricted.","It being used by nefarious actors trying to hurt someone or something","It becoming smarter than humans and taking over and enslaving us","It becoming smart enough to take jobs from people","Interested In more information about this  cause don't know much","If it's real as far as facts & uphold the positive side of things","If it start acting on in own and people using it for bad stuff.","If it can be hacked or used against us","I'm concerned it will replace the workforce.","I'm afraid it will realize what a mess we are and decide that we don't deserve to live.  That is I am afraid he will tell the big main computer to fire the bomb and then we are all finished","I would say losing out on jobs for humans","I worry that people will lose their jobs due to AI.","I think misinformation and security","I see no concerns that AI will have on human society","I really don‚Äôt know much about to have any concerns","I really don‚Äôt know but I will do research first","I really don‚Äôt have any concerns at this time","I really don‚Äôt have any concerns about it right now","I honestly have no concerns with AI I feel like it‚Äôs making a lot of things easier for people","I have no specific concerns about AI","I have no preference for this at this time today","I have no concerns because I don't know what AI is!","I enjoy the concept of the content provided by the company services and services","I don‚Äôt know what to say about that because I‚Äôm not sure what to say but I‚Äôm going to try w","I don‚Äôt have any concerns it‚Äôs just a little creepy.","I don‚Äôt have any concerns at the moment","I don‚Äôt have any concerns about it, I be using it myseld","I don't trust robots all that much","I don't know what concerns I might have cuz I don't know anything about it","I don't have any concerns about AI.","I do not know enough about it yet.","I currently have no concerns about it because I have not ever tried it","I cannot trust AI nor do I feel comfortable using it.","I am concerned that someone will use it in a criminal way to harm someone else.","I am concerned that criminals will use AI to commit more crimes.","I am afraid of the security breach of information","Humans losing control and the computers take over","How it will impact students' learning. Will they stop critical thinking?","How does it remember every answer about things","Honestly, right now I don‚Äôt have any concerns","Hacking into my accounts such as social media or even my bank/money apps.","Greatest concern is a breech of my privacy","Government restrictions and Google manipulation of results.","Good and helpful for my own al that I use","Getting personal information. Getting hacked","Finding information and ideas.","Feeding false information and taking over jobs.","Everything is no good in my opinion","Don‚Äôt have a voice because everything will be divital","Don't really have any concerns","Dependency and Laziness because it's too helpful.","Data privacy and security issues and invasion of home life.","Data and privacy and AI doing things humans aren't aware or knowledgeable of.","Creating contents that are too realistic that can confuse people what is real and what is not","Content Creatives not being truthful to using AI tools/services, and, certain AI applications overtaking human jobs/occupations.","Big tech monopolies, governmental invasion of privacy, and the loss of so many jobs in the economy.","Being the end of some human jobs","Becoming too dependent on it for answers","Because  it more advance  and top technology  and we can learn and do learn alot from AI and help us alot","As i mentioned in the prior answer, it would be fraudulent activity.","Ai will take over, it shouldnot be used in everything","Ai stock market open on the rest of the week you my friend I.","Ai should have never even been built in the first place and there will be many repercussions that follow along with government cover ups that want control of whatever ai may be capable of. Si has existed for years before it became available to the public. Since 9/11","Actor losing there jobs, people‚Äôs voices being mimicked , false information","Accuracy is the main thing or becoming too smart","Accuracy and safety would be my greatest concern.","AI customer service becoming the new customer service",]

var label_A = "What are your greatest concerns about AI?"

var col_B = ["5","2","2","3","2","1","7","2","2","4","1","2","5","2","2","4","6","6","6","1","7","3","4","6","2","2","3","6","3","6","5","6","6","3","3","3","6","4","2","1","3","1","1","1","3","5","4","4","1","1","6","6","6","1","3","3","3","1","3","2","5","2","2","2","2","2","2","3","6","1","1","6","5","5","2","2","2","2","6","4","6","6","7","7","7","7","7","6","7","7","7","7","7","6","7","7","3","2","3","3","2","2","3","1","5","2","2","6","6","2","6","1","7","7","6","6","6","3","1","1","1","6","1","5","4","6","5","3","6","3","4","1","5","6","4","3","1","7","5","3","2","1","3","1","1","5","7","7","7","7","7","7","7","7","7","7","7","7","7","7","6","7","7","7","7","6","4","4","2","3","6","6","7","2","2","6","7","2","7","5","7","6","7","6","2","2","5","6","2","1","6","7","4","3","7","6","1","5","5","6",]

var label_B = "Category"

var rowcount = 200

var filter1 = col_B

//end dynamic values populated by Python generator script


  var percent_change = []
  var xmlhttp = new XMLHttpRequest()


// -------------------------------------------- //


init()
function init () {
  container = document.createElement('div')
  document.body.appendChild(container)


function calc_percent ()   //use this function if you need to show percent changes for any of the column values

{
  for (var i = 0; i < 2000; i++) { //convert change dollar values into percent
      var quote_change = col_C[i];
      var current_price =col_B[i];
      quote_change = (quote_change/(current_price-quote_change))*100
      quote_change = quote_change.toFixed(2);
      percent_change.push([quote_change]);
    }
}

//calc_percent();


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

    var f = filter1.entries();
    //var g = filter2.entries();

    for (x of f) {
      var answer =x;
      var answer_index = answer[0];
      var answer_value = answer[1];
      console.log(answer_index);
      console.log(answer_value);

      if (answer_value == 4) {  // trend can also be specified as a variable in index.html [uptrend]
        
        active_links.push(answer_index);
      }
    }

      /*else if (change_value < 0) {  // trend can also be specified as a variable in index.html [downtrend]
        change_index = quote[0]
        active_links2.push(change_index);
      }

    for (x of g) {
      var quote =x;
      var change_value = quote[1];
      var change_index = quote[0];

      if (change_value > 5) {  // trend can also be specified as a variable in index.html [uptrend]
        
        active_links2.push(change_index);
      }
       
      
    }*/
}


/*function getActiveLinks()  // how we do this for percent values
{

    var f = percent_change.entries();

    for (x of f) {
      var quote =x;
      var change_value = quote[1];
      var change_index = quote[0];

      if (change_value > uptrend) {  // specified in index.html
        
        active_links.push(change_index);
      }

      else if (change_value < downtrend) {  // specified in index.html
        change_index = quote[0]
        active_links2.push(change_index);
      }
    }
}*/

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
      var color_code = 0xbd4840;

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

      //Recommended format for numbers greater than 1,000
      //volume = col_G[l]    
      //volume = (new Intl.NumberFormat().format(volume));


      if (col_A[l] == undefined)
      {
        document.getElementById('nowplaying').innerHTML =''
      }

      else

         document.getElementById('nowplaying').innerHTML =
      '<br><br><b>' + label_A +'</b>: ' + col_A[l] + '&nbsp; &nbsp;'  
      + '<br><b>' + label_B + '</b>: ' + ' ' + col_B[l] + '&nbsp; &nbsp;'
       }

 function datestamp (date,time) {
  document.getElementById('datestamp').innerHTML =
      '<span style = "color:#bd4840; font-weight:bold; font-size: 16px;">Previous Year</span>&nbsp; '+ active_links.length + ' Item<br> categories showed price increases of 5% or more.' 
     //+ '<span style = "color:#963636; font-weight:bold; font-size: 16px;">Previous Month </span>&nbsp; '+ active_links2.length + ' links<br>' //+
      //time + " &nbsp;" + date
      }


//datestamp(date,time);


  // --- raycaster code

  raycaster = new THREE.Raycaster()

  document.addEventListener('mousemove', onDocumentMouseMove, false)
  window.addEventListener('click', onMouseClick, false)
  //window.addEventListener('resize', onWindowResize, false)
  
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
      //var URL = "https://www.bls.gov/news.release/cpi.t02.htm" + col_A[l]
      //window.open(URL, '_blank')
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