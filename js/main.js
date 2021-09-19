document.addEventListener('scroll',function(event){
    console.log(event);
    if(window.scrollY >80){
        document.getElementsByClassName('sticky')[0].style.background = 'white';
        document.getElementsByClassName("scrollMargin")[0].style.marginTop =
          "80px";
    }
    else{
        document.getElementsByClassName("sticky")[0].style.background = 'none';
         document.getElementsByClassName("scrollMargin")[0].style.marginTop ="0px"
    }
    

});
