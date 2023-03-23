window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  var abouts = document.querySelectorAll('.revealPull');
  var revealPoint = 150;

  abouts.forEach(function(element) {
    var revealTop = element.getBoundingClientRect().top;
    var revealBottom = element.getBoundingClientRect().bottom;

    if (revealBottom < 0 - revealPoint) {
      element.classList.remove('activePull');
    } else if (revealBottom > 0 - revealPoint && revealTop < window.innerHeight + revealPoint) {
      element.classList.add('activePull');
    } else if (revealTop > window.innerHeight + revealPoint) {
      element.classList.remove('activePull');
    }
  });

  reveals.forEach(function(element) {
    var revealTop = element.getBoundingClientRect().top;
    var revealBottom = element.getBoundingClientRect().bottom;

    if (revealBottom < 0 - revealPoint) {
      element.classList.remove('active');
    } else if (revealBottom > 0 - revealPoint && revealTop < window.innerHeight + revealPoint) {
      element.classList.add('active');
    } else if (revealTop > window.innerHeight + revealPoint) {
      element.classList.remove('active');
    }
  });
}
