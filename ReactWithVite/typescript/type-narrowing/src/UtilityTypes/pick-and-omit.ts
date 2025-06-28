export type User = {
    id: number;
    name: string;
    age : number;
}

export interface Todo {
    id: number;
    title: string;
    description : string;
    completed: boolean;
}

export type UserWithoutAge = Pick<User, "id" | "name">;
export type UserWithAgeOnly = Omit<User, "id" | "name">;


export type TodoTitle = Pick<Todo, "title">;
export type TodoViewDto = Omit<Todo, "id">;
