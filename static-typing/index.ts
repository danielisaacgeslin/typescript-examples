/* basic types */
let text: string = 'text';
let count: number = 0;
let valid: boolean = true;
let data: { id: number, name: string } = { id: 1, name: 'daniel' };
let list: { id: number, name: string }[] = [{ id: 1, name: 'daniel' }, { id: 2, name: 'isaac' }];
let whatever: any = { a: 1, b: '2' };
let whateverList: any[] = [{ a: 1, b: '2' }, { c: '3', d: 4 }];
let x: [string, boolean] = ['a', true]; //tuple

/* parameters & returns */
function sum(a: number, b: number): number {
    return a + b;
}
function doNothing(): void {

}
function getHalfs(a: number): number[] {
    return [a / 2, a / 2]
}
function getType(a: any): string {
    return typeof a
}
function optional(a?: string): void {

}