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

var col_A = ["All items","Food","Food at home","Cereals and bakery products","Cereals and cereal products","Flour and prepared flour mixes","Breakfast cereal(1)","Rice, pasta, cornmeal","Rice(1)(2)(3)","Bakery products(1)","Bread(1)(2)","White bread(1)(3)","Bread other than white(1)(3)","Fresh biscuits, rolls, muffins(2)","Cakes, cupcakes, and cookies(1)","Cookies(1)(3)","Fresh cakes and cupcakes(1)(3)","Other bakery products","Fresh sweetrolls, coffeecakes, doughnuts(1)(3)","Crackers, bread, and cracker products(3)","Frozen and refrigerated bakery products, pies, tarts, turnovers(3)","Meats, poultry, fish, and eggs","Meats, poultry, and fish","Meats","Beef and veal","Uncooked ground beef(1)","Uncooked beef roasts(2)","Uncooked beef steaks(2)","Uncooked other beef and veal(1)(2)","Pork","Bacon, breakfast sausage, and related products(2)","Bacon and related products(3)","Breakfast sausage and related products(2)(3)","Ham","Ham, excluding canned(3)","Pork chops(1)","Other pork including roasts, steaks, and ribs(2)","Other meats","Frankfurters(3)","Lunchmeats(1)(2)(3)","Poultry(1)","Chicken(1)(2)","Fresh whole chicken(1)(3)","Fresh and frozen chicken parts(1)(3)","Other uncooked poultry including turkey(2)","Fish and seafood","Fresh fish and seafood(1)(2)","Processed fish and seafood(2)","Shelf stable fish and seafood(3)","Frozen fish and seafood(3)","Eggs","Dairy and related products","Milk(2)","Fresh whole milk(3)","Fresh milk other than whole(1)(2)(3)","Cheese and related products(1)","Ice cream and related products","Other dairy and related products(2)","Fruits and vegetables","Fresh fruits and vegetables","Fresh fruits","Apples","Bananas(1)","Citrus fruits(2)","Oranges, including tangerines(3)","Other fresh fruits(2)","Fresh vegetables","Potatoes","Lettuce","Tomatoes","Other fresh vegetables","Processed fruits and vegetables(2)","Canned fruits and vegetables(2)","Canned fruits(2)(3)","Canned vegetables(2)(3)","Frozen fruits and vegetables(2)","Frozen vegetables(3)","Other processed fruits and vegetables including dried(2)","Dried beans, peas, and lentils(1)(2)(3)","Nonalcoholic beverages and beverage materials","Juices and nonalcoholic drinks(2)","Carbonated drinks","Frozen noncarbonated juices and drinks(1)(2)","Nonfrozen noncarbonated juices and drinks(2)","Beverage materials including coffee and tea(2)","Coffee","Roasted coffee(3)","Instant coffee(1)(3)","Other beverage materials including tea(1)(2)","Other food at home","Sugar and sweets(1)","Sugar and sugar substitutes","Candy and chewing gum(2)","Other sweets(2)","Fats and oils","Butter and margarine(2)","Butter(3)","Margarine(3)","Salad dressing(1)(2)","Other fats and oils including peanut butter(2)","Peanut butter(1)(2)(3)","Other foods","Soups","Frozen and freeze dried prepared foods","Snacks","Spices, seasonings, condiments, sauces","Salt and other seasonings and spices(2)(3)","Olives, pickles, relishes(1)(2)(3)","Sauces and gravies(2)(3)","Other condiments(3)","Baby food and formula(1)(2)","Other miscellaneous foods(2)","Prepared salads(3)(4)","Food away from home(1)","Full service meals and snacks(1)(2)","Limited service meals and snacks(1)(2)","Food at employee sites and schools(1)(2)","Food at elementary and secondary schools(1)(3)(5)","Food from vending machines and mobile vendors(1)(2)","Other food away from home(1)(2)","nan","Energy","Energy commodities","Fuel oil and other fuels","Fuel oil","Propane, kerosene, and firewood(6)","Motor fuel","Gasoline (all types)","Gasoline, unleaded regular(3)","Gasoline, unleaded midgrade(3)(7)","Gasoline, unleaded premium(3)","Other motor fuels(1)(2)","Energy services","Electricity","Utility (piped) gas service","nan","All items less food and energy","Commodities less food and energy commodities","Household furnishings and supplies(8)","Window and floor coverings and other linens(2)","Floor coverings(1)(2)","Window coverings(1)(2)","Other linens(2)","Furniture and bedding(1)","Bedroom furniture(1)","Living room, kitchen, and dining room furniture(1)(2)","Other furniture(2)","Appliances(2)","Major appliances(2)","Laundry equipment(1)(3)","Other appliances(2)","Other household equipment and furnishings(2)","Clocks, lamps, and decorator items(1)","Indoor plants and flowers(9)","Dishes and flatware(1)(2)","Nonelectric cookware and tableware(2)","Tools, hardware, outdoor equipment and supplies(1)(2)","Tools, hardware and supplies(2)","Outdoor equipment and supplies(1)(2)","Housekeeping supplies(1)","Household cleaning products(1)(2)","Household paper products(1)(2)","Miscellaneous household products(1)(2)","Apparel","Men's and boys' apparel","Men's apparel","Men's suits, sport coats, and outerwear","Men's underwear, nightwear, swimwear, and accessories","Men's shirts and sweaters(2)","Men's pants and shorts","Boys' apparel","Women's and girls' apparel","Women's apparel","Women's outerwear","Women's dresses","Women's suits and separates(2)","Women's underwear, nightwear, swimwear, and accessories(2)","Girls' apparel","Footwear","Men's footwear(1)","Boys' and girls' footwear(1)","Women's footwear","Infants' and toddlers' apparel","Jewelry and watches(6)","Watches(1)(6)","Jewelry(6)","Transportation commodities less motor fuel(8)","New vehicles","New cars(3)","New trucks(3)(10)","Used cars and trucks","Motor vehicle parts and equipment(1)","Tires(1)","Vehicle accessories other than tires(1)(2)","Vehicle parts and equipment other than tires(1)(3)","Motor oil, coolant, and fluids(1)(3)","Medical care commodities(1)","Medicinal drugs(1)(8)","Prescription drugs(1)","Nonprescription drugs(8)","Medical equipment and supplies(1)(8)","Recreation commodities(8)","Video and audio products(8)","Televisions","Other video equipment(2)","Audio equipment(1)","Recorded music and music subscriptions(1)(2)","Pets and pet products(1)","Pet food(1)(2)(3)","Purchase of pets, pet supplies, accessories(1)(2)(3)","Sporting goods(1)","Sports vehicles including bicycles(1)","Sports equipment(1)","Photographic equipment and supplies","Photographic equipment(2)(3)","Recreational reading materials(1)","Newspapers and magazines(1)(2)","Recreational books(1)(2)","Other recreational goods(2)","Toys","Toys, games, hobbies and playground equipment(2)(3)","Sewing machines, fabric and supplies(1)(2)","Music instruments and accessories(1)(2)","Education and communication commodities(8)","Educational books and supplies(1)","College textbooks(1)(3)(11)","Information technology commodities(8)","Computers, peripherals, and smart home assistants(1)(4)","Computer software and accessories(1)(2)","Telephone hardware, calculators, and other consumer information items(1)(2)","Smartphones(1)(3)(12)","Alcoholic beverages","Alcoholic beverages at home","Beer, ale, and other malt beverages at home","Distilled spirits at home(1)","Whiskey at home(1)(3)","Distilled spirits, excluding whiskey, at home(1)(3)","Wine at home(1)","Alcoholic beverages away from home(1)","Beer, ale, and other malt beverages away from home(1)(2)(3)","Wine away from home(1)(2)(3)","Distilled spirits away from home(1)(2)(3)","Other goods(8)","Tobacco and smoking products(1)","Cigarettes(1)(2)","Tobacco products other than cigarettes(1)(2)","Personal care products(1)","Hair, dental, shaving, and miscellaneous personal care products(1)(2)","Cosmetics, perfume, bath, nail preparations and implements(1)","Miscellaneous personal goods(2)","Stationery, stationery supplies, gift wrap(3)","Services less energy services","Shelter","Rent of shelter(13)","Rent of primary residence","Lodging away from home(2)","Housing at school, excluding board(13)","Other lodging away from home including hotels and motels","Owners' equivalent rent of residences(13)","Owners' equivalent rent of primary residence(13)","Tenants' and household insurance(1)(2)","Water and sewer and trash collection services(2)","Water and sewerage maintenance","Garbage and trash collection(1)(10)","Household operations(1)(2)","Domestic services(1)(2)","Gardening and lawncare services(1)(2)","Moving, storage, freight expense(1)(2)","Repair of household items(1)(2)","Medical care services","Professional services","Physicians' services(1)","Dental services","Eyeglasses and eye care(1)(6)","Services by other medical professionals(1)(6)","Hospital and related services(1)","Hospital services(1)(14)","Inpatient hospital services(1)(3)(14)","Outpatient hospital services(1)(3)(6)","Nursing homes and adult day services(14)","Care of invalids and elderly at home(1)(5)","Health insurance(1)(5)","Transportation services","Leased cars and trucks(1)(11)","Car and truck rental(2)","Motor vehicle maintenance and repair(1)","Motor vehicle body work(1)","Motor vehicle maintenance and servicing(1)","Motor vehicle repair(1)(2)","Motor vehicle insurance","Motor vehicle fees(1)(2)","State motor vehicle registration and license fees(1)(2)","Parking and other fees(1)(2)","Parking fees and tolls(2)(3)","Public transportation","Airline fares","Other intercity transportation","Ship fare(1)(2)(3)","Intracity transportation(1)","Intracity mass transit(1)(3)(8)","Recreation services(8)","Video and audio services(8)","Cable, satellite, and live streaming television service(10)","Purchase, subscription, and rental of video(1)(2)","Video discs and other media(1)(2)(3)","Subscription and rental of video and video games(1)(2)(3)","Pet services including veterinary(1)(2)","Pet services(1)(2)(3)","Veterinarian services(1)(2)(3)","Photographers and photo processing(1)(2)","Other recreation services(2)","Club membership for shopping clubs, fraternal, or other organizations, or participant sports fees(1)(2)","Admissions(1)","Admission to movies, theaters, and concerts(1)(2)(3)","Admission to sporting events(1)(2)(3)","Fees for lessons or instructions(1)(6)","Education and communication services(8)","Tuition, other school fees, and childcare","College tuition and fees","Elementary and high school tuition and fees","Day care and preschool(9)","Technical and business school tuition and fees(1)(2)","Postage and delivery services(2)","Postage","Delivery services(2)","Telephone services(1)(2)","Wireless telephone services(1)(2)","Residential telephone services(1)(8)","Internet services and electronic information providers(1)(2)","Other personal services(1)(8)","Personal care services(1)","Haircuts and other personal care services(1)(2)","Miscellaneous personal services(1)","Legal services(1)(6)","Funeral expenses(1)(6)","Laundry and dry cleaning services(1)(2)","Apparel services other than laundry and dry cleaning(1)(2)","Financial services(1)(6)","Checking account and other bank services(1)(2)(3)","Tax return preparation and other accounting fees(1)(2)(3)",]

