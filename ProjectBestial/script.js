let flag = 0;
let flag2 = 0;

document.getElementById("copyright_stuff").innerHTML = "Copyright © 2023 Jon Tolentino";

function showList() {
  if (flag == 0) {
	document.getElementById("downA").style.display = "block";
	document.getElementById("upA").style.display = "none";
  }
  let x = document.getElementById("listStuff");
  x.style.display = "block";
  flag = 1;
}

function hideList() {
  if (flag == 1) {
	document.getElementById("upA").style.display = "block";
	document.getElementById("downA").style.display = "none";
  }
  let x = document.getElementById("listStuff");
  x.style.display = "none";
  flag = 0;
}

// Diff

function showList1() {
  if (flag2 == 0) {
	document.getElementById("downAf").style.display = "block";
	document.getElementById("upAf").style.display = "none";
  }
  let x = document.getElementById("listStuff_F");
  x.style.display = "block";
  flag2 = 1;
}

function hideList1() {
  if (flag2 == 1) {
	document.getElementById("upAf").style.display = "block";
	document.getElementById("downAf").style.display = "none";
  }
  let x = document.getElementById("listStuff_F");
  x.style.display = "none";
  flag2 = 0;
}
