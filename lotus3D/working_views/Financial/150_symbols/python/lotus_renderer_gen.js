//Copyright 2022 by Lotus.fm LLC, 2000_view

var camera, scene, raycaster, renderer, parentTransform
var mouse = new THREE.Vector2()
var r = 100,
  dot = 0

  var scene = new THREE.Scene()

  var camera = new THREE.PerspectiveCamera(  
    12, // This variable controls size -- the lower the value the larger the rendering. Original value was 27.
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
  var time = '16:00 EST'
var date = '2023/12/29'
var symbols = ['TSLA','NIO','AMD','AAPL','F','NVDA','PLTR','AMZN','CLSK','PFE','INTC','T','AAL','BAC','UBER','RIVN','WBD','PLUG','COIN','MSFT','PYPL','META','GOOG','AMC','HOOD','FCEL','CHPT','CSCO','VZ','GM','SHOP','RUN','MU','WFC','SQ','DIS','DAL','RBLX','JPM','SBUX','CVNA','NKE','UAL','RDFN','MRNA','NEE','M','TSM','GPS','ROKU','TGTX','MNST','HD','BYND','CRM','X','SNOW','KSS','KR','JWN','Z','ABNB','GLW','JNJ','NFLX','BIDU','CELH','IBM','DASH','DOCU','TGT','BNGO','UPS','CTVA','GEN','ROST','LLY','NET','FDX','AXP','ADBE','COST','CRWD','BBY','TWLO','SEDG','PGR','APPS','GSK','DHI','KMX','AAP','COF','LKQ','BEAM','UNH','STX','CROX','HP','SPOT','OKTA','SYK','SOLO','MDB','FSLR','ARLO','NOW','BJ','LULU','GOGO','BLDR','SAVA','DOCN','BAYRY','CPRX','TMO','BIIB','AKAM','FOSL','VRTX','ADSK','AER','GNK','SNY','ELV','AVPT','BECN','BIRK','EXFY','DFH','DUOL','PAR','PACK','SPT','SONY','BEP','TM','SKLZ','FMX','ADES','CMBM','FLGT','SAIA','MTH','HIBB','CLLS','VWDRY','XPEL','EXPR','NPO',]
var price = ['248.48','9.07','147.41','192.53','12.19','495.22','17.17','151.94','11.03','28.79','50.25','16.78','13.74','33.67','61.57','23.46','11.38','4.5','173.92','376.04','61.41','353.96','140.93','6.12','12.74','1.6','2.34','50.52','37.7','35.92','77.9','19.63','85.34','49.22','77.35','90.29','40.23','45.72','170.1','96.01','52.94','108.57','41.26','10.32','99.45','60.74','20.12','104.0','20.91','91.66','17.08','57.61','346.55','8.9','263.14','48.65','199.0','28.68','45.71','18.45','57.86','136.14','30.45','156.74','486.88','119.09','54.52','163.55','98.89','59.45','142.42','1.89','157.23','47.92','22.82','138.39','582.92','83.26','252.97','187.34','596.6','660.08','255.32','78.28','75.87','93.6','159.28','6.86','37.06','151.98','76.74','61.03','131.12','47.79','27.22','526.47','85.37','93.41','36.22','187.91','90.53','299.46','0.3354','408.85','172.28','9.52','706.49','66.66','511.29','10.13','166.94','22.51','36.69','9.23','16.81','530.79','258.77','118.35','1.46','406.89','243.48','74.32','16.59','49.73','471.56','8.21','87.02','48.73','2.47','35.53','226.85','43.54','5.82','61.44','94.69','26.28','183.38','6.24','130.35','2.98','6.0','28.91','438.22','174.2','72.02','3.08','10.49','53.85','8.37','156.74',]
var change = ['-4.699997','-0.360001','-1.3499908','-1.050003','-0.150001','0.0','-0.389999','-1.4400024','-2.08','0.0','-0.13999939','0.0400009','-0.23999977','-0.210003','-1.57','-0.08000183','-0.30999947','-0.21000004','-12.440002','0.76000977','-1.670002','-4.360016','-0.3500061','-0.0900002','-0.44000053','-0.06999993','-0.0800002','0.040000916','0.209999','-0.280003','-1.21','-0.69000053','-0.5450058','-0.259998','-2.16','-0.110001','-0.400002','-0.709999','-0.199997','0.08000183','-1.97','-0.25','-0.7100029','-0.1800003','0.65999603','-0.279999','-0.23','-0.699997','-0.190001','-2.4399948','-0.5400009','0.19000244','-0.809998','0.17999935','-2.43997','-0.00999832','-2.23','-0.639999','0.540001','-0.41','-0.98999786','-0.8600006','-0.179998','0.160004','-3.630005','1.2699966','-0.9300003','-0.199997','-1.3199997','-0.75','-0.119995','-0.16999996','-0.0800018','-0.170002','-0.15999985','0.19000244','2.07001','-1.42','-0.610001','-0.460007','1.079956','-3.0199585','-0.80999756','-0.18','-1.3','-3.130005','0.940002','-0.19000006','-0.0299988','0.0','-1.1','-0.460003','-0.900009','-0.099998474','-2.210001','1.56995','-1.4199982','-1.859993','-0.139999','-0.839996','-0.80000305','0.339996','-0.01610002','-8.22998','-0.94000244','-0.19','4.02997','-0.379997','2.0700073','0.09000015','-1.72','-0.27000046','-1.35','0.0','-0.3900013','-2.15002','-1.8099976','-0.66999817','-0.049999952','-2.3799744','-1.4300079','-0.599998','0.110001','0.34999847','2.88998','-0.14000034','-0.9300003','-0.77','-0.059999943','-0.740002','-6.23999','-0.290001','-0.23','-1.6400032','0.0400009','0.0200005','2.27','-0.14','-0.25','0.18000007','-0.38999987','-0.8899994','-10.209991','-1.15001','-0.7700043','-0.31000018','-0.06000042','-0.15999985','0.0100002','-2.17',]
var unit_prices = ['255.1','9.43','149.5','193.9','12.35','498.13','17.52','153.1','13.2','28.78','50.3','16.63','13.95','33.94','62.36','23.6','11.55','4.7','186.06','376.0','63.0','358.99','140.68','6.2','13.16','1.67','2.4','50.45','37.38','36.13','79.12','20.23','85.84','49.35','79.32','90.12','40.53','46.43','170.0','95.88','54.66','108.96','41.84','10.38','98.61','60.8','20.2','104.72','21.0','93.65','17.51','57.43','345.83','8.66','265.01','48.66','200.0','29.05','45.27','18.8','58.7','136.71','30.49','156.51','490.37','119.0','55.36','163.75','99.66','60.2','142.02','2.06','157.08','47.96','22.96','138.0','582.85','84.18','254.07','187.75','596.09','661.0','255.83','78.45','76.98','96.51','158.47','7.05','36.95','151.46','76.73','61.15','131.81','47.95','29.35','525.98','86.57','95.0','36.36','189.31','90.78','299.61','0.3503','415.4','173.45','9.7','707.0','66.88','509.87','10.02','167.92','22.99','37.76','9.17','17.2','531.21','260.16','118.92','1.49','409.0','243.72','74.77','16.6','49.56','469.92','8.35','87.94','49.3','2.52','36.0','233.1','43.57','6.04','62.22','94.6','26.14','183.13','6.35','130.35','2.8','6.4','29.7','446.53','174.5','72.31','3.28','10.55','54.01','8.37','159.05',]
var total_sales = ['255.19','9.53','151.05','194.39','12.39','499.97','17.64','153.89','13.46','28.8689','50.5699','16.83','13.9699','33.995','63.14','23.93','11.655','4.72','187.25','377.16','63.16','360.0','141.435','6.23','13.17','1.6883','2.41','50.585','37.76','36.46','79.7296','20.38','86.1441','49.575','79.7699','90.6','40.66','47.0286','170.69','96.35','55.4597','109.95','41.8995','10.6547','100.8','61.055','20.38','104.97','21.215','94.0','17.785','57.78','347.55','9.47','265.6491','48.95','201.88','29.375','45.72','18.91','59.475','137.87','30.63','156.9','492.2299','120.25','56.03','164.18','100.57','61.1706','143.365','2.11','158.1899','48.23','22.97','139.22','586.1704','84.768','255.6341','188.3','600.75','663.185','257.18','78.95','77.56','97.15','159.815','7.3','37.17','152.7554','77.52','61.34','132.49','48.109','29.5','528.24','86.98','95.9274','36.3899','189.9102','91.605','300.344','0.3549','421.97','173.95','9.77','711.55','67.105','516.3665','10.15','169.63','23.2617','38.08','9.3','17.2213','533.97','260.9952','119.09','1.52','409.615','245.4','75.1','16.7069','49.77','472.01','8.36','88.4','49.615','2.575','36.4','236.0','43.915','6.11','63.75','94.91','26.5588','183.8752','6.3887','130.71','3.025','6.45','29.91','449.99','175.82','72.87','3.28','10.59','55.04','8.4','158.52',]
var sales_change_30d = ['247.43','8.95','147.2','191.725','12.16','487.51','17.1','151.03','10.63','28.54','49.77','16.61','13.69','33.55','61.3','23.1','11.325','4.5','171.0','373.48','61.15','351.82','139.9','6.06','12.52','1.57','2.32','50.225','37.32','35.86','77.25','19.585','85.03','49.21','76.86','89.86','39.9798','45.69','169.63','95.36','52.45','108.09','41.185','10.14','98.02','60.265','20.1','103.67','20.84','91.09','16.97','57.325','343.02','8.65','262.68','48.64','198.34','28.46','45.14','18.34','57.72','135.43','30.3','155.99','481.935','118.06','54.25','162.83','98.41','59.3','141.72','1.88','156.13','47.52','22.72','138.0','579.47','82.7533','251.865','186.53','592.96','657.16','251.88','78.0','75.6871','93.53','158.1','6.835','36.95','151.01','76.4875','60.795','130.6451','47.66','27.13','524.07','85.165','92.89','35.8','187.89','90.0','298.16','0.335','408.485','171.1','9.52','700.56','66.4','508.46','9.97','166.17','22.09','36.63','9.16','16.7376','529.52','257.0','117.6601','1.405','406.13','242.785','74.26','16.37','49.45','467.53','8.19','86.88','48.6','2.45','35.39','225.39','43.11','5.81','61.26','94.31','25.94','182.355','6.1','129.85','2.7901','5.98','28.78','437.315','173.59','71.64','2.96','10.48','53.81','8.12','156.74',]
var curr_price = ['248.48','9.07','147.41','192.53','12.19','495.22','17.17','151.94','11.03','28.79','50.25','16.78','13.74','33.67','61.57','23.46','11.38','4.5','173.92','376.04','61.41','353.96','140.93','6.12','12.74','1.6','2.34','50.52','37.7','35.92','77.9','19.63','85.34','49.22','77.35','90.29','40.23','45.72','170.1','96.01','52.94','108.57','41.26','10.32','99.45','60.74','20.12','104.0','20.91','91.66','17.08','57.61','346.55','8.9','263.14','48.65','199.0','28.68','45.71','18.45','57.86','136.14','30.45','156.74','486.88','119.09','54.52','163.55','98.89','59.45','142.42','1.89','157.23','47.92','22.82','138.39','582.92','83.26','252.97','187.34','596.6','660.08','255.32','78.28','75.87','93.6','159.28','6.86','37.06','151.98','76.74','61.03','131.12','47.79','27.22','526.47','85.37','93.41','36.22','187.91','90.53','299.46','0.3354','408.85','172.28','9.52','706.49','66.66','511.29','10.13','166.94','22.51','36.69','9.23','16.81','530.79','258.77','118.35','1.46','406.89','243.48','74.32','16.59','49.73','471.56','8.21','87.02','48.73','2.47','35.53','226.85','43.54','5.82','61.44','94.69','26.28','183.38','6.24','130.35','2.98','6.0','28.91','438.22','174.2','72.02','3.08','10.49','53.85','8.37','156.74',]
var store_id = ['100240940','74405772','61297500','42522894','40756126','38827290','38592667','36399540','35826964','30321741','29202922','27485000','24107142','23079207','21598656','21224985','20248549','19724025','19623990','18706605','16719323','14970726','14816100','14632278','14264049','14174424','13185744','12487582','12290340','11205548','9516949','8960587','8543501','8480747','8226078','7876623','7733348','6530002','6409723','6132240','5923121','5600868','5585863','5565666','5197399','5079554','4917052','4405367','4296314','4048718','3818387','3801408','3796728','3691991','3618760','3616315','3595371','3496910','3424249','3343187','3183549','3029522','2855779','2796702','2737689','2654652','2529839','2525539','2525290','2516941','2513257','2482246','2186464','2118342','2077414','2011521','1989702','1973544','1937024','1913062','1888303','1870251','1853997','1834656','1812774','1735066','1637497','1617723','1488199','1478932','1408652','1393497','1384169','1329279','1326546','1299589','1295821','1276798','1276657','1250383','1223831','1150827','1107378','1093514','1073533','1038465','924931','921800','917312','910060','842952','803357','798104','796551','788311','779140','777448','771949','755915','727121','721446','705903','650234','638413','606099','515339','504101','481622','451365','443897','424496','400410','386087','382511','302450','275190','223144','218811','203414','201902','181928','177280','157771','149629','143549','130675','127694','116305','67269','59080',]
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

      volume = store_id[l]
      volume = (new Intl.NumberFormat().format(volume));


      if (symbols[l] == undefined)
      {
        document.getElementById('nowplaying').innerHTML =''
      }

      else

         document.getElementById('nowplaying').innerHTML =
      '<br><br><b>Symbol</b>: ' + symbols[l] + '&nbsp; &nbsp;'  
      + '<br><b>Current Price:</b> ' + '$' + curr_price[l] + '&nbsp; &nbsp;'
      + '<br><b>Change Since Previous Close:</b> ' + percent_change[l] + '%'
      + '<br><b>Volume:</b> ' + '$' + volume + '&nbsp; &nbsp;'
      + '<b>Open:</b> ' + '$' + unit_prices[l] + '&nbsp; &nbsp;' +  
      '<br><b>High:</b> ' + '$' + total_sales[l] + '&nbsp; &nbsp;' + '<b>Low:</b>' + '$' + '&nbsp; &nbsp;' + sales_change_30d[l] 
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