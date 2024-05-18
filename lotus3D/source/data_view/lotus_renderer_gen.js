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

var col_A = ["very cautious about accepting this technology","scared of ai because humans will make it too powerful and weponize it","scared and worried that no one is regulating it.","its our future and we have to use everywhere asap","im indifferent and i don't know if i can trust it","i think its awesome but weird at the same time","i like how technologically advanced it is as it makes performing tasks easier","i feel good about ai so like yeah and i love it so much","has good and bad things to say about it and is leasing the way in technology","curious and excited about what it night accomplish","advanced technology quick solutions, combination of algorithms proposed with the purpose    of creating machines tht have the same capabilities as humans","Worried because it's taking away jobs and it's taking away human creativity.","Will have a positive impact on society in the future","Very nice and helpful for many and graceful work i really like so much because it as help me and my family a lot","Unsure about how much it will help people in the long run","Think it's helpful n easy to use, accessible n lots of ways to use","There will be pros and cons with it. It will definitely make certain things easier.","The first time I was on a phone call Me back to the grocery store and","So I don't know it's kind of scary. It is not real and I don't understand how it works like cryptocurrency.","Scary thought but it helps us alot im just scared they can take over humans","Powerful but scary but can change the world for the positive because it is so innovative and can help people accomplish so much it is very important and powerful","Positive feelings in general. That's my overall feelings","Positive and hope that it becomes more universal.","Nothing strong either way but it might be the end of humanity","Nothing really don't know much about it need to learn more about it I guess it's the new thing","Not sure I have mixed feelings about it it's good and bad","Not good it's not how people should learn it makes people lazy and not work hard","No strong feelings at this present time, in a wait and see mode.","No real comments this sure has been a lot of hype about it I'm not quite sure if it's going to be a good or bad in regards to Medicine I think it will be helpful","Love it. It's going to make life so much easier","Like it a lot and will use it for sakes now and in the future","Leaning towards not good. Feel like it's gonna be bad.","Just getting used to the benefits.  Hope it causes more good than harm","Its a good creation for the world to see and hear from you and your family and friends and cdr","It's very very helpful yet at the same time very scary.","It's useful when used correctly. Sometimes It's better to do it manually without the help of smart features.","It's useful and entertaining I think. It's fun to use them.","It's us ok do not know much about it but heard of it","It's the future industry to rule all industries for mankind.","It's scary as hell, it's too realistic and too smart","It's really cool. I loooooooooooooooooove it.","It's okay it could be better since people are getting smarter","It's okay I like it quite a bit it can be very helpful","It's okay I guess like the voice ones okay like Google","It's ok I guess . I'm really not sure. We will see what happens","It's new, I'm not too sure about AI or what it can do yet","It's going to make everyone's life so much easier and change the computer industry","It's going to be very useful and helpful and completely change the computer industry","It's amazing you can do so many things while it being useful and responsive","It's actually quite scary and I don't think the world is ready for it","It's a new wave of technology that's going to change the future","It's a great tools to use and it's very helpful to figure things out.","It'll help the human race a lot better. It allows from work personalized advertisement and customizations of our ads that we see in our day-to-day lives","It terrifys me if I'm going to be truthful.  I think it will be the death of the human race.","It sucks and it is frightening because it will be abused","It stands for artificial intelligence and technology","It should only be used as a tool and for the more monotonous draining jobs","It should be monitored but can be useful. AI can help people in many ways but could be dangerous if not properly handled.","It seems very interesting and I might be interested","It seems cool to have a bit of help of someone who isn't real yet they know a lot since it's a robot","It ok just don't trust it like everyone else but we will see","It is very useful to today's modern world, with little concerns. The only concern is its smartness to be dangerous, other than that it helps everyone in the world.","It is scary and going to cause many negatives affects","It is ok. I like the ability for it to answer questions based on previous data. I didn't like the future that might happen relating to ai","It is going to take over all of the jobs and unemployment will continue to rise.","It is fascinating & potentially useful, but a very scary concept if used the wrong way.","It is a very good thing that was made for the economy","It is a scary, but exciting new technology and tool. I believe it should be regulated more and tided with caution.","It is a great advancement in technology that helps humans","It is Necessary to evolve business and education","It is Genius I enjoy the use.useful with school work and any unexplained questions and problems","It helps with everything you need on your device","It has its uses but it must be closely monitored","It could be both a good and bad thing. It could be  both helpful and hurtful.","Irritating. Bring back a regular search bar. I would have have a person to speak to","In the middle. Kind of concerned because of how life like it is","I'm very open to AI, I think it will be interesting to watch how it matures over time","I'm still suspicious about it. I feel like it's a technology that has been known about for a few decades. Consider The Transformers. That to me is what AI is. And soon to come.","I'm not that thrilled with AI I mean it can help us in many ways but I fear it's taken over. Having people do certain things","I'm not sure really what to think about it. It's something that is for sure.","I'm not sure about AI. All I know is that I don't know what it is","I'm not really all that familiar with it. It's on my snapchat but I don't use it.","I'm not aware of AI so I can not answer I can not answer this question","I'm cautious and optimistic at the same time.","I'm beginning to like it. I was a little skeptical about but it's actually awesome","I use it sometimes, I like it after ut took a minute to get use to it","I thinks it's  very helpful, at times it can kind of be invasive","I think it's taking away jobs. Many people will lose jobs","I think it's really good for helping people learn new things","I think it's helpful but also intrusive. I think there are strengths and also weaknesses.","I think it's helpful but a little creepy. I feel like things like Alexa spy on you.","I think it's cool but also a little scary but it seems very helpful","I think it's a good app that helps everyone with something.","I think it will be good thing. That it will have both pros and cons so bad points just have to correct or leave out.","I think it is overrated and could become dangerous","I think it is important and innovative and will be included in most technologies.","I think it is amazing and always coming up with new and improved things to do","I think it is a very dangerous technology. I think that it could be used for good but the current world rulers seem to not want that.","I think it has benefits, as well, I have concerns.","I think it can help with tasks humans don't need to do","I think it can help a lot, but has the potential for mususe","I think it can be great but I have a lot of concerns.  It is already being misused.","I think it can be both helpful and hurtful to different industries.","I think caution should be taken in its development","I think a I is good and I think a I will run the world one day","I think AI is good to an extent. I don't completely agree with everything they are intending AI for.","I think AI has its benefits and downfalls. When it's riding writers of jobs, I'm against it.","I think A I could be useful for the right reasons and in the right setting","I thing it's genius and recently starting using it at work and I believe it's on its way up","I see it everywhere and I don't like it, it doesn't need to be involved everything","I really think it's great and very innovative","I really think AI can bring a great use case for many professions.","I really don't understand the entire concept of AI. I am waiting to see if is useful to my needs.","I really do not like AI as I'm worried it's able to do too many things better than msn can and there will be job loses.","I personally don't feel bad AI it's going to beneficial in the long run","I love to be the best and love be me and love the rest.","I love it, it helps me when i'm writing papers for assignments.","I love it, I like how it is personally ai is just great","I love it it helps us greatly in our everyday lives","I love how helpful AI is.It can do so mucj great but we need to pass UBI for every American. Universal basic income. Itlf we have UBInthen AI is the greatest. If not, we are in trouble.","I love AI they are amazing and is the future will support them","I love AI it's has upgraded a lot of systems which has made a lot of things easier than they were before","I like the idea of it but it scares me. I feel like it will help in a lot of different ways.","I like it, even as I have questions about it.  We need to figure out how to use it in an ethical way in various settings.","I like it and I believe it will advance even fir","I honestly done understand it all. I don't think it's a good thing!","I haven't had much experience with it but I can see the benefits but also the dislike that people have for it.","I have no  strong feelings about it because I had not ever used it before","I have mixed feelings about it whether it's gonna help or harm us","I have concerns about privacy and data security","I hate it because it's taking over people's jobs to support their families.","I hate it because it scares me. They are trying to replace humans","I feel we are on there brink of AGI and incredible abundance","I feel uneasy about AI. I am not sure if it is a good thing or a bad thing.","I feel there are advantages and disadvantages to using it.","I feel that it is Innovative and creative and it can make our lives easy","I feel likw AI is a great investment. It helps us do so much stuff easier in the world","I feel like its taking out the creativity of alot of things but is also very useful.","I feel like it's overrated and hasn't shown much","I feel like it is a useful technology for useful information.","I feel like I'm kinda scared when we allow it take over the world","I feel like I do not know enough about it to form an accurate opinion.","I feel like AI is the future and it can soon take over the world and take the jobs of many citizens.","I feel like AI is an innovative tool that will increase productivity and streamline workflow","I feel kinda good because it can help u do sum stuff that u can't do and u can learn alot from it","I feel it's a huge part of our future and we need to get used to it","I feel it will help us to be more efficient as humans","I feel it is a bad thing.  It is going to make it sometimes extremely hard to decipher what is real and what is fake.","I feel great they are one of a kind and good to help","I feel great about Al it's a great company . And very helpful","I feel good about al is so much better benefit","I feel I have a eye is great and it's perfect","I dont see how it is really going to help us all..","I don't trust it. I don't know enough about it or know how to control it.","I don't trust AI. I feel it will eliminate jobs.","I don't think the benefits of it outweigh the risks","I don't really understand how AI works so I'm confused about it","I don't like the idea of AI taking over humans","I don't like it at all, it's scary and unnecessary.","I don't like it and don't know to much about it","I don't know what to think about al. It a game change","I don't know what I think about this one but I'm definitely thinking about this and I'm going to try to make it work","I don't know too much about AI, but I am willing to learn more about it and how it works.","I don't know anything about it and it makes me nervous","I don't know  much about it but  interesting in learning about it","I don't feel anything about AI cuz I don't really know anything about it","I don't even know what that is! I have never heard of it before!","I don't approve of it. I don't feel as though it is needed nor necessary","I do not trust it in general but I am willing to learn more about it.","I do not like it and I do not trust it and I do not use it.","I appreciate the concept of the content provided by the company services and services","I am very skeptical of AI%3B I do feel that in some cases it can help, but I fear the dangers  of it too much","I am totally undecided about AI. I guess it is the fire of social media.","I am torn. I don't think that it is good for our youth to rely on it. But I also feel that technological advancement is aided with AI.","I am not sure. I have not heard enough about it.","I am not comfortable with AI and I am not sure I know much about it.","I am kind of concerned about the safety concerns in relations to AI","I am excited for the development and how it will be incorporated into our everyday lives","I am a little concerned about the future of employment because of AI","I absolutely hate it and I think it's a horrible idea","I absolutely abhor the idea of ai and all it stands for. It should have never been created and the only people it's helping is the people getting rich off of it","I  have Neutral feelings about A I I do not trust it at all","How to feel about AL? Al is interesting and curiously technical.","Great technology better for the future of us and the rest of the world","Great helps with alot of things technology research","Good because it's the Best for me and my family love it","Feel good about it. It can enhance our experience to all kinds of technology","Don't care to much but would like to learn about it","Can be useful, but can also be dangerous. It can be used to build dat models and code%3B but can also be used for deep fakes and fraudulent activity","Can be helpful at times but other times misleading.","Both excited and apprehensive. I can see the benefits it could bring to every day life but I also see the very real issues we could end up with, for example data and privacy concerns or AI doing what it wants or teaching itself without human knowledge of it doing so.","An common quality variety of options for tech support","Al i like depending on what aspect, some of it is useful","Al has it's benefits and it's problems but overall I think Al is a good thing and here to stay","Ai katuramin my daddy and you my love I will send me.","Ai is a little creepy. And I don't really like it.","AI is prominent in the workforce and technological aspect.","AI is interesting in the fact that it can help with alot of different aspects but also van be used for bad","AI is helpful but be careful when you use it.","AI is an ok system to have I guess I just don't use it at the moment",]