var label_A = "Expenditure"

var col_B = ["nan","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","Food","nan","Energy","Energy","Energy","Energy","Energy","Energy","Energy","Energy","Energy","Energy","Energy","Energy","Energy","Energy","nan","nan","nan","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Commodities","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Apparel","Transportation","Transportation","Transportation","Transportation","Transportation","Transportation","Transportation","Transportation","Transportation","Transportation","Medical care commodities","Medical care commodities","Medical care commodities","Medical care commodities","Medical equipment and supplies","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Recreation","Education","Education","Education","Technology","Technology","Technology","Technology","Technology","Alcohol","Alcohol","Alcohol","Alcohol","Alcohol","Alcohol","Alcohol","Alcohol","Alcohol","Alcohol","Alcohol","nan","Tobacco","Tobacco","Tobacco","Personal Care","Personal Care","Personal Care","Personal Care","Commodities","nan","Shelter","Shelter","Shelter","Shelter","Shelter","Shelter","Shelter","Shelter","Shelter","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services","Services",]

var label_B = "Category"

var col_C = ["nan","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food at home","Food away from home","Food away from home","Food away from home","Food away from home","Food away from home","Food away from home","Food away from home","nan","nan","Energy commodities","Energy commodities","Energy commodities","Energy commodities","Energy commodities","Energy commodities","Energy commodities","Energy commodities","Energy commodities","Energy commodities","Energy services","Energy services","Energy services","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","Men's and boys' apparel","Men's and boys' apparel","Men's and boys' apparel","Men's and boys' apparel","Men's and boys' apparel","Men's and boys' apparel","Men's and boys' apparel","Men's and boys' apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","Women's apparel","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","nan","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Medical Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Transportation Services","Entertainment Services","Entertainment Services","Entertainment Services","Entertainment Services","Entertainment Services","Entertainment Services","Pet Services","Pet Services","Pet Services","nan","nan","nan","nan","nan","Educational Services","Educational Services","Educational Services","Educational Services","Educational Services","Educational Services","Educational Services","Educational Services","nan","nan","nan","Telecommunication Services","Telecommunication Services","Telecommunication Services","Telecommunication Services","nan","nan","nan","nan","Legal Services","nan","nan","nan","Financial Services","Financial Services","Financial Services",]

