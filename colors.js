var links={
  setcolor:function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
       alist[i].style.color = color;
       i = i + 1;
       }
 }
}
var body={
  setbackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color ;
  },
  setcolor:function(color){
    document.querySelector('body').style.color= color ;
  }
}

function nightdayhandler(self){
  if(self.value === 'night'){
    body.setbackgroundColor('black');
    body.setcolor('white');
    self.value = 'day';

    links.setcolor('powderblue');
  } else {
    body.setbackgroundColor('white');
    body.setcolor('black');
    self.value = 'night';

    links.setcolor('blue');
  }
}
