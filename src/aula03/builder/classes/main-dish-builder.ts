import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol'
import { Mealbox } from './meal-box'
import { Rice, Beans, Meat, Beverage, Dessert } from './meals'

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: Mealbox = new Mealbox()

  public reset (): this {
    this._meal = new Mealbox
    return this
  }

  public makeMeal (): this {
    const rice = new Rice('Arroz', 5)
    const breans = new Beans('Feijão', 10)
    const meat = new Meat('Carne', 20)
    this._meal.add(rice, breans, meat)
    return this
  }
  
  public makeBeverage (): this {
    const beverage = new Beverage('Bebida', 7)
    this._meal.add(beverage)
    return this
  }
  
  public makeDessert (): this {
    const dessert = new Dessert('Bebida', 7)
    this._meal.add(dessert)
    return this
  }

  public getMeal(): Mealbox {
    return this._meal
  }

  public getPrice(): number {
    return this._meal.getPrice()
  }
}
