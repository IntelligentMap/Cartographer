describe('Circle', function () {

	describe('#init', function () {

		it('uses default radius if not given', function () {
			var circle = Cartographer.circle([0, 0]);
			expect(circle.getRadius()).to.eql(10);
		});

		it('throws error if radius is NaN', function () {
			expect(function () {
				Cartographer.circle([0, 0], NaN);
			}).to.throwException('Circle radius cannot be NaN');
		});

	});

	describe('#getBounds', function () {

		var map, circle;

		beforeEach(function () {
			map = Cartographer.map(document.createElement('div')).setView([0, 0], 4);
			circle = Cartographer.circle([50, 30], {radius: 200}).addTo(map);
		});

		it('returns bounds', function () {
			var bounds = circle.getBounds();

			expect(bounds.getSouthWest()).nearLatLng(new Cartographer.LatLng(49.99820, 29.99720));
			expect(bounds.getNorthEast()).nearLatLng(new Cartographer.LatLng(50.00179, 30.00279));
		});
	});

	describe('Legacy factory', function () {

		var map, circle;

		beforeEach(function () {
			map = Cartographer.map(document.createElement('div')).setView([0, 0], 4);
			circle = Cartographer.circle([50, 30], 200).addTo(map);
		});

		it('returns same bounds as 1.0 factory', function () {
			var bounds = circle.getBounds();

			expect(bounds.getSouthWest()).nearLatLng(new Cartographer.LatLng(49.99820, 29.99720));
			expect(bounds.getNorthEast()).nearLatLng(new Cartographer.LatLng(50.00179, 30.00279));
		});
	});

});
