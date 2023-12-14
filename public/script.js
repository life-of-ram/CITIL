var counter = 1;

function showSlide(slideNumber) {
  document.querySelectorAll('.slider img').forEach(function (slide) {
    slide.style.display = 'none';
  });

  document.getElementById('slide' + slideNumber).style.display = 'block';

  document.querySelectorAll('.slider__nav a').forEach(function (navLink, index) {
    if (index + 1 === slideNumber) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}

function updateSlider() {
  showSlide(counter);
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}

// Update slide when dot is clicked
document.querySelectorAll('.slider__nav a').forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    counter = index + 1;
    showSlide(counter);
  });
});

showSlide(counter);
setInterval(updateSlider, 4000);



//incrementer//
function animateNumber(target, duration, element) {
  const targetElement = document.getElementById(element);
  const startNumber = parseInt(targetElement.innerText.replace(/[^\d]/g, ''));
  const change = target - startNumber;
  let currentTime = 0;
  const increment = 20;

  function animate() {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, startNumber, change, duration);
    targetElement.innerText = numberWithCommas(Math.round(val));
    if (currentTime < duration) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function animateOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumber(90, 2000, "number1");
      animateNumber(10000, 2000, "number2");
      animateNumber(110, 2000, "number3");
      animateNumber(89, 2000, "number4");
    }
  });
}

const number1Element = document.getElementById('number1');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(animateOnScroll, options);
observer.observe(number1Element);

// focus areas//
document.addEventListener("DOMContentLoaded", function () {
  const focon1 = document.querySelector(".focon1");
  const focon2 = document.querySelector(".focon2");
  const dots = document.querySelectorAll(".dotz");

  // Function to show focon1 and hide focon2
  function showFocon1() {
    focon1.style.display = "block";
    focon2.style.display = "none";
  }

  // Function to show focon2 and hide focon1
  function showFocon2() {
    focon1.style.display = "none";
    focon2.style.display = "block";
  }

  // Add click event listeners to the dots
  dots[0].addEventListener("click", function () {
    showFocon1();
    // Add or remove the "active" class for dot styling if needed
    dots[0].classList.add("active");
    dots[1].classList.remove("active");
  });

  dots[1].addEventListener("click", function () {
    showFocon2();
    // Add or remove the "active" class for dot styling if needed
    dots[1].classList.add("active");
    dots[0].classList.remove("active");
  });

  // Function to automatically switch slides every 3000ms (3 seconds)
  function autoSlide() {
    if (focon1.style.display === "block") {
      showFocon2();
      dots[1].classList.add("active");
      dots[0].classList.remove("active");
    } else {
      showFocon1();
      dots[0].classList.add("active");
      dots[1].classList.remove("active");
    }
  }

  // Set an interval to automatically switch slides every 3000ms (3 seconds)
  setInterval(autoSlide, 3000);

  // Show focon1 initially (or you can set the initial state as needed)
  showFocon1();
});



//testimonials//
const testimonials = [
  {
    imgSrc: "img/GenZMarketers.png",
    text: "CITBIF has been instrumental in helping our startup thrive. Their comprehensive support system, mentorship, and access to resources have been invaluable in transforming our idea into a successful business. We are grateful for their guidance and expertise, which has accelerated our growth and positioned us for success in the market.",
    name: "Sri Harshit",
    designation: "Co-Founder, Gen Z Marketers",
  },
  {
    imgSrc: "img/GOK.png",
    text: "CITBIF has been a game-changer for our business. Their industry connections and access to investors have opened doors for us that we never thought possible. The guidance and mentorship we received from their experienced team have been invaluable in refining our business strategy and scaling our operations. We are proud to be associated with CITBIF and grateful for their ongoing support. ",
    name: "Sriram",
    designation: "Founder, GOK Studio",
  },
  {
    imgSrc: "img/Arwin.png",
    text: "The support we received from CITBIF has been exceptional. Their state-of-the-art facilities and networking opportunities have provided us with the perfect environment to nurture our innovation. The mentorship and seed funding we received have been pivotal in launching our product and gaining traction in the industry. ",
    name: "Manoj",
    designation: "Founder, ARWIN Networks",
  },
];

