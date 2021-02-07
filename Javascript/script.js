document.querySelector('#search-btn').addEventListener("click",function(){
    const foodMenu = document.getElementById('search-field').value;
    if(foodMenu!=''){
        fetchMealAPI(foodMenu);
    }else{
        console.log("Empty");
    }
})

function fetchMealAPI(foodMenu){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodMenu}`)
    .then(res => res.json())
    .then(data => showMeal(data.meals))
}

function showMeal(data){
    const mealsSection = document.getElementById('food-details');
    data.forEach(mealsInfo => {
        const div = document.createElement('div');
        div.className = 'img-title' ; 
        const mealInfo = `<img src=${mealsInfo.strMealThumb}>
            <p class="title">${mealsInfo.strMeal}</p>`;

            div.innerHTML = mealInfo;
            mealsSection.appendChild(div);
        });
    }
    
  