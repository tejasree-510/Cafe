// Toggle navbar menu
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Image switcher for home section
document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

// Swiper review carousel
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Order Now button functionality
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const responseBox = document.getElementById('order-response');
        responseBox.style.display = 'block';

        // Optional: hide the message after 5 seconds
        setTimeout(() => {
            responseBox.style.display = 'none';
        }, 5000);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const responseBox = document.getElementById('order-response');
            responseBox.style.display = 'block';

            setTimeout(() => {
                responseBox.style.display = 'none';
            }, 5000);
        });
    });
});
 document.getElementById('reserveForm').addEventListener('submit', function(e) {
    e.preventDefault();  // prevent form from submitting normally

    // grab entered values
    const name = this.name.value;
    const email = this.email.value;
    const date = new Date(this.date.value);
    const formattedDate = date.toLocaleDateString(undefined, {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    // insert dynamic details into message
    document.getElementById('userName').textContent = name;
    document.getElementById('reservationDate').textContent = formattedDate;
    document.getElementById('userEmail').textContent = email;

    // hide form & show confirmation
    this.style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
  });
   function toggleMore(event) {
    event.preventDefault();
    const moreText = document.getElementById("moreText");
    const btn = event.target;

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    }
  }
   document.addEventListener('DOMContentLoaded', () => {
    const resp = document.getElementById('order-response');
    const nameSpan = document.getElementById('coffee-name');
    
    document.querySelectorAll('.order-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const coffee = btn.closest('.box').querySelector('h3').textContent;
        nameSpan.textContent = coffee;
        resp.style.display = 'block';
        // Optional auto-hide:
        // setTimeout(() => resp.style.display = 'none', 5000);
      });
    });
  });