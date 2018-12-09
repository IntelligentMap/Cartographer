describe('General', function () {
	describe('noConflict', function () {
		var leaflet = L;

		after(function () {
			L = leaflet;
		});

		expect(Cartographer.noConflict()).to.eql(leaflet);
	});

	describe('namespace extension', function () {
		Cartographer.Util.foo = 'bar';
		Cartographer.Foo = 'Bar';

		expect(Cartographer.Util.foo).to.eql('bar');
		expect(Cartographer.Foo).to.eql('Bar');
	});
});
