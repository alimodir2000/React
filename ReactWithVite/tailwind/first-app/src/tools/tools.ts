export function isNumber(value: unknown): boolean {
    if (typeof value === "number")
        return true;
    return false;

}

export function processValue(value: unknown): number | string | boolean | null {
    if (typeof value === "number") {
        return value * 2;
    }
    if (typeof value === "string")
        return value.toUpperCase();

    if (typeof value === "boolean")
        return !value;

    return null;

}

export function printTruthy(value: unknown) {
    if (value)
        console.log("Truthy");
    console.log("Falsy");
}

export function isArray(value: unknown): boolean {
    if (Array.isArray(value) && value.length > 0)
        return true;
    return false;
}

export function logIfEqual(x: string | number, y: number | boolean): void {
    if (typeof x === typeof y) {
        console.log(`log is Equal: ${x} - ${y} : ${typeof x}`);
    }
}