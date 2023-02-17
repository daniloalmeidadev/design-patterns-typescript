import { MyDatabaseClassic } from "./db/my-database-classic";
import { User } from "./models/user";

const myDatabaseClassic = MyDatabaseClassic.getInstance();

const user_a: User = { "name": "Joana", age: 26 };
const user_b: User = { "name": "Leticia", age: 28 };
const user_c: User = { "name": "Alvaro", age: 33 };

myDatabaseClassic.setUser(user_a);
myDatabaseClassic.setUser(user_b);
myDatabaseClassic.setUser(user_c);

myDatabaseClassic.getUsers();

