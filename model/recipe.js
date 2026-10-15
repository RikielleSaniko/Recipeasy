const EMPTY_RECIPE = {
  category: null,
  name: "",
  durationHours: 0,
  durationMinutes: 0,
  description: ""
};

export class Recipe{
  constructor({id, category, name, durationHours, durationMinutes, description}){
    this.id = id;
    this.category = category;
    this.name = name;
    this.durationHours = durationHours;
    this.durationMinutes = durationMinutes;
    this.description = description;
  }
}

export default EMPTY_RECIPE;