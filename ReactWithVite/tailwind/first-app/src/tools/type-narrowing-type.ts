export interface Circle {
    radius: number;
    type: "circle";
}

export interface Rectangle {
    width: number;
    heigth: number;
    type: "rectangle";
}

export type Shape = Circle | Rectangle;

export function getArea(shape: Shape) : number {
    if("circle" in shape)
        return Math.PI * shape.radius * shape.radius;

    return shape.heigth * shape.width;
}