import React, { Component } from 'react';

class RecipeList extends Component {
    render() { 
/*      const title = this.props.title;
        const ingr = this.props.ingr;
        const recipe = this.props.recipe; */
        const { recipes, deleteRecipe } = this.props;
        
        const recipeList = recipes.map(recipe => {
            return(
                <div className="single-recipe" key={recipe.id}>
                <h2 className="single-recipe__title">{ recipe.title }</h2>
                <ul className="single-recipe__ingr">
                    <li>{ recipe.ingr }</li>
                </ul>
                <div className="single-recipe__recipe">
                    <p>{ recipe.recipe }</p>
                </div>
                <button className="single-recipe__delete" onClick={() => {deleteRecipe(recipe.id)}}>Delete Recipe</button>
            </div>
            );
        })
        return ( 
            <div className="recipeList">
                {recipeList}
            </div>
         );
    }
}
 
export default RecipeList;