export function IsEmailValid(str: string): boolean {
    if (!str) return false;
    const pattern = /[A-Za-z0-9-_.]+@[A-Za-z0-9-_.]+\.[A-Za-z0-9-_]{2,}/gi;
    return pattern.test(str);
}

export function IsPhoneValid(str: string): boolean {
    if (!str) return false;
    if (str.length > 10 && str.length < 13) return true;
    return false;
}

export function IsPasswordValid(str: string): boolean {
    if (!str) return false;

    if (str.length < 8) return false;

    const atLeastOneUppercasePattern = /[A-Z]+/g;
    if (!atLeastOneUppercasePattern.test(str)) return false;

    const atLeastOneNonAlphaNumerciPattern = /[^A-Za-z0-9]+/g;
    if (!atLeastOneNonAlphaNumerciPattern.test(str)) return false;


    const sameTwoNonAlphaNumericalBeInRow = /([^A-Za-z0-9])\1/g;
    if (sameTwoNonAlphaNumericalBeInRow.test(str))
        return false;

    return true;
}