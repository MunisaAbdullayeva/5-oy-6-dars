let productList = document.querySelector('#productsList')

fetch('https://dummyjson.com/recipes')
    .then(request => request.json())
    .then(response => {
        console.log(response.recipes)

        response.recipes.map(item => {
            const recipesElement = document.createElement('div')
            recipesElement.className = "w-[31%] bg-base-200 shadow-lg shadow-slate-600 rounded-lg"
            recipesElement.innerHTML = `
                <img class="w-full h-40 object-cover rounded-lg" src=${item.image} alt=""> 
                <div class="card-body"> 
                    <h2 class="text-lg font-bold">${item.name}</h2> 
                    <p class="flex items-center justify-between"> 
                        <span>Calories Per Serving:</span> 
                        <span id="Calories">${item.caloriesPerServing}</span> 
                    </p> 
                    <p class="flex items-center justify-between"> 
                        <span> 
                            Cook Time Minutes: 
                        </span> 
                        <span>${item.cookTimeMinutes}</span> 
                    </p> 
                    <button class="btn btn-primary btn-block">Add to cart</button> 
                </div> 
                `
            productList.append(recipesElement)
        })
    })