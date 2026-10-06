declare let x: number;
declare let y: object;
declare let z: {
    name: string;
};
declare let a: Array<string>;
declare let b: number[];
declare let c: number[];
declare let d: () => void;
declare function myfun(): void;
declare let e: any;
declare let f: unknown;
declare let g: [number, string];
declare let h: number | string;
declare let i: "A" | "B";
type User = {
    readonly id: number;
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
    fun?: (x: number, y: string) => string;
};
declare let user1: User;
declare let user2: User;
type Person = {
    name: string;
    age: number;
};
type Emplyee = {
    salary: number;
};
type test = Person & Emplyee;
declare let user3: Person & Emplyee;
interface IUser {
    readonly id: number;
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
    fun?: (x: number, y: string) => string;
}
declare let user4: IUser;
declare let j: unknown;
declare let k: string;
declare let l: string;
//# sourceMappingURL=index.d.ts.map