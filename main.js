
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert ("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var text = document.getElementById ('compoundInvestment');
  var number = text.textContent;
  console.log (number);
  text.textContent = number * 2;
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.getElementById ('circle-bw');

  if (circle.style.backgroundColor === 'black' )  {
     circle.style.backgroundColor = 'white';
  } else {
      circle.style.backgroundColor = 'black';
  };

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var circle = document.getElementsByClassName ('circle-red');


  if (parseInt(circle[0].style.height) < 320 ) {
        var value = parseInt(circle[0].style.height);
        value *= 2;
        value = value + "px";
        circle[0].style.height = value;
        circle[0].style.width =  value;

  } else  {
        circle[0].style.height = "40px";
        circle[0].style.width =  "40px";

  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var list = document.getElementById ("userList");
  for (var i = list.children.length - 1; i >= 0; i--) {
    if (list.children[i].classList.contains("inactive")) {
        list.removeChild(list.children[i]);
    }
  }

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var list = document.querySelector ("#reverse-squares .answer-box");
  var saved;

  for(var i=list.children.length - 1;i>=0;i--)  {
    saved = list.children[i];
    list.removeChild(saved);
    list.appendChild(saved);
  };

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var tasks = document.querySelector ("#tasks");
  var workHorse;
  var newString ='';

  for (var i=0;i < tasks.children.length;i++) {
      workHorse = tasks.children[i].textContent;

      newString = '';
      for (var j=workHorse.length - 1; j >= 0; j--) {
        newString += workHorse[j];
      }

      console.log(workHorse);
      tasks.children[i].textContent = newString;
  };

})

var loc = 1;

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
    var image = document.querySelector('#city-img');

    var data = image.src;

    if (++loc > 9) {
      loc = 1;
    };

    image.src = data.substring(0,data.length-1)+ loc;

});