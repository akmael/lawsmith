function init(){

  window.addEventListener('scroll', function(e){

    var distanceY = window.pageYoffset || document.documentElement.scrollTop,
         shrinkOn = 300,
         header = document.querySelector("navbar");
    if (distanceY > shrinkOn){
       classie.add(header, 'smaller');

    } else {
         if (classie.has)
    }

  });
}
