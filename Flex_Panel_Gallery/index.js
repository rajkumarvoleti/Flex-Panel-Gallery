var panels = document.querySelectorAll('.panel');
 function toggle(){
     $(this).toggleClass('open');
     $(this).toggleClass('open-active');
 }

panels.forEach(panel=> panel.addEventListener('click',toggle));