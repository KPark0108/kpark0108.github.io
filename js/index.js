const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}


//HOME-slider

var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


   //REVIEW-slider

   var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView:'auto',
  });




//BODY PORTRAIT
  var swiper = new Swiper(".bodypf-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:4,
        },
    },
  });

      //Results-slider

      var swiper = new Swiper(".results-slider", {
        spaceBetween: 40,
        grabCursor: true,
        loop:true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:2,
            },
            991:{
                slidesPerView:3,
            },
        },
    });


    //Story-slider

    var swiper = new Swiper(".story-slider", {
        spaceBetween: 20,
        grabCursor: true,
        loop:false,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:2,
            },
            991:{
                slidesPerView:3,
            },
        },
    });

  //TDEE Calculator

  const calculateButton = document.getElementById("calculate-button");

  calculateButton.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const activityLevel = document.getElementById("activity-level").value;
  
    console.log(gender)
        // Check if age is within range
     if (age < 0 || age > 100) {
        document.getElementById("result").textContent = "Please enter a valid age between 0 and 100.";
        return;
     }

      // Check if all input fields have values
    if (!weight || !height || !age || !gender || !activityLevel) {
        document.getElementById("result").textContent = "Please fill out all fields.";
        return;
    }

    const bmr = calculateBMR(weight, height, age, gender);
    const tdee = calculateTDEE(bmr, activityLevel);
  
    document.getElementById("result").textContent = `Your TDEE is ${tdee} calories per day.`;
  });
  
  function calculateBMR(weight, height, age, gender) {
    let bmr;
  
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age);
    }
  
    return bmr;
  }
  
  function calculateTDEE(bmr, activityLevel) {
    const tdee = bmr * activityLevel;
    return Math.round(tdee);
  }
  
