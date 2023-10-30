window.onload = () => {
   const button = document.querySelector("#result-btn");

   button.addEventListener('click' , calculatBmi)
}
function calculatBmi(){
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#result")

    if(!height|| isNaN(height) ||height < 0){
        result.innerText = "তোমার কোন তথ্য দাও নাই"
     return;
    }
    else if(!weight|| isNaN(weight) ||weight < 0){
        result.innerText = "তোমার ওজন দিতে ভুলে গেছ।"
    return;
    }
   
   const bmi = (weight / ((height * height) / 10000)).toFixed(2);

   if(bmi <18.5 ){
    result.innerHTML = `তোমার ওজন কম🤣 <br>তোমার BMI ${bmi}`
   }
   else if(bmi >= 18.5&& bmi <24.9){
    result.innerHTML = `Normal👍 <br>তোমার BMI: ${bmi}`
   }
   else if(bmi >=25 && bmi <29.9){
    result.innerHTML =`খাওয়া দাওয়া কম করো😊 <br>তোমার BMI: ${bmi}`
   }
   else if(bmi >=30 && bmi <34.9){
    result.innerHTML = `খাওয়া বেশি হচ্ছে 😒<br>তোমার BMI: ${bmi}`
   }
   else if(bmi >=35 && bmi <39.9){
    result.innerHTML = `তোমার সাস্থ ভালো না। <br>তোমার BMI: ${bmi}`
   }
   else if(bmi >=40){
    result.innerHTML = `তুমি আসুস্থ ডাক্তার দেখাও 🤢<br>তোমার BMI: ${bmi}`
   }
}