import { MyDatabaseClassic } from "./db/my-database-classic";
import { User } from "./models/user";

const myDatabaseClassic = MyDatabaseClassic.getInstance();

const user_a: User = { "name": "João", age: 26 };
const user_b: User = { "name": "Maria", age: 28 };
const user_c: User = { "name": "Luiz", age: 33 };

myDatabaseClassic.setUser(user_a);
myDatabaseClassic.setUser(user_b);
myDatabaseClassic.setUser(user_c);

myDatabaseClassic.removeUser(1);

myDatabaseClassic.getUsers();