var label_A = "How do you feel about AI?"

var col_B = ["2","2","2","1","4","3","1","1","3","1","5","2","1","1","4","1","3","5","2","3","3","1","1","3","4","3","2","4","3","1","1","2","3","5","3","3","1","4","1","2","1","3","1","3","4","4","1","1","1","2","1","1","1","2","2","5","3","3","4","1","4","3","2","3","2","3","1","3","1","1","1","1","3","3","5","3","1","2","3","4","4","4","4","3","1","1","3","2","1","3","3","3","1","3","2","1","1","2","3","1","3","3","3","2","1","3","3","1","1","2","1","1","4","2","1","5","1","1","1","3","1","1","3","3","1","2","3","4","3","2","2","2","1","4","3","1","1","3","2","1","2","4","2","1","1","1","1","2","1","1","1","5","2","2","2","2","4","2","2","2","4","4","4","2","4","4","4","2","4","2","5","3","4","3","4","4","2","1","2","2","2","2","5","1","1","1","1","4","3","3","3","5","3","3","5","2","1","3","3","4",]

var label_B = "Sentiment"

var col_C = ["male","male","female","male","male","female","female","female","male","male","male","female","male","male","male","female","male","male","male","male","female","male","male","female","female","male","male","female","male","male","male","female","female","male","female","female","female","female","male","male","male","male","male","female","male","female","male","male","male","female","male","male","male","female","male","male","female","female","male","female","male","male","female","male","female","female","male","male","male","female","female","male","female","female","female","female","male","female","female","female","female","female","male","female","male","male","female","male","female","female","female","female","female","female","male","male","female","male","male","male","female","male","female","female","male","female","female","male","female","female","female","male","female","female","female","male","female","male","female","male","male","female","female","female","female","female","female","female","female","male","female","female","male","female","female","female","female","male","male","male","male","female","male","female","male","male","female","male","male","female","male","male","female","male","male","female","female","male","female","female","male","male","female","female","female","female","female","male","male","male","female","female","female","female","female","female","female","male","female","female","male","female","male","female","female","male","female","female","male","female","female","male","female","female","male","female","female","male","female","female",]

