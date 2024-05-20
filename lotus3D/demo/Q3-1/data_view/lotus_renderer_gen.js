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

var col_A = ["yes, i would like to use ai in the future","to help with research n the health field","to help clean my bathroom and mow the grass","to determine how weather will impact society","research only and not for anything else","maybe just on small items. not on big technical","l would use it for research purposes, especially family history","in every aspect where possible in safe way","i would like to use it to brainstom","i probably would use it on everyday things","heavily regulated and verified.","for tasks around the house/in the job","each industry needs to determine how it can be used in their field.  I think as long as we cite the use of AI correctly, and it does not stop people from independent thinking, it can be very helpful","Yes because it help me safe time for all use of devices","Will use it for info greeting and for sakes","Well in so many ways because words alone cannot explain what i really want about it","We won‚Äôt have a voice because you will be searching information that is programmed by one sided opinions","Virtual assistants are nice, and for coding and automation","Used as a part of our everyday life helping us remain safe","Use for good and help more people .","Unsure as I haven‚Äôt put much thought into it","Treat cancer get rid of the disease and others","To solve problems earthlings cannot.","To provide good research and data.","To produce unimaginable abundance for mankind.","To predict bad upcoming historical events.","To make the world a better place.","To make money thank you have a blessed day","To make it lives much easier and more efficient","To make everyone's life easier","To lave e alone until I need t","To improve healthcare in the US","To improve current applications","To help with tasks such as writing, researching, ect","To help with solving our countries problems.","To help with questions n help with planning things","To help with projects that I'm working on","To help with medical research and to help keep neighborhoods safe:","To help with medical and surgical practices as an assistant or to help language barriers and things to help assist people rather then completely taking over a person's ability","To help with cleaning our environment","To help with all sorts of things in the medical and education. Field","To help us learn and teach about the world","To help society and to help people","To help researchers to discover new technologies","To help people with medical difficulties and to for fun virtual experiences","To help people like me with all technolgy","To help people in their everyday lives.","To help my everyday needs and learn routine","To help more without trying to make people pay","To help make our health better","To help make everyone's life so much easier","To help humans thrive and assist is","To help diagnose and treat disease and heal people.","To help better organize and arrange my life.","To help be able to create things on the spot","To help assist me anyway I need","To help as many people as possible","To do things Like do work for us write story Anything","To benefit the human employees","To be used to streamline workflow productivity","To be selective with how it is used","To be more efficient with work and task by helping to do the mundane and redundant work out of people's hand","To be helpful with certain things.","To be able to teach us and make sure that we are safe","To [perform menial tasks, to organize, as a virtual assistant","There are lots of good uses in healthcare and transportation etc.","The same way it is used now which is just to help people with simple tasks that are annoying I‚Äôd prefer it not be used take peoples jobs","The same as it is now just on computer software no actual AI robots","The only way I could do that was if you had to do a lot more work and then you would be done by yourself so you","That's what we can see  on this is what we have to do for you and your family and","Study, research, leaning, helping disabled adults and children,","Speeding up our economy by allowing us to process more information at a faster rate","Something beneficial to the majority of society","Pretty likely, it can be helpful","Only with things that are high tech like cars not social media","Only has an assistant not has being in control","Only for science and teaching the dangers of algorithms","Only for school and work assignments.","Only for research purposes. AI should only be used as help, not as a solution","Online only and on Facebook. Aka meta","Once there are more safety procedures in place","Nothing really its great  i dont really care to see them in the future","Not to much about it at all negative","Not to kill everyone or selling information","Not to be used is more like it","Not sure. What would be the use of this","Not sure but I'm sure it is the future to some degree","Not sure I hope it's good use tho","Not at all!  I wish it had never been invited me","Not at all get rid of it. Creepy","Not at all   Too much technology is scary to me.","No differently than I am now really","Music wise I'm for it.. I feel. If it shouldn't be in the workforce us humans have a real life","Mostly for research or anything people need help with","More In depth features and options","Minial uses on things like street lights and simple things that no human intervention  is effected.","Medical field to help detect health concerns and risks and diagnosis","Makes life a lot easier More efficient work is done things go more smoothly","Machines with artificioal intelligence will be able to write best seller","Just like a better search engine and nothing further","I‚Äôm not sure .., there are so man possibilities","I‚Äôd rather be in charge than a computer.","It's better if it could be used only when asked","It's already replacing forms of filing data and some assistance jobs and is an everyday calendar","It would be used to generate things and I feel like it gonna take over","It should be only in controlled situations","It should  be used more in every  part on the apps for shopping  and make it easier  for companies  and consumers  as well","It doesn‚Äôt matter, as long as it benefits the world.","It could be helpful in many everyday situations.. like answering simple questions or requests.. possible even doing mundane tasks.","In the Medical and health industry","In helping in schools and help with spelling","In every way possible as it will have a positive impact","Ideas or answers about things to do","I'm not sure.  In technology ot can be used","I'm not sure really. It's still has too many unknown variables.","I'd like to see it actually help humanity and not cripple them.","I wouldn‚Äôt like for it to be used at all","I would use it for repetitive tasks.","I would use it for answers to difficult questions","I would prefer it be banned before it gets misused","I would not like it to be used","I would not like it to be super advanced in the future","I would love it to be used in the future, but not take all of our jobs.","I would like to use it first house chores","I would like to see AI make life easier and safer for everyone without eliminating all of their employment","I would like it to not be used.","I would like it to be used to help end diseases, and other medical uses.","I would like it to be used to assist in gathering data for research.","I would like it to be used for insurance purposes","I would like it to be use for future research to map out uner the oceans","I would like it to be eliminated.","I would like for it to be used to help solve crimes.","I would like for it to be used in shopping and also in fast food","I would like for ai to be destroyed and put in a box in the middle of the ocean","I would like Al to be used as advanced and be used in other machines that would service people.","I would like AI to be used to make things easier to do in the future","I would like AI to be used as a secretary that will just follow orders.","I would be okay if it assisted me in doing some research.","I will love to use everytime and all time in the future always","I want it to be used so that people don't have to be wage slaves anymore. Robots could work for all humanity.","I use AI currently. I wish i could do anything i want with it. For instance, there are certain stat lines that are not popular that i look at wheb i bet, they have a blocker on that.","I think the sky is the limit we can use it for things we don‚Äôt even know yet","I think it would help with my job. I think it's beneficial","I think it would be beneficial for different educational tools for children","I think ai should be use for military purposes","I really don‚Äôt know to be honest about the situation","I really don‚Äôt know but I‚Äôm interested","I really don‚Äôt know at point an time","I really don‚Äôt believe in AI and robots, but the life is becoming futuristic","I really can't answer this I'm not sure","I love to be the best and love the rest","I like it to be used for entertainment right now","I have to learn about it first to make a decision.","I have no preference for this at this time today","I have no opinion on this particular topic. But thanks","I have no idea, because I really don‚Äôt understand it at all!","I have no idea how AI should be used in the future.","I have no clue because I don't know what it is or what it's about!","I guess to benefit everyday life","I don‚Äôt want it to be I want all of it festroyed","I don‚Äôt know what to say about this one because it‚Äôs not my favorite one yet","I don‚Äôt know what I did wrong with ai","I don‚Äôt know anything about it, so I am unsure","I don't mind a I being used on apps when you have a certain question about a product and it knows how to answer standard questions but if it doesn't know how to answer your question, then it needs to be put forward to a person.","I don't know what will happen in the future","I don't know what it means at all","I don't know what I would like to be used for in the future cuz I don't know anything about it","I don't know how I would use it","I don't know at all. Like I said who controls it and how does it know everything.","I appreciate the concept of the content provided by the company services and","I am not sure it should be ok as it","I absolutely going to use this in the future I‚Äôm using it now.","Help with questions and ideas it seems very helpful","Help by writing to people. Help make what you're trying to say sound better.","Healthcare advancements would likely be the best way to go because people and AI should come together to evolve a new way of living.","For the improvement of businesses and consumer products only.","For the greater good of humanity","For the emotionally draining jobs so humans have more time for fun and important stuff","For suggestions on improving technology. I would still want humans to have the final say.","For some things I agree with but I don't trust it really.","For research only should not take jobs away","For medical research and furthering education","For medical purposes and not much of anything else","For general information gathering, for creative projects.","For anything good. To be helpful.","Fit school maybe to help research for essays and projects","Fast food restaurants, auto Zones,","Don‚Äôt know anything about AI and don‚Äôt want to","Don't know much about it but interesting to know about it","Certito not to be used in a way it invades human privacy.","Can be used for research to help especially in medical research","Because al is good for my future husband has been good","Asking questions I don't know or understand","As a very useful tool to help others","As a tool for furthering the capabilities of humanity.","As a information source to get a second opinion","An innovating quality production of technology cusomers intrest","Ai prime hd supply and demand to Allah yakiyaye my daddy na na song.","AI assistance is great and beneficial","A more technological advanced and longer living world",]

var label_A = "How would you like AI to be used in the future?"

var col_B = ["7","3","1","6","2","6","2","6","6","1","6","1","6","1","2","7","6","1","1","6","7","3","6","2","6","6","6","6","1","1","7","3","6","1","6","1","1","3","3","6","1","4","1","2","3","1","1","1","1","3","1","1","3","1","1","1","1","1","6","1","6","1","1","4","1","3","1","6","7","7","2","6","6","6","6","1","4","4","2","6","6","7","7","6","7","7","7","7","7","7","7","7","6","2","6","6","3","1","6","2","7","7","6","1","6","6","5","6","1","3","4","6","2","6","7","6","7","1","2","7","7","7","6","1","1","7","3","2","6","2","7","6","5","7","6","1","1","2","6","6","6","6","1","4","6","7","7","7","7","7","7","5","7","7","7","7","7","7","1","7","7","7","7","6","7","7","7","7","7","7","7","6","1","1","3","6","6","6","6","7","2","3","3","2","6","4","5","7","7","6","3","7","2","1","6","2","6","7","1","6",]

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

      if (answer_value == 1) {  // trend can also be specified as a variable in index.html [uptrend]
        
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