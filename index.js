const foodData=require('./food.json');
function listAllFoodItems(data) {
    return data.map(food => food.foodname);
  }

function listFoodItemsByCategory(data, cat) {
    return data.filter(food => food.category === cat).map(food => food.foodname);
  }


function listFoodItemsAboveCalorie(data, c) {
    return data.filter(food=>food.calorie > c).map(food=>food.foodname);
}
 

function listFoodItemsBelowCalorie(data, c) {
    return data.filter(food => food.calorie < c).map(food => food.foodname);
  }


function listFoodItemsByProteinContent(data) {
    return data.sort((a, b) => b.protiens - a.protiens).map(food => food.foodname);
  }


function listFoodItemsByCarbContent(data) {
    return data.sort((a, b) => a.cab - b.cab).map(food => food.foodname);
 }


console.log(listAllFoodItems(foodData));
console.log(listFoodItemsByCategory(foodData,"Nuts"))
console.log(listFoodItemsByCategory(foodData,"Dairy"))
console.log(listFoodItemsAboveCalorie(foodData,100))
console.log(listFoodItemsBelowCalorie(foodData,100))
console.log(listFoodItemsByProteinContent(foodData))
console.log(listFoodItemsByCarbContent(foodData))