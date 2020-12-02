const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const anchors1 = document.querySelector(".anch1");
const anchors2 = document.querySelector(".anch2");
const anchors3 = document.querySelector(".anch3");
const anchors4 = document.querySelector(".anch4");
const anchors5 = document.querySelector(".anch5");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

anchors1.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

anchors2.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

anchors3.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

anchors4.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

anchors5.addEventListener("click", () => {
    console.log("click closed");
    navLinks.classList.remove("open");
});

// text animations

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 300;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };