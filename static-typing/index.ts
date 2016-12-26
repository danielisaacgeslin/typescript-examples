/* basic types */
let text: string = 'text';
let count: number = 0;
let valid: boolean = true;
let data: { id: number, name: string } = { id: 1, name: 'daniel' };
let list: { id: number, name: string }[] = [{ id: 1, name: 'daniel' }, { id: 2, name: 'isaac' }];
let whatever: any = { a: 1, b: '2' };
let whateverList: any[] = [{ a: 1, b: '2' }, { c: '3', d: 4 }];
let x: [string, boolean] = ['a', true]; //tuple

/* arrow functions */
const arrow_1 = (a) => { a };
const arrow_2 = a => { a };
const arrow_3 = a => a;
const arrow_4 = (a, b) => a + b;
const arrow_5 = () => { this.test }; //this at the top of the js file

/* parameters & returns */
function sum(a: number, b: number): number {
    return a + b;
}
const arrowSum = (a: number, b: number): number => a + b;
const doNothing = (): void => { };
const getHalfs = (a: number): number[] => [a / 2, a / 2];
const getType = (a: any): string => typeof a;