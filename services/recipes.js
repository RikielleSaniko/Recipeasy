import {AUTH} from './cred';
import AuthService from './auth';
import {Recipe} from '../model/recipe';

class RecipeService{

  async list(){
    const user = AuthService.currentUser;

    if(!user){
      throw new Error("Utilisateur non connecté !")
    }

    const response = await fetch("http://martha.jh.shawinigan.info/queries/select-recipes/execute", {
      method: 'POST',
      body: JSON.stringify({id: user.id}),
      headers: {
        'auth': AUTH
      }
    }).then((r) => r.json())

    if (!response.success) {
      throw new Error(response.error);
    }

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
}

const service = new RecipeService();
export default service;
