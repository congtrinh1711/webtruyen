var menuResponsive = {
   init:function(){
       this.showMenu();
       this.hideOverlay();
       this.closeMenu()
   },
   showMenu:function(){
       let humburger =  document.querySelector('.header__menu .humburger');
       let nav = document.querySelector('.nav-mobile');
       let overlay = document.querySelector('.overlay');
       humburger.addEventListener('click',() => {
           nav.classList.toggle('show');
           overlay.classList.add('show');
       })
   },
   hideOverlay:function(){
      let nav = document.querySelector('.nav-mobile');
      let overlay = document.querySelector('.overlay');
      overlay.addEventListener('click',() => {
        nav.classList.remove('show');
        overlay.classList.remove('show');
    })
   },
   closeMenu:function(){
    let nav = document.querySelector('.nav-mobile');
    let overlay = document.querySelector('.overlay');
    let button = document.querySelector('.button-close');
    button.addEventListener('click',() => {
        nav.classList.remove('show');
        overlay.classList.remove('show');
    })
   }
}
menuResponsive.init()