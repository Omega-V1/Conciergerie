/* Numero de télephone */

function formatPhoneNumber(input) {

  let phoneNumber = input.value.replace(/\s/g, '');

  phoneNumber = phoneNumber.substring(0, 10);
  phoneNumber = phoneNumber.replace(/(\d{2})(?=\d)/g, '$1 ');
  input.value = phoneNumber;
}

/* Scroll ID */

const allLinks = document.querySelectorAll('.link a, .reservation a');

allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


/* Images Réservation */


var slideIndex = 1;
var img = ['img/1.webp', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];

function openModal(imgSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
    showSlides(slideIndex);
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var modalImg = document.getElementById('modalImg');
    if (n > img.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = img.length;
    }
    modalImg.src = img[slideIndex - 1];
}


/* Equipement */



var Bouton10 = document.getElementById("mon-bouton-10");
var popup = document.getElementById("popup");

Bouton10.addEventListener("click", function () {
    popup.classList.add("active");
});

var crossBtn = document.querySelector(".cross");
crossBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.remove("active");
});




var Bouton11 = document.getElementById("mon-bouton-11");
var popup1 = document.getElementById("popup-1");

Bouton11.addEventListener("click", function () {
    popup1.classList.add("active");
});

var crosBtn = document.querySelector(".cros");
crosBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup1.classList.remove("active");
});


