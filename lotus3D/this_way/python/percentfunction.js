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

