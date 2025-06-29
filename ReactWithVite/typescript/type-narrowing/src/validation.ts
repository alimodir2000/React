export function isEmpty(value: string): boolean {
    if (!value)
        return true;
    return false;
}

export function hasEnoughLenght(value: string, n: number): boolean {
    if (value.length >= n)
        return true;
    return false;
}

export function isValidEmail(value: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(value);
}

export function hasAtLeastNNonAlphanumericCharacters(value: string, n: number = 1): boolean {
    const pattern = /[^a-zA-Z0-9\s]/g;
    const matches = value.match(pattern);
    return matches !== null && matches.length >= n;
}

export function hasTwoSameNonAlphanumericCharactesInTheRow(value: string): boolean {
    const pattern =  /[^a-zA-Z0-9\s]{2,}/;
    return !pattern.test(value);
}

export function isEqual(value1: string, value2: string): boolean {
    return value1 === value2;
}

export function hasAtLeastNUppercaseCharacters(value:string, n: number = 1) : boolean {
    const matches = value.match(/[A-Z]/g);
    return matches !== null && matches.length >= n ;
}
export function hasAtLeastNLowercaseCharacters(value:string, n: number = 1) : boolean {
    const matches = value.match(/[a-z]/g);
    return matches !== null && matches.length >= n ;
}