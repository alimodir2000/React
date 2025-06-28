export function isString(value: any) : value is string {
    return typeof value === "string";
}

export function isUser(value: any) : value is {name:string}{
    return value && typeof value.name === "string";
}


export function isArray(value:unknown) : value is Array<unknown> {
    return Array.isArray(value);
}

const doc = document.getElementById("test");