describe("Transformation", function () {
	var t, p;

	beforeEach(function () {
		t = new Cartographer.Transformation(1, 2, 3, 4);
		p = new Cartographer.Point(10, 20);
	});

	describe('#transform', function () {
		it("performs a transformation", function () {
			var p2 = t.transform(p, 2);
			expect(p2).to.eql(new Cartographer.Point(24, 128));
		});
		it('assumes a scale of 1 if not specified', function () {
			var p2 = t.transform(p);
			expect(p2).to.eql(new Cartographer.Point(12, 64));
		});
	});

	describe('#untransform', function () {
		it("performs a reverse transformation", function () {
			var p2 = t.transform(p, 2);
			var p3 = t.untransform(p2, 2);
			expect(p3).to.eql(p);
		});
		it('assumes a scale of 1 if not specified', function () {
			var p2 = t.transform(p);
			expect(t.untransform(new Cartographer.Point(12, 64))).to.eql(new Cartographer.Point(10, 20));
		});
	});

	describe('#constructor', function () {
		it("allows an array property for a", function () {
			var t2 = Cartographer.transformation([1, 2, 3, 4]);
			expect(t._a).to.eql(t2._a);
			expect(t._b).to.eql(t2._b);
			expect(t._c).to.eql(t2._c);
			expect(t._d).to.eql(t2._d);
		});
	});
});