var label_C = "SubCategory"

var col_D = ["3.1","2.6","1.2","1.5","-0.6","1.0","-0.8","-1.0","-1.8","2.5","3.2","3.3","2.8","2.9","1.0","0.6","1.7","2.8","2.6","5.1","0.9","-0.9","2.1","3.5","7.7","5.5","6.7","10.7","5.0","-0.4","-1.3","0.6","-3.4","-3.0","-3.6","3.6","1.4","1.4","7.1","1.3","1.7","1.2","3.7","0.4","3.7","-2.6","-3.9","-1.3","1.9","-1.2","-28.6","-1.1","-2.4","-3.1","-1.8","-2.1","0.2","0.0","1.1","0.6","1.9","-8.9","-2.0","1.2","0.3","7.4","-0.9","-0.3","-11.7","1.8","1.1","2.5","2.5","2.2","2.6","3.8","5.0","0.4","-2.3","3.4","4.8","4.8","29.0","4.2","0.2","-1.4","-1.2","-2.3","3.1","2.6","4.4","7.2","4.7","2.0","1.9","-2.3","-1.6","-2.0","2.0","5.1","3.6","2.4","0.6","1.1","1.9","4.6","3.2","2.5","6.7","4.1","8.7","1.8","-0.4","5.1","4.3","5.8","3.1","2.1","10.6","6.7","nan","-4.6","-6.9","-10.5","-14.2","-3.4","-6.6","-6.4","-6.9","-4.2","-2.9","-14.9","-2.0","3.8","-17.8","nan","3.9","-0.3","-1.3","-4.6","0.5","-0.6","-9.4","-2.9","-0.9","-4.4","-2.7","-3.9","-7.3","-12.4","-1.9","-2.0","-2.1","3.0","-4.4","-7.6","-0.8","-0.9","-0.2","1.8","3.0","3.8","0.3","0.1","1.7","1.9","-5.3","2.2","4.4","3.3","1.0","-1.0","0.5","-1.1","-1.7","0.7","1.9","-9.0","0.0","-0.3","-1.6","1.4","-1.7","0.6","0.8","0.6","-0.8","0.7","0.3","0.8","-3.5","-0.8","-0.4","-1.8","-0.6","-2.7","3.0","3.0","0.4","9.2","3.4","-0.6","-5.8","-9.7","-3.3","-6.6","2.0","2.9","4.8","0.5","-1.1","-1.0","-1.6","8.5","8.4","0.5","0.0","1.1","-2.8","-4.2","-3.7","7.1","3.0","-6.6","-4.0","-5.7","-6.9","-2.1","-8.6","-10.7","-13.2","2.3","1.2","2.4","-0.2","1.6","-0.8","0.9","4.0","4.0","4.5","4.7","4.4","7.4","7.5","6.9","3.5","6.2","0.5","-1.9","-0.1","5.4","6.0","6.1","6.1","1.0","3.9","0.6","6.2","6.2","4.1","5.5","5.2","6.4","nan","nan","nan","-4.9","18.2","0.6","1.8","0.1","4.8","2.7","2.1","6.5","6.7","5.9","8.3","5.0","6.7","-23.3","9.5","-1.6","-14.1","6.5","4.3","5.7","7.9","20.6","2.6","1.8","3.8","4.8","-4.8","-6.4","-3.4","9.1","1.7","2.1","5.3","5.3","5.7","2.9","10.5","0.9","7.0","4.8","9.6","4.1","4.8","3.1","7.0","5.2","13.5","6.2","1.3","2.7","1.3","4.9","4.7","1.7","1.2","0.8","3.6","-2.1","-3.2","4.5","3.8","6.8","4.2","4.2","8.7","nan","4.7","5.4","5.6","8.3","4.4","11.2",]

