// Union types

function shout(s: string | number) {
	if (typeof s === 'string') console.log(s.toUpperCase());
	else console.log(s * 100);
}

// Interfaces & Type Alias

interface Point {
	x: number;
	y: number;
}

interface Point3D extends Point {
	z: number;
}

type Point2D = {
	x: number;
	y: number;
};

// intersection types
type Point4D = Point2D & {
	z: number;
	t: number;
};

const point4d: Point4D = {
	x: 1,
	y: 2,
	z: 3,
	t: 4
};

// Literal Types

type Alignment = 'left' | 'center' | 'right';

// Narrowing

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function move(animal: Fish | Bird) {
	if ('swim' in animal) {
		return animal.swim();
	}

	return animal.fly();
}

// Discriminated Unions

type Circle = {
	kind: 'circle'; // <- discriminator
	radius: number;
};

type Square = {
	kind: 'square';
	sideLength: number;
};

type Triangle = {
	kind: 'triangle';
	baseLength: number;
	height: number;
};

type Shape = Circle | Square// | Triangle

function getArea(s: Shape): number {
	if (s.kind === 'circle') return Math.PI * s.radius ** 2;
	else return s.sideLength ** 2;
}

function getArea2(s: Shape): number {
	switch (s.kind) {
		case 'circle':
			return Math.PI * s.radius ** 2;
		case 'square':
			return s.sideLength ** 2;
		default:
			const exhausted: never = s;
			return exhausted;
	}
}

// Generics

type Some<T> = {value: T};
type None = {};
type Option<T> = Some<T> | None;

// Tuples
type Pair = [number, string];
const p: Pair = [1, 'zwei'];
const [myN, myS] = p;

// Classes
class AdminUser {
	private password: string;
	readonly userName: string;

	constructor() {
		this.password = 'very-safe';
		this.userName = 'admin';
	}

	authenticate(inputPassword: string) {
		return inputPassword === this.password;
	}
}

// Template Literal Types
type Charsets = 'utf-8' | 'base64';
type MediaTypes = 'application/json' | 'text/html' | 'text/csv';
type ContentTypes = `${MediaTypes}; charset=${Charsets}`;

type SomeType = {
	key1: string;
	key2: number;
};

type SomeKey = keyof SomeType;
const someKey: SomeKey = 'key3';

type PropertyChangeEvents<T> = {
	subscribe<Key extends string & keyof T>(eventName: `${Key}Changed`,callback: (newValue: T[Key]) => void
	): void;
};

declare function createObjectWithChangeEvents<T>(obj: T): T & PropertyChangeEvents<T>;

const lara = {
	name: 'Lara Lavendel',
	age: 25,
	city: 'hamburg'
};
const person = createObjectWithChangeEvents(lara);

// person.subscribe('age', () => {});
person.subscribe('cityChanged', city => )
person.subscribe('ageChanged', newAge => console.log(newAge));
person.subscribe('nameChanged', newName => console.log(newName));
