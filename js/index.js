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


  //TDEE Calculator

  const calculateButton = document.getElementById("calculate-button");

  calculateButton.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const activityLevel = document.getElementById("activity-level").value;
  
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
  