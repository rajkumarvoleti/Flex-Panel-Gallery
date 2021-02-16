const panels = document.querySelectorAll(".img");

function toggleOpen(){
  this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));