let currentTestimonialIndex = 0;
const testimonialContainers = [
  document.getElementById("testimonial1"),
  document.getElementById("testimonial2"),
  document.getElementById("testimonial3"),
];

function rotateTestimonials() {
  testimonialContainers.forEach((container, index) => {
    const testimonialIndex = (currentTestimonialIndex + index) % testimonials.length;
    container.innerHTML = `
    <img class="userimage" src="${testimonials[testimonialIndex].imgSrc}" alt="user-image">
    <p class="text1">${testimonials[testimonialIndex].text}</p>
    <h4 class="username">${testimonials[testimonialIndex].name}</h4>
    <h4 class="username1">${testimonials[testimonialIndex].designation}</h4>
  `;
  });

  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
}

rotateTestimonials();

setInterval(rotateTestimonials, 6000);

//additional testimonials

const additionalTestimonials = [
  {
    imgSrc: "img/testimonial/Anshumaan Krishnan Ayyangar.jpg",
    text: "An imperative array of start-ups and a curious, better-informed set of student entrepreneurs ! The growth of this campus and its facilities is something any alumni will be proud of and I am no different. Wishing CIT,CITIL and the stakeholders all the very best.",
    name: "Anshumaan Krishnan Ayyangar",
    designation: "Global Innovation Lead",
  },
  {
    imgSrc: "img/testimonial/Karthick Mari Pitchai.jpg",
    text: "It’s wonderful initiative! That’s too from first year students. I can see lot of potential from students of CIT, in my opinion CIT will have too many student startups incubated inside in another 3 years of span.The reason behind is CIT incubation centre and the team! Keep supporting!",
    name: "Karthick Mari Pitchai",
    designation: "Founder and CEO Karking",
  },
  {
    imgSrc: "img/testimonial/Noorjahan.jpg",
    text: "Campus and the infrastructure facility is very useful to students. Good, Hospitality, Responsive and interactive students and future entrepreneurs. Good initiatives and Talented. All the best for future entrepreneurs",
    name: "Dr. A. Noorjahan",
    designation: "Biofocus Scientific Solutions",
  },
  {
    imgSrc: "img/testimonial/Vivek Manik.jpg",
    text: "Students were very keen and attentive. Hospitality of Professors was very good. Thank you Vijay ananth sir for initiating and arranging this.",
    name: "Dr. Vivek Manik,",
    designation: "Principal Scientist, IIT Madras",
  },
];

const additionalTestimonialContainers = [
  document.getElementById("testimonial4"),
  document.getElementById("testimonial5"),
  document.getElementById("testimonial6"),
];

let currentAdditionalTestimonialIndex = 0;

function rotateAdditionalTestimonials() {
  additionalTestimonialContainers.forEach((container, index) => {
    const testimonialIndex = (currentAdditionalTestimonialIndex + index) % additionalTestimonials.length;
    container.innerHTML = `
    <img class="userimage" src="${additionalTestimonials[testimonialIndex].imgSrc}" alt="user-image">
    <p class="text1"><br>${additionalTestimonials[testimonialIndex].text}</p>
    <p class="username1">${additionalTestimonials[testimonialIndex].name}<br>${additionalTestimonials[testimonialIndex].designation}</p>
  `;
  });

  currentAdditionalTestimonialIndex = (currentAdditionalTestimonialIndex + 1) % additionalTestimonials.length;
}

rotateAdditionalTestimonials();

setInterval(rotateAdditionalTestimonials, 6000);


let isFlapping = false;
let gifElement = document.getElementById("butter")

function startFlapping() {
  if (!isFlapping) {
    isFlapping = true;
    requestAnimationFrame(flappingAnimation);
  }
}

function stopFlapping() {
  isFlapping = false;
}

function flappingAnimation() {
  if (isFlapping) {
    gifElement.style.marginTop = '380px';
    setTimeout(() => {
      gifElement.style.marginTop = '400px';
      requestAnimationFrame(flappingAnimation);
    }, 500);
  }
}