var label_C = "Gender"

var col_D = ["> 54","35 - 44","35 - 44","> 54","> 54","18 - 24","25 - 34","25 - 34","45 - 54","> 54","45 - 54","35 - 44","45 - 54","35 - 44","> 54","> 54","25 - 34","35 - 44","45 - 54","35 - 44","35 - 44","45 - 54","25 - 34","25 - 34","> 54","45 - 54","35 - 44","> 54","> 54","35 - 44","> 54","> 54","45 - 54","25 - 34","35 - 44","35 - 44","25 - 34","> 54","35 - 44","25 - 34","18 - 24","25 - 34","25 - 34","25 - 34","35 - 44","35 - 44","> 54","> 54","18 - 24","35 - 44","35 - 44","25 - 34","25 - 34","45 - 54","> 54","18 - 24","25 - 34","16 - 17","25 - 34","18 - 24","35 - 44","18 - 24","> 54","35 - 44","25 - 34","35 - 44","18 - 24","25 - 34","25 - 34","35 - 44","35 - 44","25 - 34","> 54","> 54","45 - 54","25 - 34","> 54","45 - 54","> 54","> 54","45 - 54","35 - 44","25 - 34","35 - 44","45 - 54","45 - 54","45 - 54","25 - 34","> 54","35 - 44","35 - 44","45 - 54","25 - 34","> 54","45 - 54","25 - 34","45 - 54","35 - 44","35 - 44","35 - 44","> 54","> 54","45 - 54","> 54","35 - 44","35 - 44","25 - 34","45 - 54","35 - 44","18 - 24","45 - 54","35 - 44","> 54","> 54","25 - 34","25 - 34","18 - 24","18 - 24","35 - 44","35 - 44","35 - 44","18 - 24","25 - 34","> 54","> 54","> 54","25 - 34","25 - 34","> 54","> 54","35 - 44","45 - 54","25 - 34","> 54","> 54","35 - 44","18 - 24","35 - 44","18 - 24","35 - 44","45 - 54","35 - 44","18 - 24","35 - 44","16 - 17","35 - 44","35 - 44","35 - 44","35 - 44","25 - 34","35 - 44","35 - 44","> 54","> 54","45 - 54","35 - 44","45 - 54","35 - 44","25 - 34","35 - 44","45 - 54","> 54","45 - 54","> 54","> 54","45 - 54","45 - 54","35 - 44","> 54","> 54","45 - 54","35 - 44","45 - 54","> 54","> 54","35 - 44","35 - 44","45 - 54","35 - 44","25 - 34","18 - 24","> 54","35 - 44","> 54","45 - 54","35 - 44","> 54","45 - 54","45 - 54","35 - 44","35 - 44","25 - 34","35 - 44","> 54","35 - 44","35 - 44","35 - 44","35 - 44","> 54","35 - 44",]