var label_D = "Previous Year"

var col_E = ["0.5","0.6","0.7","0.2","0.3","2.7","-0.8","0.4","-0.6","0.1","0.3","0.5","0.0","0.2","0.1","0.3","-1.0","0.1","-0.7","0.0","0.2","-0.1","-0.3","-0.3","-0.3","-1.3","-0.7","0.6","0.3","-0.3","-0.4","-2.1","2.1","-0.5","-0.8","0.4","-0.4","-0.3","0.9","-0.8","0.3","-0.2","0.5","-0.6","2.6","-0.8","0.1","-1.7","-3.8","0.3","1.8","0.4","-0.8","-1.0","-0.9","1.0","-1.2","1.6","1.3","1.5","0.3","-0.5","-1.5","-0.8","-1.2","1.7","2.9","4.4","-1.7","5.0","3.0","0.6","0.5","-1.2","1.9","0.5","1.3","1.1","0.0","2.2","2.4","3.0","9.9","1.8","1.5","2.5","2.4","1.8","-0.1","0.5","1.0","2.2","1.0","0.3","1.1","2.4","3.6","1.0","-0.1","0.8","0.0","0.3","1.2","-0.7","-0.1","2.5","2.6","-0.7","2.0","9.6","0.7","-0.3","-0.2","0.5","0.4","0.6","-0.1","0.0","-0.5","0.2","nan","0.4","-1.5","0.7","-0.6","2.1","-1.6","-1.5","-1.5","-1.5","-1.7","-3.9","2.5","2.8","1.6","nan","0.6","0.2","0.7","1.8","1.0","-0.4","3.3","1.3","1.3","1.3","1.5","2.9","3.3","3.0","2.8","0.6","0.5","0.7","0.7","0.9","-0.7","-1.3","-0.3","0.4","0.5","0.1","0.5","1.7","4.3","4.9","4.3","4.4","2.2","9.5","2.3","0.1","0.5","-2.8","-5.6","1.0","3.0","-2.8","0.0","0.0","0.1","0.0","0.2","6.0","2.5","6.7","-1.1","0.2","0.3","0.2","-3.7","0.7","0.8","0.5","1.6","-1.3","-0.6","-0.5","-0.8","0.0","-1.4","1.1","2.1","2.1","1.6","2.6","2.0","0.1","-0.1","0.7","2.0","2.8","0.6","2.3","2.2","-0.2","-1.6","1.3","0.5","0.8","0.7","-1.8","-0.4","0.6","-0.8","-1.1","0.8","1.9","2.0","0.0","0.2","0.3","0.5","0.7","0.0","0.7","-0.6","0.7","0.0","-0.1","0.4","-0.1","0.6","0.3","0.5","-0.7","0.5","0.7","0.3","2.0","0.1","0.7","0.6","0.6","0.3","4.3","0.1","5.2","0.5","0.5","0.7","1.4","1.7","0.8","nan","nan","nan","-1.0","nan","1.0","0.5","0.6","0.4","0.0","0.6","1.6","1.6","1.5","2.0","2.0","1.6","1.4","0.7","nan","-6.8","0.8","0.7","1.0","0.5","1.8","1.1","0.6","1.9","1.8","0.9","1.7","-1.5","2.1","-1.0","-0.4","0.5","0.6","0.6","0.8","0.6","-0.3","0.9","5.6","-0.1","0.7","0.4","0.7","-0.3","0.4","-0.9","0.7","0.4","0.2","0.0","0.0","0.8","0.0","2.0","1.5","4.7","0.0","-0.3","1.4","1.2","1.0","0.7","0.7","1.2","nan","0.4","0.7","1.5","2.4","0.0","nan",]

