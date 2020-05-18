var menuResponsive = {
   init:function(){
       this.showMenu()
   },
   showMenu:function(){
       let humburger =  document.querySelector('.header__menu .humburger');
       let nav = document.querySelector('.nav-mobile');
       humburger.addEventListener('click',() => {
           nav.classList.toggle('show');
       })
   }
}
menuResponsive.init()