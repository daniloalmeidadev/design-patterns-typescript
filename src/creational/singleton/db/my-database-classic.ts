import { User } from "../models/user";

export class MyDatabaseClassic {
    // Pode ser MyDatabaseClassic ou Nulo, iniciando com valor nulo (= null)
    private static instance: MyDatabaseClassic | null = null;

    private users: User[] = [];

    private constructor() {}

    public static getInstance(): MyDatabaseClassic {
        if (MyDatabaseClassic.instance === null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic.instance;
    }

    public setUser(user: User): void {
        this.users.push(user);
    }

    public removeUser(index: number): void {
        this.users.splice(index, 1);
    }

    public getUsers(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}