var label_D = "Age"

var col_E = ["Georgia","Kansas","Ohio","New York","California","New Jersey","Texas","New York","New York","New Jersey","Florida","Michigan","Ohio","Georgia","Florida","South Carolina","Texas","Ohio","California","California","New York","Pennsylvania","Arizona","West Virginia","Unknown","Ohio","New York","Michigan","Minnesota","Missouri","New Jersey","Michigan","Wisconsin","Tennessee","Utah","New York","Michigan","North Carolina","Arizona","Missouri","New York","Tennessee","New York","North Carolina","North Carolina","New Jersey","New Jersey","New Jersey","Texas","Texas","Georgia","Illinois","North Carolina","Missouri","Ohio","Florida","Alabama","Alabama","Ohio","Texas","Illinois","Texas","Florida","Illinois","North Carolina","New York","Florida","Texas","Iowa","Massachusetts","Nevada","California","Georgia","Illinois","Alabama","South Carolina","Kentucky","Texas","New York","Pennsylvania","New York","Indiana","Texas","Georgia","Florida","Wisconsin","Washington","Illinois","Michigan","South Carolina","Ohio","Pennsylvania","Missouri","Missouri","Virginia","California","Ohio","Ohio","Pennsylvania","Virginia","Alabama","North Carolina","Texas","Pennsylvania","Georgia","Virginia","Virginia","New York","Hawaii","California","Arizona","Missouri","California","New York","Alabama","Texas","Georgia","North Carolina","New York","Ohio","Illinois","Georgia","Kentucky","Massachusetts","Ohio","Florida","North Dakota","Louisiana","Ohio","Pennsylvania","Illinois","North Carolina","California","Tennessee","California","Texas","North Carolina","Nevada","Nevada","Nevada","Ohio","Kentucky","Michigan","Georgia","New York","Illinois","Mississippi","Indiana","Illinois","Tennessee","Tennessee","California","Texas","Florida","Ohio","Michigan","Arizona","Illinois","Oklahoma","Illinois","Pennsylvania","Florida","Georgia","Pennsylvania","Missouri","Illinois","Arkansas","Pennsylvania","Florida","Maryland","Wisconsin","Tennessee","Illinois","Florida","New York","California","Maryland","California","Virginia","Tennessee","New York","New York","New Jersey","Florida","Florida","Texas","Pennsylvania","Maryland","Texas","Washington","Pennsylvania","Texas","Florida","Texas","Wyoming","Louisiana","Arizona","California","Tennessee","Georgia",]

