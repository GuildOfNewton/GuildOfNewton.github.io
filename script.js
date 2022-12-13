function openNav() {
  document.getElementById("sidebar").style.width = "30%";
  document.getElementById("page_body").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = 0;
  document.getElementById("page_body").style.marginLeft = "0";
}

function toggleNav() {
  open = document.getElementById("sidebar").style.width;

  if ( open == "30%") {
    closeNav()
  }else{
    openNav()
  }
}

function loadEvent() {
  is_open=true
}
