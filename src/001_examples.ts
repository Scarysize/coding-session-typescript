function compare(arr: any[]) {
	if (arr.length > 10) return arr.slice(0, 10);
	return arr;
}

type User = {
	firstName: string;
	age: number;
	friends: User[];
};

function greet(user: User) {
	// 🔥
	console.log(user.name);

	// ✅
	console.log(user.firstName);
}

function ret() {
	return 1;
}

const foo = [1, 2, 3];

const r = ret();
