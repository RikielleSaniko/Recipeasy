import {AUTH} from './cred';
import AuthService from './auth';
import {Recipe} from '../model/recipe';
import martha from './martha';

class RecipeService{

  async list(){
    const user = AuthService.currentUser;

    if(!user){
      throw new Error("Utilisateur non connecté !")
    }
    const response = await martha.execute("select-recipes", {id: user.id})
    return response.data.map(({id, category, name, duration_hours, duration_minutes, description}) =>
      new Recipe({
        id,
        category: Number(category),
        name,
        durationHours : Number(duration_hours),
        durationMinutes : Number(duration_minutes),
        description,
      })
    );
  }

  async create(recipe){
    const user = AuthService.currentUser;

    if(!user){
      throw new Error("Utilisateur non connecté !")
    }

    const response = await fetch("http://martha.jh.shawinigan.info/queries/insert-recipe/execute", {
      method: 'POST',
      body: JSON.stringify({
        category: recipe.category,
        name: recipe.name.trim(),
        duration_hours: recipe.durationHours,
        duration_minutes: recipe.durationMinutes,
        description: recipe.description,
        user_id: user.id
      }),
      headers: {
        'auth': AUTH
      }
    }).then((r) => r.json())

    if (!response.success) {
      throw new Error(response.error);
    }

    return response.lastInsertId;
  }

  async update(recipe){
    const user = AuthService.currentUser;

    if(!user){
      throw new Error("Utilisateur non connecté !")
    }

    const response = await fetch("http://martha.jh.shawinigan.info/queries/update-recipe/execute", {
      method: 'POST',
      body: JSON.stringify({
        id: recipe.id,
        category: recipe.category,
        name: recipe.name.trim(),
        duration_hours: recipe.durationHours,
        duration_minutes: recipe.durationMinutes,
        description: recipe.description,
        user_id: user.id
      }),
      headers: {
        'auth': AUTH
      }
    }).then((r) => r.json())

    if (!response.success) {
      throw new Error(response.error);
    }
  }

  async remove(recipe){
    const user = AuthService.currentUser;

    if(!user){
      throw new Error("Utilisateur non connecté !")
    }

    const response = await fetch("http://martha.jh.shawinigan.info/queries/delete-recipe/execute", {
      method: 'POST',
      body: JSON.stringify({
        id: recipe.id,
        user_id: user.id
      }),
      headers: {
        'auth': AUTH
      }
    }).then((r) => r.json())

    if (!response.success) {
      throw new Error(response.error);
    }
  }
}

const recipeService = new RecipeService();
export default recipeService;
