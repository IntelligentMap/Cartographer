describe("Control.Scale", function () {
	it("can be added to an unloaded map", function () {
		var map = Cartographer.map(document.createElement('div'));
		new Cartographer.Control.Scale().addTo(map);
	});
});
