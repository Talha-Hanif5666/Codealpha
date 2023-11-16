// Sample recipe data
let recipes = [];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
            <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(recipeItem);
    });
}

// Function to save a recipe
function saveRecipe() {
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Check if the form fields are not empty
    if (name && ingredients && instructions) {
        const recipe = { name, ingredients, instructions };

        // If editing, update the recipe; otherwise, add a new one
        if (editingIndex !== null) {
            recipes[editingIndex] = recipe;
            editingIndex = null;
        } else {
            recipes.push(recipe);
        }

        // Clear the form
        document.getElementById('recipe-name').value = '';
        document.getElementById('ingredients').value = '';
        document.getElementById('instructions').value = '';

        // Display the updated list of recipes
        displayRecipes();
    } else {
        alert('Please fill in all fields');
    }
}

// Function to edit a recipe
let editingIndex = null;

function editRecipe(index) {
    const recipe = recipes[index];

    // Fill the form with the selected recipe
    document.getElementById('recipe-name').value = recipe.name;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;

    // Set the editing index
    editingIndex = index;
}

// Function to delete a recipe
function deleteRecipe(index) {
    // Remove the recipe from the array
    recipes.splice(index, 1);

    // Display the updated list of recipes
    displayRecipes();
}

// Initial display of recipes
displayRecipes();