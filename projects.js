const onMouseMove = (e) =>{
  $("#personal-site-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#fps-booster-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#calculator-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#sorting-algo-visualizer-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#falling-sand-game-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
  $("#snake-classic-details").css({
    left: (e.pageX + 4),
    top: (e.pageY + 4)
  });
}

function hover(element) {
  element.setAttribute('src', 'Assets/folder_icon_hover.svg');
  document.addEventListener('mousemove', onMouseMove);
  if(element.id == "personal-site") {
    $("#personal-site-details").css('display', 'grid');
  }
  if(element.id == "fps-booster") {
    $("#fps-booster-details").css('display', 'grid');
  }
  if(element.id == "calculator") {
    $("#calculator-details").css('display', 'grid');
  }
  if(element.id == "sorting-algo-visualizer") {
    $("#sorting-algo-visualizer-details").css('display', 'grid');
  }
  if(element.id == "falling-sand-game") {
    $("#falling-sand-game-details").css('display', 'grid');
  }
  if(element.id == "snake-classic") {
    $("#snake-classic-details").css('display', 'grid');
  }
}

function unhover(element) {
  element.setAttribute('src', 'Assets/folder_icon_default.svg');
  $("#personal-site-details").css('display', 'none');
  $("#fps-booster-details").css('display', 'none');
  $("#calculator-details").css('display', 'none');
  $("#sorting-algo-visualizer-details").css('display', 'none');
  $("#falling-sand-game-details").css('display', 'none');
  $("#snake-classic-details").css('display', 'none');
  document.removeEventListener('mousemove', onMouseMove);
}
