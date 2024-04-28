window.onload = function() {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) { 
        document.querySelector('header').style.backgroundColor = '#355592';
        // document.querySelector('header').style.display = 'flex';
        // document.querySelector('header').style.justifyContent = 'center';
        // document.querySelector('header').style.alignItems = 'center';

      }
      else {
        document.querySelector('header').style.backgroundColor = 'transparent';
        
      }
    });
  };

  function changeStyle(btn) {
    var buttons = document.querySelectorAll('.btn-2');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    btn.classList.add('active');
}

document.getElementById('yoga').addEventListener('click', function() {
    document.getElementById('yazi2').textContent = 'Why are your Yoga?'
    document.getElementById('yazi3').textContent = 'When comes Yoga Your Time.'
    document.getElementById('image').src = 'img/yoga.jpg';
});
document.getElementById('group').addEventListener('click', function() {
    // document.getElementById('group').style.backgroundColor = "red"
    document.getElementById('yazi2').textContent = 'Why are your Group?'
    document.getElementById('yazi3').textContent = 'When comes Group Your Time.'
    document.getElementById('image').src = 'img/group.webp';
});
document.getElementById('solo').addEventListener('click', function() {
    document.getElementById('yazi2').textContent = 'Why are your Solo?'
    document.getElementById('yazi3').textContent = 'When comes Solo Your Time.'
    document.getElementById('image').src = 'img/solo.jpg';
});
document.getElementById('stretching').addEventListener('click', function() {
    document.getElementById('yazi2').textContent = 'Why are your Stretching?'
    document.getElementById('yazi3').textContent = 'When comes Stretching Your Time.'
    document.getElementById('image').src = 'img/stret.webp';
});


document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var icon  = document.getElementById("icon");
  
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
  
    var bmi = weight / ((height / 100) ** 2);
    var result = "BMI: " + bmi.toFixed(2);
  
    if (bmi < 18.5) {
      result += " (Zayıf)";
      icon.style.left = "20%" // BMI değeri 18.5'ten küçükse en sola yerleştir
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result += " (Normal)";
      icon.style.left="35%" // BMI değeri 18.5 ile 24.9 arasındaysa ortaya yerleştir
    } else if (bmi >= 24.9 && bmi < 29.9) {
      result += " (Fazla Kilolu)";
      icon.style.left="50%"
    } else if (bmi >=29.9 && bmi <34.9){
      icon.style.left = "65%"
      result += " (Obez)";
    }
    else if (bmi>35 ){
        icon.style.left="85%"
        result += " (Extremly Obez)";
    }
      document.getElementById("result").textContent = result;
  }
  
  

var isMenuOpen = true;
document.getElementById('barButton').addEventListener('click', function () {
    var navCollapse = document.getElementById('navbarSupportedContent');
    if (isMenuOpen) {
        navCollapse.style.display="block";
    } else {
        navCollapse.style.display="none";
    }
    isMenuOpen = !isMenuOpen;
});

// Örnek olarak BMI değerini 18 olarak ayarlayalım
var bmiValue = 8;
document.documentElement.style.setProperty('--bmi', bmiValue);

