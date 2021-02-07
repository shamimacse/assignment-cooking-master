document.querySelector('#search-btn').addEventListener("click",function(){
    const foodMenu = document.getElementById('search-field').value;
    
    if(foodMenu!=''){
        fetchMealItem(foodMenu);
    }else{
        console.log("Empty");
    }
      })
function fetchMealItem(foodMenu){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodMenu}`)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

function displayMeal(data){
    const displayFoodArea = document.getElementById('food-details');

    data.forEach(mealsInfo => {
        const div = document.createElement('div');
        div.className = 'menu-item' ; 

        const FoodMenuItem = `<img src=${mealsInfo.strMealThumb}>
            <p class="food-item">${mealsInfo.strMeal}</p>`;

            div.innerHTML = FoodMenuItem;
            displayFoodArea.appendChild(div);
        });
    }
    
  