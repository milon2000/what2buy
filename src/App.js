import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';

class App extends Component {
  state = {
    recipes: [
      { title: 'Kopytka', ingr: 'mąka', recipe: 'bxsjm', id: '1'},
      { title: 'Zielone kluski', ingr: 'ziemniaki', recipe: 'bxsjm', id: '2'}
    ]
  }
  addRecipe = (recipe) => {
    recipe.id = Math.random();
    let recipes = [...this.state.recipes, recipe];
    this.setState({
      recipes: recipes
    })
  }

  deleteRecipe = (id) => {
    let recipes = this.state.recipes.filter(recipe => {
      return (recipe.id !==id)
    });
    this.setState({
      recipes: recipes
    })
  }
  render() {
    return (
      <div className="App">
        <RecipeList deleteRecipe={this.deleteRecipe} recipes={this.state.recipes} />
        <AddRecipe addRecipe={this.addRecipe} />
      </div>
    );
  }
  
}

export default App;
