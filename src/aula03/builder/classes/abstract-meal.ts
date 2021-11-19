import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol'

export abstract class AbstractMeals implements MealCompositeProtocol {
  public constructor (private name: string, private price: number) { }
  
  public getPrice (): number {
    return this.price
  }
}