var label_E = "Previous Month"

var rowcount = 340

var filter1 = col_D

var filter2 = col_E

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
    var g = filter2.entries();

    for (x of f) {
      var quote =x;
      var change_value = quote[1];
      var change_index = quote[0];

      if (change_value > 5) {  // trend can also be specified as a variable in index.html [uptrend]
        
        active_links.push(change_index);
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
      + '<br><b>' + label_C + '</b>: ' + col_C[l] + ' '
      //+ '<br><b>' + label_G + ':</b> ' + '$' + col_G[l] + '&nbsp; &nbsp;'
      + '<b>' + label_D + ':</b> ' + ' ' + col_D[l] + ' %'  + '&nbsp; &nbsp;' +  
      '<br><b>' + label_E + ':</b> ' + col_E[l] + ' %' +'&nbsp; &nbsp;' + '<b>' //+ label_F + ':</b> ' + '$'  + col_F[l] 
            }

 function datestamp (date,time) {
  document.getElementById('datestamp').innerHTML =
      '<span style = "color:#bd4840; font-weight:bold; font-size: 16px;">Previous Year</span>&nbsp; '+ active_links.length + ' Item<br> categories showed price increases of 5% or more.' 
     //+ '<span style = "color:#963636; font-weight:bold; font-size: 16px;">Previous Month </span>&nbsp; '+ active_links2.length + ' links<br>' //+
      //time + " &nbsp;" + date
      }


datestamp(date,time);


  // --- raycaster code

  raycaster = new THREE.Raycaster()

  document.addEventListener('mousemove', onDocumentMouseMove, false)
  window.addEventListener('click', onMouseClick, false)
  
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
