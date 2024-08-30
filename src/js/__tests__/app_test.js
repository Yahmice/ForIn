import orderByProps from '../app.js';

describe("function test", () => {
	test("correct order", () => {
		const obj = { b: 1, a: 2, c: 3 };
		const order = ['a', 'b'];
		const result = orderByProps(obj, order);
		expect(result).toStrictEqual([
			{ key: 'a', value: 2 },
			{ key: 'b', value: 1 },
			{ key: 'c', value: 3 }
		]);
	});

	test("key not in obj", () =>{
		const obj = { a: 1, b: 2 };
		const order = ['c', 'a', 'b'];
		const result = orderByProps(obj, order);
		expect(result).toEqual([
			{ key: 'a', value: 1 },
			{ key: 'b', value: 2 }
		]);
	});
})