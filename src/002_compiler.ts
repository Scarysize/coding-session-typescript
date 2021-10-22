// primitives
const s: string = 'foo';
const n: number = 2.4;
const b: boolean = !true;

// arrays
const array: number[] = [1, 2, 3];
const array2: Array<number> = [4, 5, 6];

// functions
function fn(bar: string): number {
	return bar.length;
}

function printName(obj: {name: string; age: number}) {
	console.log(obj.name);
}

function optPrintName(obj: {name?: string}) {
	obj.name.toUpperCase();

	if (obj.name) console.log(obj.name.toUpperCase());

	// optional chaining
	return obj.name?.toUpperCase();
}

declare namespace MyUntypedLibrary {
	function makeGreeting(s: string): string;
}

const greeting = MyUntypedLibrary.makeGreeting('hello');
