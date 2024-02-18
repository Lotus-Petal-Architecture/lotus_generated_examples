//Copyright 2024 by Elizabeth Gadwa

var camera, scene, raycaster, renderer, parentTransform
var mouse = new THREE.Vector2()
var r = 100,
  dot = 0

  var scene = new THREE.Scene()

  var camera = new THREE.PerspectiveCamera(  
    7.7, // This variable controls size -- the lower the value the larger the rendering. Original value was 27.
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
  var time = '15:03 EST'
var date = '2024/02/08'
var symbols = ['PLTR','TSLA','PYPL','F','DIS','T','AMD','NVDA','AMZN','PLUG','AAPL','TSM','BABA','CLSK','NIO','BAC','AAL','RIVN','INTC','PFE','SHOP','UBER','META','RBLX','VZ','WBD','GOOG','MSFT','GM','NET','CHPT','COIN','FCEL','RUN','APPS','CSCO','MU','AMC','WFC','SQ','CVNA','JNJ','HOOD','SBUX','NEE','SNOW','DAL','GPS','NOVA','UAL','ROKU','NKE','M','KR','GEN','LLY','JPM','GSK','KSS','RDFN','TGTX','X','IBM','CTVA','CRM','DASH','WDC','AXP','MNST','NFLX','ABNB','MRNA','BAYRY','SPOT','CELH','UPS','CRWD','GLW','UNH','TGT','JWN','SNY','DOCU','TWLO','BIDU','SEDG','HD','BYND','Z','FDX','DHI','COST','ADBE','PGR','TMO','BBY','STX','LULU','CAT','FSLR','COF','MDB','AKAM','VRTX','KMX','AAP','ROST','OKTA','BNGO','SYK','LKQ','WM','NOW','HP','AER','CPRX','BLDR','CROX','ELV','SOLO','DOCN','BJ','ARLO','BYDDY','SAVA','ADSK','SONY','BEP','GOGO','BIIB','BEAM','PACK','AVPT','DUOL','GNK','EXFY','BIRK','MTH','SPT','BECN','TM','CAR','FMX','DFH','FOSL','SAIA','SKLZ','ADES','FLGT','HIBB',]
var price = ['24.938','189.8901','56.065','12.765','110.8699','16.805','169.5428','699.84','170.2101','4.2066','188.21','132.95','70.925','10.215','5.875','33.175','14.925','15.985','42.715','27.565','87.5399','71.555','469.33','44.414','39.7699','9.885','146.985','413.57','38.635','89.63','2.095','131.89','1.2562','15.68','3.7997','49.72','85.205','4.13','48.345','69.13','52.34','156.22','11.195','96.325','56.055','223.178','40.3981','20.207','11.03','41.34','95.5','103.735','19.25','45.215','20.84','733.97','174.69','41.815','27.135','8.355','14.725','46.355','183.93','53.135','291.49','118.1993','57.335','210.2499','56.145','558.775','150.3','96.5','7.505','240.33','58.415','147.6','322.915','31.6999','519.58','147.44','19.195','46.305','51.48','70.535','103.42','76.4','363.405','6.49','56.965','241.55','143.685','722.81','614.64','182.85','550.12','75.39','87.5531','473.79','323.685','143.865','135.05','475.82','126.95','422.53','72.78','64.45','145.605','84.77','1.1899','338.465','47.545','189.49','798.44','38.69','77.31','13.45','184.6273','103.52','502.89','0.2532','36.76','66.86','8.695','47.0','25.37','260.87','96.1363','24.49','9.924','239.427','28.285','4.365','7.94','184.68','17.915','1.675','48.36','154.28','62.735','86.23','225.56','166.365','139.0801','31.57','1.065','546.37','6.26','3.36','25.18','69.06',]
var change = ['1.3379993','2.3101044','-7.175003','-0.034999847','11.729904','-0.5249996','-1.3972015','-1.1499634','-0.3199005','-0.013399601','-1.199997','7.9699936','-2.7149963','0.90499973','0.0149998665','-0.005001068','0.015000343','0.8149996','-0.06499863','0.005001068','2.3699036','0.9049988','-0.26000977','-0.3260002','-0.6500969','0.13500023','0.30500793','-0.47998047','-0.0850029','6.279999','0.14499998','9.82','0.006199956','0.3699999','-1.2402999','-0.049999237','0.035003662','0.19000006','-0.13499832','0.8199997','4.25','-1.7599945','0.1949997','1.5849991','-0.32500076','4.947998','0.18810272','0.3369999','0.67999935','0.060001373','1.0100021','-0.055000305','0.7099991','0.5950012','-0.069999695','8.589966','-0.73999023','-0.205002','1.0750008','0.09499931','0.3550005','0.28499985','1.8499908','-0.9350014','2.649994','3.8693008','-0.60499954','1.1698914','-0.31499863','-0.5249634','2.75','-2.800003','-0.2750001','-0.5','0.64500046','0.3600006','5.13501','-0.09010124','0.19000244','0.7100067','0.7649994','-0.61499786','0.16999817','0.8250046','-1.8800049','0.22000122','0.71499634','0.27999973','-0.28499985','-0.580002','-0.95500183','3.0299683','-1.2099609','0.68000793','-2.19','-0.09000397','0.79309845','16.040009','0.09500122','-1.5950012','1.0800018','18.429993','1.3799973','3.4500122','0.47999573','-1.6399994','2.3549957','1.2099991','0.069900036','-4.255005','-0.025001526','-0.48999023','8.049988','-0.15000153','-0.6399994','0.09999943','3.7173004','3.5499954','5.100006','-0.008700013','1.2399979','0.8499985','0.21500015','0.0099983215','-0.02999878','2.4400024','-1.123703','-0.40999985','-0.006000519','-1.1129913','0.71500015','0.11499977','0.099999905','2.2099915','-0.01499939','0.06499994','2.4500008','0.8500061','1.9949989','1.3700027','2.5099945','-0.04499817','-0.309906','0.35','-0.004999995','10.349976','0.5100002','0.099999905','-0.03999901','2.3199997',]
var open = ['23.96','189.0','57.98','12.87','107.08','17.3','170.33','700.74','169.65','4.21','189.385','127.0','71.885','9.93','5.82','33.05','14.98','15.2','42.72','27.56','85.03','71.93','468.32','45.48','40.3','9.87','146.97','414.05','38.84','83.75','1.96','127.218','1.23','15.26','4.22','49.9','85.51','3.98','48.18','67.91','48.32','157.34','11.05','95.1','56.42','219.3','40.3','19.95','10.23','41.21','95.75','104.43','18.62','44.51','20.91','728.32','175.0','41.82','26.16','8.23','14.32','46.07','182.63','53.99','289.3','116.32','57.57','208.25','56.49','560.55','149.25','99.0','7.55','238.0','57.97','146.8','316.71','31.71','520.63','147.01','18.65','46.11','51.47','69.71','104.62','75.83','362.86','6.34','57.25','241.9','145.03','723.89','615.85','182.21','552.2','75.56','86.7','463.27','324.67','146.12','133.89','457.85','125.09','420.28','72.01','64.81','144.98','83.34','1.12','340.72','47.29','190.18','792.0','38.72','77.67','13.32','182.44','100.97','500.35','0.26','35.34','66.15','8.53','47.24','25.38','258.08','96.17','24.67','9.89','239.89','27.55','4.23','7.78','184.12','17.75','1.61','46.04','153.92','60.15','87.75','225.32','164.64','138.95','31.22','1.07','535.75','5.76','3.28','25.02','67.0',]
var high = ['25.06','191.6171','58.59','12.9','112.77','17.3','172.17','707.94','171.42','4.29','189.535','133.68','72.059','10.3916','5.88','33.275','14.99','16.0112','42.97','27.69','91.4362','73.04','470.59','47.11','40.37','9.97','147.61','415.56','38.9399','89.7764','2.1','133.0499','1.27','15.745','4.2601','49.99','86.0346','4.14','48.5','69.42','52.555','157.34','11.34','96.341','56.38','226.29','40.4','20.46','11.175','41.35','98.54','104.96','19.305','45.2913','20.96','740.77','175.3058','41.885','27.55','8.52','14.815','46.38','184.1589','54.33','293.11','119.3','57.98','211.16','56.53','563.7','150.34','99.0','7.6','244.29','59.05','147.8499','323.929','31.8093','522.065','149.07','19.2','46.35','52.32','71.14','104.9','77.56','365.65','6.5066','57.49','243.34','145.89','728.12','621.3394','184.2468','552.86','75.94','88.26','476.62','326.43','146.13','135.5233','477.095','127.335','424.4761','73.201','65.28','145.87','85.475','1.2','341.91','47.62','190.44','800.3','39.12','77.96','13.495','185.26','103.64','503.98','0.2625','36.78','67.545','8.81','47.27','26.19','262.9175','96.46','24.71','10.02','240.54','28.42','4.38','7.98','187.97','17.93','1.7','48.74','154.86','63.2','87.75','225.95','166.48','139.48','31.755','1.075','550.11','6.26','3.5489','25.4','69.09',]
var low = ['23.32','185.58','55.88','12.54','106.8','16.75','168.6','694.55','168.88','4.1','187.35','126.11','70.65','9.53','5.72','32.8001','14.605','15.15','42.33','27.4103','84.9','71.195','465.03','44.05','39.44','9.65','146.42','412.53','38.42','82.9','1.94','125.81','1.21','15.09','3.72','49.55','84.53','3.95','48.055','66.86','47.5413','155.31','11.0','93.925','55.385','218.31','39.55','19.84','10.25','40.44','93.09','103.045','18.58','44.49','20.61','725.97','173.57','41.445','25.79','8.12','13.97','45.91','181.49','52.65','288.98','115.3168','57.02','207.95','56.005','555.74','148.07','96.01','7.5','237.6508','57.506','145.855','314.0296','31.53','517.2834','146.85','18.495','46.0','50.9401','69.26','102.87','74.26','361.6485','6.24','56.47','240.415','142.99','720.66','612.51','181.89','541.49','75.04','85.7909','460.975','321.4201','142.0','132.5','457.75','125.055','417.14','71.9','63.79','144.85','82.705','1.12','337.08','47.125','188.56','790.84','38.27','76.23','13.1161','180.28','99.36','499.99','0.2401','35.0101','66.23','8.535','46.76','24.9','258.02','95.47','23.975','9.7801','237.535','27.35','4.115','7.78','182.54','17.74','1.61','45.7','152.18','60.0','84.86','223.825','161.6','138.13','30.625','1.05','533.865','5.76','3.2114','24.9667','67.0',]
var curr_price = ['24.938','189.8901','56.065','12.765','110.8699','16.805','169.5428','699.84','170.2101','4.2066','188.21','132.95','70.925','10.215','5.875','33.175','14.925','15.985','42.715','27.565','87.5399','71.555','469.33','44.414','39.7699','9.885','146.985','413.57','38.635','89.63','2.095','131.89','1.2562','15.68','3.7997','49.72','85.205','4.13','48.345','69.13','52.34','156.22','11.195','96.325','56.055','223.178','40.3981','20.207','11.03','41.34','95.5','103.735','19.25','45.215','20.84','733.97','174.69','41.815','27.135','8.355','14.725','46.355','183.93','53.135','291.49','118.1993','57.335','210.2499','56.145','558.775','150.3','96.5','7.505','240.33','58.415','147.6','322.915','31.6999','519.58','147.44','19.195','46.305','51.48','70.535','103.42','76.4','363.405','6.49','56.965','241.55','143.685','722.81','614.64','182.85','550.12','75.39','87.5531','473.79','323.685','143.865','135.05','475.82','126.95','422.53','72.78','64.45','145.605','84.77','1.1899','338.465','47.545','189.49','798.44','38.69','77.31','13.45','184.6273','103.52','502.89','0.2532','36.76','66.86','8.695','47.0','25.37','260.87','96.1363','24.49','9.924','239.427','28.285','4.365','7.94','184.68','17.915','1.675','48.36','154.28','62.735','86.23','225.56','166.365','139.0801','31.57','1.065','546.37','6.26','3.36','25.18','69.06',]
var vol = ['181886940','73360603','56208493','53662265','51382368','42243903','36210788','34620474','29617078','28224356','27349416','26190402','26122395','25495361','25189941','24714619','20870196','19814107','18882134','18717551','17509975','17200447','13805371','13557843','13204045','12746481','12643024','12393018','10461540','9510922','9320683','9313244','8990807','8826869','8358316','8297769','8284722','8222656','7457142','6222585','5956581','5919130','5705269','5685740','5256900','4962181','4941507','4793074','4756675','4739386','4647292','4485153','3691866','3582416','3446149','3408918','3204098','3005923','2992543','2989420','2987119','2952032','2877977','2731470','2712332','2709690','2497358','2436976','2325791','2240562','2162179','2103088','2098288','2026509','2020558','1922680','1922378','1922094','1879223','1872704','1839483','1826111','1781759','1471508','1373871','1339144','1305957','1290002','1272679','1209245','1180369','1172783','1091436','1040284','1033986','1026473','1013000','1004765','988700','982383','965347','959854','923254','871195','856308','823667','805718','769229','764766','706175','686488','668268','633029','621182','602925','597038','589198','574914','527566','525667','443438','435545','430489','428107','425515','414485','405590','389654','377346','371942','360261','330648','327276','317179','302679','296419','286352','257453','244420','215567','203711','189760','180284','174903','172451','169432','157704','100969','77806','60948',]
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
      '<br><b>High:</b> ' + '$' + high[l] + '&nbsp; &nbsp;' + '<b>Low:</b>' + '$' + '&nbsp; &nbsp;' + low[l] 
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