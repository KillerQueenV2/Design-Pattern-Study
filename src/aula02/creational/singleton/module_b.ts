import { MyDatabaseFunction } from './db/my-database-function'
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a'

const myDatabaseClassic = MyDatabaseFunction
myDatabaseClassic.add({ name: 'Davi', age: 19 })
myDatabaseClassic.add({ name: 'Bruna', age: 27 })
myDatabaseClassic.add({ name: 'Katerose', age: 22 })
myDatabaseClassic.add({ name: '2CL', age: 20 })
myDatabaseClassic.add({ name: 'Nebula', age: 16 })
myDatabaseClassic.show()

console.log(myDatabaseClassic === myDatabaseFromModuleA)
