const test = require("ava")
const discorder = require(".")

test("main", (t) => {
	t.is(typeof discorder, "function")
})
