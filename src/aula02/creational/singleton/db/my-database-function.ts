import { User } from '../interfaces/User'


export const MyDatabaseFunction = (function() {
  const users: User[] = []

  return {
    add (user: User) {
      users.push(user)
    },
    
    remove (index: number): void {
      users.splice(index, 1)
    },
  
    show (): void {
      for (const user of this.users) {
        console.log(user)
      }
    }
  }
})()
