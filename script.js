function openNav() {
  document.getElementById("sidebar").style.width = "20%";
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

function loadFrame(url, name) {
  var div = document.getElementById("calendar_div");
  var placeholder = document.getElementById("cal_loading");
  var frame = document.createElement("iframe");
  frame.src = url;
  frame.classList.add("calendar");
  frame.style.visibility = "visible";
  let trash = div.removeChild(placeholder);
  div.appendChild(frame);
}

function loadEvent() {
  is_open=true;
  loadFrame("https://calendar.google.com/calendar/embed?src=c_7b7bdc3cd4d3329ab32369b9ad5f9f88747abde1550fa88f70ab593f32dce573%40group.calendar.google.com&ctz=America%2FChicago", "calendar");
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}
