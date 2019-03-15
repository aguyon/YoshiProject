// titre meeting //

anime.timeline({loop: true})
  .add({
    targets: '#titremeeting .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: function(el, i) {
      return 800 * i;
    }
  }).add({
    targets: '#titremeeting',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// button //

const mapbutton = document.getElementById("bigmapbutton")

const openbutton = () => {top.location.href="https://www.google.com/maps/d/u/0/viewer?mid=192M6t3LffQyZpKAUdXm01ddGeqgF6y9y&ll=52.80640147441079%2C10.685783677490463&z=5"};

bigmapbutton.addEventListener('click', openbutton);