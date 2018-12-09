describe('Polyline', function () {

	var c = document.createElement('div');
	c.style.width = '400px';
	c.style.height = '400px';
	var map = new Cartographer.Map(c);
	map.setView(new Cartographer.LatLng(55.8, 37.6), 6);

	describe("#initialize", function () {
		it("doesn't overwrite the given latlng array", function () {
			var originalLatLngs = [
				[1, 2],
				[3, 4]
			];
			var sourceLatLngs = originalLatLngs.slice();

			var polyline = new Cartographer.Polyline(sourceLatLngs);

			expect(sourceLatLngs).to.eql(originalLatLngs);
			expect(polyline._latlngs).to.not.eql(sourceLatLngs);
			expect(polyline.getLatLngs()).to.eql(polyline._latlngs);
		});

		it("should accept a multi", function () {
			var latLngs = [
				[[1, 2], [3, 4], [5, 6]],
				[[11, 12], [13, 14], [15, 16]]
			];

			var polyline = new Cartographer.Polyline(latLngs);

			expect(polyline._latlngs[0]).to.eql([Cartographer.latLng([1, 2]), Cartographer.latLng([3, 4]), Cartographer.latLng([5, 6])]);
			expect(polyline._latlngs[1]).to.eql([Cartographer.latLng([11, 12]), Cartographer.latLng([13, 14]), Cartographer.latLng([15, 16])]);
			expect(polyline.getLatLngs()).to.eql(polyline._latlngs);
		});

		it("should accept an empty array", function () {

			var polyline = new Cartographer.Polyline([]);

			expect(polyline._latlngs).to.eql([]);
			expect(polyline.getLatLngs()).to.eql(polyline._latlngs);
		});

		it("can be added to the map when empty", function () {
			var polyline = new Cartographer.Polyline([]).addTo(map);
			expect(map.hasLayer(polyline)).to.be(true);
		});

	});

	describe("#isEmpty", function () {

		it('should return true for a polyline with no latlngs', function () {
			var polyline = new Cartographer.Polyline([]);
			expect(polyline.isEmpty()).to.be(true);
		});

		it('should return false for simple polyline', function () {
			var latLngs = [[1, 2], [3, 4]];
			var polyline = new Cartographer.Polyline(latLngs);
			expect(polyline.isEmpty()).to.be(false);
		});

		it('should return false for multi-polyline', function () {
			var latLngs = [
				[[1, 2], [3, 4]],
				[[11, 12], [13, 14]]
			];
			var polyline = new Cartographer.Polyline(latLngs);
			expect(polyline.isEmpty()).to.be(false);
		});

	});

	describe("#setLatLngs", function () {
		it("doesn't overwrite the given latlng array", function () {
			var originalLatLngs = [
				[1, 2],
				[3, 4]
			];
			var sourceLatLngs = originalLatLngs.slice();

			var polyline = new Cartographer.Polyline(sourceLatLngs);

			polyline.setLatLngs(sourceLatLngs);

			expect(sourceLatLngs).to.eql(originalLatLngs);
		});

		it("can be set a multi", function () {
			var latLngs = [
				[[1, 2], [3, 4], [5, 6]],
				[[11, 12], [13, 14], [15, 16]]
			];

			var polyline = new Cartographer.Polyline([]);
			polyline.setLatLngs(latLngs);

			expect(polyline._latlngs[0]).to.eql([Cartographer.latLng([1, 2]), Cartographer.latLng([3, 4]), Cartographer.latLng([5, 6])]);
			expect(polyline._latlngs[1]).to.eql([Cartographer.latLng([11, 12]), Cartographer.latLng([13, 14]), Cartographer.latLng([15, 16])]);
		});
	});

	describe('#getCenter', function () {

		it('should compute center of a big flat line on equator', function () {
			var polyline = new Cartographer.Polyline([[0, 0], [0, 90]]).addTo(map);
			expect(polyline.getCenter()).to.eql(Cartographer.latLng([0, 45]));
		});

		it('should compute center of a big flat line close to the pole', function () {
			var polyline = new Cartographer.Polyline([[80, 0], [80, 90]]).addTo(map);
			expect(polyline.getCenter()).to.be.nearLatLng(Cartographer.latLng([80, 45]), 1e-2);
		});

		it('should compute center of a big diagonal line', function () {
			var polyline = new Cartographer.Polyline([[0, 0], [80, 80]]).addTo(map);
			expect(polyline.getCenter()).to.be.nearLatLng(Cartographer.latLng([57, 40]), 1);
		});

		it('should compute center of a diagonal line close to the pole', function () {
			var polyline = new Cartographer.Polyline([[70, 70], [84, 84]]).addTo(map);
			expect(polyline.getCenter()).to.be.nearLatLng(Cartographer.latLng([79, 77]), 1);
		});

		it('should compute center of a big multiline', function () {
			var polyline = new Cartographer.Polyline([[10, -80], [0, 0], [0, 10], [10, 90]]).addTo(map);
			expect(polyline.getCenter()).to.be.nearLatLng(Cartographer.latLng([0, 5]), 1);
		});

		it('should compute center of a small flat line', function () {
			var polyline = new Cartographer.Polyline([[0, 0], [0, 0.090]]).addTo(map);
			map.setZoom(0);  // Make the line disappear in screen;
			expect(polyline.getCenter()).to.be.nearLatLng(Cartographer.latLng([0, 0]), 1e-2);
		});

		it('throws error if not yet added to map', function () {
			expect(function () {
				var polyline = new Cartographer.Polyline([[0, 0], [0, 0.090]]);
				var center = polyline.getCenter();
			}).to.throwException('Must add layer to map before using getCenter()');
		});

	});


	describe("#_defaultShape", function () {

		it("should return latlngs when flat", function () {
			var latLngs = [Cartographer.latLng([1, 2]), Cartographer.latLng([3, 4])];

			var polyline = new Cartographer.Polyline(latLngs);

			expect(polyline._defaultShape()).to.eql(latLngs);
		});

		it("should return first latlngs on a multi", function () {
			var latLngs = [
				[Cartographer.latLng([1, 2]), Cartographer.latLng([3, 4])],
				[Cartographer.latLng([11, 12]), Cartographer.latLng([13, 14])]
			];

			var polyline = new Cartographer.Polyline(latLngs);

			expect(polyline._defaultShape()).to.eql(latLngs[0]);
		});

	});

	describe("#addLatLng", function () {

		it("should add latlng to latlngs", function () {
			var latLngs = [
				[1, 2],
				[3, 4]
			];

			var polyline = new Cartographer.Polyline(latLngs);

			polyline.addLatLng([5, 6]);

			expect(polyline._latlngs).to.eql([Cartographer.latLng([1, 2]), Cartographer.latLng([3, 4]), Cartographer.latLng([5, 6])]);
		});

		it("should add latlng to first latlngs on a multi", function () {
			var latLngs = [
				[[1, 2], [3, 4]],
				[[11, 12], [13, 14]]
			];

			var polyline = new Cartographer.Polyline(latLngs);

			polyline.addLatLng([5, 6]);

			expect(polyline._latlngs[0]).to.eql([Cartographer.latLng([1, 2]), Cartographer.latLng([3, 4]), Cartographer.latLng([5, 6])]);
			expect(polyline._latlngs[1]).to.eql([Cartographer.latLng([11, 12]), Cartographer.latLng([13, 14])]);
		});

		it("should add latlng to latlngs by reference", function () {
			var latLngs = [
				[[11, 12], [13, 14]],
				[[1, 2], [3, 4]]
			];

			var polyline = new Cartographer.Polyline(latLngs);

			polyline.addLatLng([5, 6], polyline._latlngs[1]);

			expect(polyline._latlngs[1]).to.eql([Cartographer.latLng([1, 2]), Cartographer.latLng([3, 4]), Cartographer.latLng([5, 6])]);
			expect(polyline._latlngs[0]).to.eql([Cartographer.latLng([11, 12]), Cartographer.latLng([13, 14])]);
		});

		it("should add latlng on empty polyline", function () {
			var polyline = new Cartographer.Polyline([]);

			polyline.addLatLng([1, 2]);

			expect(polyline._latlngs).to.eql([Cartographer.latLng([1, 2])]);
		});

	});

});
