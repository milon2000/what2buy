import React, { Component } from 'react';

class AddRecipe extends Component {
    state= {
        title: null,
        ingr: null,
        recipe: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addRecipe(this.state);
    }
    render() { 
        return ( 
            <div className="add-recipe">
                <form className="add-recipe__form" onSubmit={this.handleSubmit}>
                    <input type="text" name="title" id="title" onChange={this.handleChange}></input>
                    <input type="text" name="ingr" id="ingr" onChange={this.handleChange}></input>
                    <input type="text" name="recipe" id="recipe" onChange={this.handleChange}></input>
                    <button>Add Recipe</button>
                </form>
            </div>
         );
    }
}
 
export default AddRecipe;