var label_E = "Area"

var col_F = ["Winder","Leavenworth","Rocky River","New Hyde Park","Costa Mesa","Ridgefield Park","San Antonio","Brentwood","Fulton","West Orange","Hollywood","Dearborn Heights","Mogadore","Ludowici","Okeechobee","North Augusta","San Antonio","Columbus","Chico","Oakland","Brooklyn","Pittsburgh","Tucson","Beckley","Unknown","Unknown","Staten Island","Detroit","Maple Grove","Unknown","Sussex","Rockford","Milwaukee","Memphis","Roosevelt","Niagara Falls","Madison Heights","Charlotte","Phoenix","Kansas City","Brooklyn","Kingsport","The Bronx","Greenville","Winston-Salem","Laurelton","Carteret","Carteret","Laredo","Houston","Hinesville","Streamwood","Charlotte","Kansas City","Columbus","Miami","Semmes","Alabaster","Columbus","Spring","Dolton","Houston","Longwood","Freeport","Charlotte","Buffalo","Tampa","Houston","Sioux City","Boston","Las Vegas","San Francisco","Fayetteville","Aurora","Jacksonville","Aiken","Barbourville","Conroe","Merrick","Mercersburg","New York","Washington","Austin","Unknown","Jacksonville","Viroqua","Seattle","Chicago","Clarkston","Elloree","Chardon","Philadelphia","Springfield","St Louis","Roanoke","Santa Ana","Dayton","Xenia","Philadelphia","Charlottesville","Hamilton","Charlotte","Houston","Philadelphia","Atlanta","Chilhowie","Reston","The Bronx","Kīhei","Hemet","Phoenix","Fenton","Porterville","Shirley","Selma","Houston","Atlanta","Winterville","New York","Oberlin","South Holland","Hampton","Hopkinsville","West Roxbury","Cleveland","Palm Coast","Minot","Unknown","Lima","Perkasie","Lake in the Hills","Wilson","Westminster","Memphis","San Francisco","Killeen","Charlotte","Las Vegas","Las Vegas","Henderson","Columbus","Mayfield","Detroit","Atlanta","Staten Island","Peoria","Biloxi","Indianapolis","Elwood","Knoxville","Munford","San Bernardino","San Antonio","Orlando","Dayton","Alpena","Gilbert","Melrose Park","Tulsa","McHenry","Lancaster","Orlando","Lithonia","Feasterville","Republic","Chicago","Jonesboro","Philadelphia","Spring Hill","Gaithersburg","Milwaukee","Morristown","Chicago","Palm Beach Gardens","Newark","Santa Maria","Silver Spring","Los Angeles","Henrico","Nashville","Brooklyn","Queens","Newark","Orlando","Orlando","Fort Worth","Camp Hill","Germantown","New Braunfels","Bothell","Pottstown","Houston","Miami","Unknown","Afton","Denham Springs","Chandler","Carson","Collierville","Marietta",]

var label_F = "City"

var rowcount = 200

var filter1 = col_B

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
      var answer =x;
      var answer_index = answer[0];
      var answer_value = answer[1];
      console.log(answer_index);
      console.log(answer_value);

      if (answer_value == "True") {  // trend can also be specified as a variable in index.html [uptrend]
        
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
      + '<b>' + label_D + ':</b> ' + ' ' + col_D[l]  + '&nbsp; &nbsp;' +  
      '<br><b>' + label_E + ':</b> ' + col_E[l]  +'&nbsp; &nbsp;' + '<b>' //+ label_F + ':</b> ' + '$'  + col_F[l] 
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
  }  //this function appears to no longer be working and causes the screen to black out. has been commented out.

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