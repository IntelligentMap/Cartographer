---
layout: v2
title: Plugins
bodyclass: plugins-page
---

## Cartographer Plugins

While Cartographer is meant to be as lightweight as possible, and focuses on a core set of features, an easy way to extend its functionality is to use third-party plugins. Thanks to the awesome community behind Cartographer, there are literally hundreds of nice plugins to choose from.

---

<div id="toc" class="clearfix">
	<div class="toc-col">
		<h4>Tile &amp; image layers</h4>

		<ul>
			<li> <a href='#basemap-providers'>Basemap providers</a></li>
			<li> <a href='#basemap-formats'>Basemap formats</a></li>
			<li> <a href='#non-map-base-layers'>Non-map base layers</a></li>
			<li> <a href='#tileimage-display'>Tile/image display</a></li>
			<li> <a href='#tile-load'>Tile load</a></li>
			<li> <a href='#vector-tiles'>Vector tiles</a></li>
		</ul>

		<h4>Overlay data</h4>

		<ul>
			<li> <a href='#overlay-data-formats'>Overlay data formats</a></li>
			<li> <a href='#dynamiccustom-data-loading'>Dynamic data loading</a></li>
			<li> <a href='#synthetic-overlays'>Synthetic overlays</a></li>
			<li> <a href='#data-providers'>Data providers</a></li>
		</ul>
	</div>
	<div class="toc-col">

		<h4>Overlay Display</h4>
		<ul>
			<li><a href="#markers--renderers">Markers &amp; renderers</a></li>
			<li><a href="#overlay-animations">Overlay animations</a></li>
			<li><a href="#clusteringdecluttering">Clustering/decluttering</a></li>
			<li><a href="#heatmaps">Heatmaps</a></li>
			<li><a href="#dataviz">DataViz</a></li>
		</ul>
		<h4>Overlay interaction</h4>
		<ul>
			<li><a href="#edit-geometries">Edit geometries</a></li>
			<li><a href="#time--elevation">Time &amp; elevation</a></li>
			<li><a href="#search--popups">Search &amp; popups</a></li>
			<li><a href="#areaoverlay-selection">Area/overlay selection</a></li>
		</ul>
	</div>
	<div class="toc-col">
		<h4>Map interaction</h4>
		<ul>
			<li><a href="#layer-switching-controls">Layer switching controls</a></li>
			<li><a href="#interactive-panzoom">Interactive pan/zoom</a></li>
			<li><a href="#bookmarked-panzoom">Bookmarked pan/zoom</a></li>
			<li><a href="#fullscreen-controls">Fullscreen</a></li>
			<li><a href="#minimaps--synced-maps">Minimaps &amp; synced maps</a></li>
			<li><a href="#measurement">Measurement</a></li>
			<li><a href="#mouse-coordinates">Mouse coordinates</a></li>
			<li><a href="#events">Events</a></li>
			<li><a href="#user-interface">User interface</a></li>
			<li><a href="#printexport">Print/export</a></li>
			<li><a href="#geolocation">Geolocation</a></li>
		</ul>
	</div>
	<div class="toc-col">
		<h4>Miscellaneous</h4>
		<ul>
			<li><a href="#geoprocessing">Geoprocessing</a></li>
			<li><a href="#routing">Routing</a></li>
			<li><a href="#geocoding">Geocoding</a></li>
			<li><a href="#plugin-collections">Plugin collections</a></li>
		</ul>
		<h4>Integration</h4>
		<ul>
			<li><a href="#frameworks--build-systems">Frameworks &amp; build systems</a></li>
			<li><a href="#3rd-party-integration">3<sup>rd</sup> party</a></li>
		</ul>
		<hr>
		<a href="#develop-your-own">Develop your own</a>
	</div>

</div>


## Tile & image layers

The following plugins allow loading different maps and provide functionality to tile and image layers.

* [Basemap providers](#basemap-providers)
* [Basemap formats](#basemap-formats)
* [Non-map base layers](#non-map-base-layers)
* [Tile/image display](#tileimage-display)
* [Tile load](#tile-load)
* [Vector tiles](#vector-tiles)


### Basemap providers

Ready-to-go basemaps, with little or no configuration at all.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/leaflet-extras/leaflet-providers">leaflet-providers</a>
		</td><td>
			Contains configurations for various free tile providers &mdash; OSM, OpenCycleMap, Stamen, Esri, etc.
		</td><td>
			<a href="https://github.com/leaflet-extras">leaflet-extras members</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/tontita/Cartographer.KoreanTmsProviders">Cartographer.KoreanTmsProviders</a>
		</td><td>
			Contains configurations for various (South) Korean tile providers — Daum, Naver, VWorld, etc.
		</td><td>
			<a href="https://github.com/tontita/">Seong Choi</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/htoooth/Cartographer.ChineseTmsProviders">Cartographer.ChineseTmsProviders</a>
		</td><td>
			Contains configurations for various Chinese tile providers — TianDiTu, MapABC, GaoDe, etc.
		</td><td>
			<a href="https://github.com/htoooth/">Tao Huang</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://esri.github.io/esri-leaflet">Esri Cartographer</a>
		</td><td>
			A set of tools for using ArcGIS services with Cartographer. Support for map services, feature layers, ArcGIS Online tiles and more.
		</td><td>
			<a href="https://github.com/patrickarlt/">Patrick Arlt</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/aparshin/leaflet-GIBS">Cartographer.GIBS</a>
		</td><td>
			 <a href="https://earthdata.nasa.gov/gibs">NASA EOSDIS GIBS</a> imagery integration. The plugin provides <a href="https://wiki.earthdata.nasa.gov/display/GIBS/GIBS+Available+Imagery+Products">96 daily updated layers</a> with satellite imagery and science parameters. <a href="http://aparshin.github.io/leaflet-GIBS/examples/">Demo</a>.
		</td><td>
			<a href="https://github.com/aparshin">Alexander Parshin</a>
		</td>
	</tr>
        <tr>
		<td>
			<a href="https://github.com/knreise/L.TileLayer.Kartverket">L.TileLayer.Kartverket</a>
		</td><td>
			Provides easy setup of the tile layers from <a href="http://kartverket.no/Kart/Gratis-kartdata/Cache-tjenester/">Kartverket</a> (The Norwegian Mapping Authority)
		</td><td>
			<a href="https://github.com/knreise">Kultur og naturreise</a> / <a href="https://github.com/atlefren">Atle Frenvik Sveen</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/sigdeletras/Cartographer.Spain.WMS">Cartographer.Spain.WMS</a>
		</td><td>
			Provides easy setup for several Web Map Services (WMS) layers for Spain (PNOA, IGN base, Catastro, etc), from Spanish mapping agencies.
		</td><td>
			<a href="https://github.com/sigdeletras">Patricio Soriano</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/GeoSensorWebLab/polarmap.js">PolarMap.js</a>
		</td><td>
			JavaScript library for displaying tiles from <a href="http://webmap.arcticconnect.org">ArcticWebMap</a>, a free tile provider with OSM data in multiple Arctic polar projections. Includes lower-level API for deeper integration with other Cartographer plugins.
		</td><td>
			<a href="https://github.com/geosensorweblab">GeoSensorWeb Lab</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gmaclennan/leaflet-bing-layer">Bing Maps Layer</a>
		</td><td>
			Add <a href="https://msdn.microsoft.com/en-us/library/ff701721.aspx">Bing Maps tiles</a> to your Cartographer Map. Requires Cartographer v1.0.0.beta.2 or later.
		</td><td>
			<a href="https://github.com/gmaclennan">Gregor MacLennan</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.TileLayer.HERE">L.TileLayer.HERE</a>
		</td><td>
			Displays map tiles from HERE maps (<a href="https://ivansanchez.gitlab.io/Cartographer.TileLayer.HERE/demo.html">demo</a>).
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.GridLayer.GoogleMutant">L.GridLayer.GoogleMutant</a>
		</td><td>
			Displays Google maps (with minimal artifacts thanks to a <a href='https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver'>DOM mutation observer</a> technique) (<a href="http://ivansanchez.gitlab.io/Cartographer.GridLayer.GoogleMutant/demo.html">demo</a>).
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.MapkitMutant">L.MapkitMutant</a>
		</td><td>
			Displays Apple's MapkitJS basemaps.
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez</a>
		</td>	</tr>
	<tr>
        <td>
        	<a href="https://supermap.github.io/supermap-leaflet">SuperMap Cartographer</a>
        </td><td>
         SuperMap Cartographer is a Cartographer plugins for working with SuperMap service types.
         Support for SuperMap services, tiles and more.
        </td><td>
        	<a href="https://github.com/SuperMap">SuperMap</a>
        </td>
    </tr>
	<tr>
        <td>
        	<a href="https://github.com/MIERUNE/Cartographer.TileLayer.MIERUNE">Cartographer.TileLayer.Mierune</a>
        </td><td>
			Displays tiles from <a href="https://mierune.co.jp/tile.html">Mierune map</a>. (<a href="https://tile.mierune.co.jp">Demo</a>)
        </td><td>
        	<a href="https://github.com/MIERUNE">Mierune</a>
        </td>
    </tr>
	<tr>
		<td>
			<a href="https://github.com/rzoller/Cartographer.TileLayer.Swiss">Cartographer.TileLayer.Swiss</a>
		</td><td>
			Displays national maps of Switzerland using WMTS services of swisstopo.
			<a href="https://rzoller.ch/Cartographer.TileLayer.Swiss/examples/basic.html">Demo</a>.
		</td><td>
			<a href="https://github.com/rzoller">Roman Zoller</a>
		</td>
	</tr>
</table>



### Basemap formats

Plugins for loading basemaps or GIS raster layers in common (albeit non-default) formats.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/mylen/leaflet.TileLayer.WMTS">leaflet.TileLayer.WMTS</a>
		</td><td>Add WMTS (IGN) layering for leaflet.
		</td><td>
			<a href="https://github.com/mylen">Alexandre Melard</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/azgs/azgs-leaflet">azgs-leaflet</a>
		</td><td>
			A set of small plugins for Cartographer, including WFS-GeoJSON layer with filtering, a hover control for GeoJSON, and an Esri tile layer.
		</td><td>
			<a href="https://github.com/azgs">AZGS</a>
		</td>
	</tr>
		<tr>
		<td>
			<a href="https://github.com/heigeo/leaflet.wms">leaflet.wms</a>
		</td><td>
			Enhanced WMS support for Cartographer, including single-tile/untiled layers, shared WMS sources, and layer identify via GetFeatureInfo.
		</td><td>
			<a href="https://github.com/sheppard/">S. Andrew Sheppard</a><br>(<a href="https://github.com/heigeo/">HEI Geo</a>)
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/stuartmatthews/Cartographer.NonTiledLayer.WCS">Cartographer.NonTiledLayer.WCS</a>
		</td><td>
			Display raster data from Web Coverage Services.  Rasters can be styled and queried in the client.  See the <a href="https://stuartmatthews.github.io/Cartographer.NonTiledLayer.WCS/">demo</a>.
		</td><td>
			<a href="https://github.com/stuartmatthews">Stuart Matthews</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/balrog-kun/Cartographer.bpg">Cartographer.bpg</a>
		</td><td>
			TileLayer with <a href="http://bellard.org/bpg/">.bpg</a> image format decoding.
		</td><td>
			<a href="https://github.com/balrog-kun/">Andrzej Zaborowski</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/glenrobertson/leaflet-tilelayer-geojson/">TileLayer.GeoJSON</a>
		</td><td>
			A TileLayer for GeoJSON tiles.
		</td><td>
			<a href="https://github.com/glenrobertson">Glen Robertson</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/kartena/leaflet-tilejson">leaflet-tilejson</a>
		</td><td>
			Adds support for the <a href="https://github.com/mapbox/TileJSON">TileJSON</a> specification to Cartographer.
		</td><td>
			<a href="https://github.com/perliedman">Per Liedman</a>, <a href="http://www.kartena.se/">Kartena</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://vizzuality.github.com/cartodb-leaflet/">cartodb-leaflet</a>
		</td><td>
			Official <a href="http://cartodb.com/">CartoDB</a> plugin for Cartographer.
		</td><td>
			<a href="http://vizzuality.com/">Vizzuality</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/emikhalev/leaflet-2gis">Cartographer-2gis</a>
		</td><td>
			Adds support for 2GIS tile layer
		</td><td>
			<a href="https://github.com/emikhalev/">Eugene Mikhalev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/geobricks/Cartographer.GeoJSON.Encoded">Cartographer GeoJSON Encoded</a>
		</td><td>
			Extends the L.GeoJSON layer using Google polyline encoding algorithm, allowing an optimized data transfer.
		</td><td>
			<a href="https://github.com/geobricks/">Geobricks</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.TileLayer.MBTiles">Cartographer.TileLayer.MBTiles</a>
		</td><td>
			Loads <a href="https://github.com/mapbox/mbtiles-spec"><code>.mbtiles</code></a> tilesets.
		</td><td>
			<a href="https://github.com/IvanSanchez/">Iván Sánchez</a>
		</td>
	</tr>
    <tr>
		<td>
			<a href="https://github.com/IHCantabria/Cartographer.CanvasLayer.Field">Cartographer.CanvasLayer.Field</a>
		</td><td>
			Loads and styles raster files (geotiff & asciigrid formats).
            It includes a <code>ScalarField</code> layer (for DTM, temperature...) and
			<code>VectorFieldAnim</code> (an animated layer for wind, currents...). See the <a href="https://ihcantabria.github.io/Cartographer.CanvasLayer.Field/">examples</a>
		</td><td>
			<a href="https://github.com/VictorVelarde">Víctor Velarde</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/stuartmatthews/leaflet-geotiff">leaflet-geotiff</a>
		</td><td>
			Display raster data from geoTIFF files as images or direction arrows.  Rasters can be styled and queried in the client.  An optional clipping mask can be applied, e.g. to restrict DEMs to land areas.  See the <a href="https://stuartmatthews.github.io/leaflet-geotiff/">demo</a>.
		</td><td>
			<a href="https://github.com/stuartmatthews">Stuart Matthews</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/GeoportalPL/leaflet.projwmts">Cartographer.projwmts</a>
		</td><td>
			Adding WMTS services (GUGiK Poland).
		 (<a href="https://geoportalpl.github.io/leaflet.projwmts/examples/wmts_services.html">demo</a>).
		</td><td>
			<a href="https://github.com/GeoportalPL">Geoportal Poland</a>
		</td>
	</tr>
</table>


### Non-map base layers

Sometimes you don't want to load a map, just big custom images. **Really** big ones.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/turban/Cartographer.Zoomify">TileLayer.Zoomify</a>
		</td><td>
			A TileLayer for Zoomify images.
		</td><td>
			<a href="https://github.com/turban">Bjørn Sandvik</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/alfarisi/leaflet-deepzoom">TileLayer.DeepZoom</a>
		</td><td>
			A TileLayer for DeepZoom images.
		</td><td>
			<a href="https://github.com/alfarisi">Al Farisi</a>,
			<a href="http://indokreatif.net">Indokreatif Teknologi</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/namrehs/Cartographer.Gigapan">TileLayer.Gigapan</a>
		</td><td>
			A TileLayer for Gigapan images.
		</td><td>
			<a href="https://github.com/namrehs">Dan Sherman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/astromatic/Cartographer.TileLayer.IIP">Cartographer.TileLayer.IIP</a>
		</td><td>Add support for <a href="http://iipimage.sourceforge.net/">IIPImage</a> layers in Cartographer.
		</td><td>
			<a href="https://github.com/ebertin">Emmanuel Bertin</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mejackreed/Cartographer-IIIF">Cartographer-IIIF</a>
		</td><td>
			A <a href="http://iiif.io/">IIIF</a> (International Image Interoperability Framework) viewer for Cartographer. See the <a href="http://mejackreed.github.io/Cartographer-IIIF/examples/example.html">demo</a>.
		</td><td>
			<a href="https://github.com/mejackreed">Jack Reed</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/aparshin/leaflet-fractal">leaflet-fractal</a>
		</td><td>
			Renders some fractals (Mandelbrot set, Julia set and some others) using 2D canvas (<a href="http://aparshin.github.io/leaflet-fractal/">demo</a>).
		</td><td>
			<a href="https://github.com/aparshin">Alexander Parshin</a>
		</td>
	</tr>
	<tr>
	  <td>
	    <a href="https://github.com/commenthol/leaflet-rastercoords">leaflet-rastercoords</a>
	  </td><td>
	    Renders large tiled images generated with
	    <a href="http://github.com/commenthol/gdal2tiles-leaflet">gdal2tiles-leaflet</a>.
	    Image raster coordinates can be used to set markers, etc.
	    (<a href="http://commenthol.github.io/leaflet-rastercoords">demo</a>).
	  </td><td>
	    <a href="https://github.com/commenthol">Commenthol</a>
	  </td>
	</tr>
</table>



### Tile/image display

The following plugins change the way that tile or image layers are displayed in the map.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/aparshin/leaflet-boundary-canvas">TileLayer.BoundaryCanvas</a>
		</td><td>
			Allows you to draw tile layers with arbitrary polygonal boundary. HTML5 Canvas is used for rendering.
		</td><td>
			<a href="https://github.com/aparshin">Alexander Parshin</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Zverik/leaflet-grayscale/">TileLayer.Grayscale</a>
		</td><td>
			A regular TileLayer with grayscale makeover.
		</td><td>
			<a href="https://github.com/Zverik">Ilya Zverev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ScanEx/Cartographer.imageTransform">Cartographer.ImageTransform</a>
		</td><td>Add support of image overlays with arbitrary perspective transformation.
		</td><td>
			<a href="https://github.com/aparshin">Alexander Parshin</a>,
			<a href="https://github.com/OriginalSin">Sergey Alekseev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/lizardtechblog/Cartographer.OpacityControls">Cartographer.OpacityControls</a>
		</td><td>
			Simple Cartographer controls to adjust the opacity of a map layer.
		</td><td>
			<a href="https://github.com/lizardtechblog/">Jared Dominguez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/publiclab/Cartographer.DistortableImage">Cartographer.DistortableImage</a>
		</td><td>
			Enable users to <a href="https://publiclab.github.io/Cartographer.DistortableImage/examples/">scale, rotate, and distort images</a> on Cartographer maps.
		</td><td>
			<a href="https://github.com/publiclab">Public Lab</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ronikar/Cartographer.DistortableVideo">Cartographer.DistortableVideo</a>
		</td><td>
			Enable users to scale, rotate, and distort videos on Cartographer maps.  (<a href='https://ronikar.github.io/Cartographer.DistortableVideo/examples/'>demo</a>).
		</td><td>
			<a href="https://github.com/ronikar">Roni Karilkar</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IvanSanchez/Cartographer.ImageOverlay.Rotated">Cartographer.ImageOverlay.Rotate</a>
		</td><td>
			Displays rotated, scaled and skewed (but not rubbersheeted) ImageOverlays, given three control points. (<a href='http://ivansanchez.github.io/Cartographer.ImageOverlay.Rotated/demo.html'>demo</a>).
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/xtk93x/Cartographer.TileLayer.ColorFilter">Cartographer.TileLayer.ColorFilter</a>
		</td><td>
			A simple and lightweight Cartographer plugin to apply CSS filters on map tiles (<a href="https://xtk93x.github.io/Cartographer.TileLayer.ColorFilter/">demo</a>).
		</td><td>
			<a href="https://github.com/xtk93x">Cláudio Kawakani</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/frogcat/leaflet-tilelayer-mask">Cartographer.TileLayer.Mask</a>
		</td><td>
			A TileLayer with mask effect (<a href="http://frogcat.github.io/leaflet-tilelayer-mask/default/">demo</a>)
		</td><td>
			<a href="https://github.com/frogcat">Yuzo Matsuzawa</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/GreenInfo-Network/L.TileLayer.PixelFilter/">Cartographer.TileLayer.PixelFilter</a>
		</td><td>
			A TileLayer which can filter and replace pixels by RGB code.
			<br/>
			<a href="http://greeninfo-network.github.io/L.TileLayer.PixelFilter/demo1.html">demo 1</a> &bull; <a href="http://greeninfo-network.github.io/L.TileLayer.PixelFilter/demo2.html">demo 2</a>
		</td><td>
			<a href="https://github.com/GreenInfo-Network/">GreenInfo Network</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/digidem/leaflet-side-by-side">Cartographer.Control.SideBySide</a>
		</td><td>
			A Cartographer control to add a split screen to compare two map overlays (<a href="http://lab.digital-democracy.org/leaflet-side-by-side/">demo</a>).
		</td><td>
			<a href="http://www.digital-democracy.org">Digital Democracy</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.TileLayer.GL">Cartographer.TileLayer.GL</a>
		</td><td>
			Applies custom WebGL shaders to each tile in a tilelayer (<a href="https://ivansanchez.gitlab.io/Cartographer.TileLayer.GL/demo/repl.html">demo</a>).
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/frogcat/leaflet-tilelayer-colorpicker">Cartographer.TileLayer.ColorPicker</a>
		</td><td>
			A Cartographer TileLayer with getColor(latLng). Demos: <a href="https://frogcat.github.io/leaflet-tilelayer-colorpicker/">color picker</a>, <a href="https://frogcat.github.io/leaflet-tilelayer-colorpicker/mapbox-terrain-rgb.html">elevation picker with mapbox terrain-RGB</a>
		</td><td>
			<a href="https://github.com/frogcat">Yuzo Matsuzawa</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/hnrchrdl/leaflet-tilelayer-colorizr">Cartographer.TileLayer.Colorizr</a>
		</td><td>
			A Cartographer TileLayer which can modify colors by RGBA code. Demos: coming soon.
		</td><td>
			<a href="https://github.com/hnrchrdl">Hinrich Riedel</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/consbio/Cartographer.UTFGrid">Cartographer.UTFGrid</a>
		</td><td>
			Provides UTF-8 Grid support for Cartographer >= 1.0.  Includes basic mouseover support plus ability to highlight feature from UTFGrid on hover (<a href="https://consbio.github.io/Cartographer.UTFGrid/">demo</a>).
		</td><td>
			<a href="https://github.com/brendan-ward">Brendan Ward</a>
		</td>
	</tr>
	<tr>
        	<td>
        		<a href="https://github.com/dayjournal/Cartographer.Control.Opacity">Cartographer.Control.Opacity</a>
        	</td><td>
			Make multiple tile layers transparent. (<a href="https://dayjournal.github.io/Cartographer.Control.Opacity">demo</a>)
        	</td><td>
        		<a href="https://day-journal.com">Yasunori Kirimoto</a>
        	</td>
    	</tr>
</table>



### Tile Load

The following plugins change the way that tile layers are loaded into the map.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/mattiasb/Cartographer.MultiTileLayer">Cartographer.MultiTileLayer</a>
		</td><td>
			Allows to compose a TileLayer from several tile sources. Each source is active only on a defined set of zoomlevels.
		</td><td>
			<a href="https://github.com/mattiasb">Mattias Bengtsson</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ismyrnow/Cartographer.functionaltilelayer">Cartographer.FunctionalTileLayer</a>
		</td><td>
			Allows you to define tile layer URLs using a function. Even works with asynchronous sources, using promises.
		</td><td>
			<a href="https://github.com/ismyrnow">Ishmael Smyrnow</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gregallensworth/L.TileLayer.Cordova">TileLayer.Cordova</a>
		</td><td>
			For use with Cordova/Phonegap, adds tile caching onto local device storage, switching between offline and online mode.
		</td><td>
			<a href="https://github.com/gregallensworth">Greg Allensworth</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MazeMap/Cartographer.TileLayer.PouchDBCached">TileLayer.PouchDBCached</a>
		</td><td>
			Allows all Cartographer TileLayers to cache into PouchDB for offline use.
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>,
			<a href="https://github.com/MazeMap">MazeMap</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ebrelsford/Cartographer.loading">Cartographer.loading</a>
		</td><td>
			A simple control that adds a loading indicator as tiles and other data are loaded.
		</td><td>
			<a href="https://github.com/ebrelsford/">Eric Brelsford</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/TolonUK/Cartographer.EdgeBuffer">Cartographer.EdgeBuffer</a>
		</td><td>
			Buffer tiles beyond the edge of the viewport, for Cartographer 1.0. <a href="http://www.tolon.co.uk/Cartographer.EdgeBuffer/comparison.html">Demo</a>.
		</td><td>
			<a href="https://github.com/TolonUK">Alex Paterson</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ghybs/Cartographer.TileLayer.Fallback">Cartographer.TileLayer.Fallback</a>
		</td><td>
			Replaces missing Tiles (HTTP 404 Not Found Error) by scaled up equivalent Tiles from lower zooms.
		</td><td>
			<a href="https://github.com/ghybs">ghybs</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Outdooractive/Cartographer.FeatureGroup.LoadEvents">Cartographer.FeatureGroup.LoadEvents</a>
		</td><td>
			`FeatureGroup` that supports the `"loading"` and `"load"` events (for v0.7.*).
		</td><td>
			<a href="http://glat.info">G. Lathoud</a>, <a href="http://www.outdooractive.com">Outdooractive</a>.
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.GridLayer.FadeOut">Cartographer.GridLayer.FadeOut</a>
		</td><td>
			Fades out grid layers and tilelayers when they are removed, making basemap changes smoother (for 1.0.0). <a href="http://ivansanchez.gitlab.io/Cartographer.GridLayer.FadeOut/demo.html">Demo</a>.
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/robertomlsoares/leaflet-offline">leaflet-offline</a>
		</td><td>
			Allows the use of offline tiles in a customizable way while falling back to the normal TileLayer when necessary. <a href="https://robertomlsoares.github.io/leaflet-offline/">Demo</a>.
		</td><td>
			<a href="https://github.com/robertomlsoares">Roberto Soares</a>
		</td>
	</tr>
</table>



### Vector tiles

Plugins to display [vector tiles](https://github.com/mapbox/vector-tile-spec).

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/SpatialServer/Cartographer.MapboxVectorTile">Cartographer.MapboxVectorTile</a>
		</td><td>
			A Cartographer Plugin that renders Mapbox Vector Tiles on canvas. See <a href="http://spatialserver.github.io/Cartographer.MapboxVectorTile/examples/confetti.html">demo</a>. Compatible with Cartographer 0.7.x only.
		</td><td>
			<a href="http://spatialdev.com/">SpatialDev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/devTristan/hoverboard">Hoverboard</a>
		</td><td>
			Render vector tiles on canvas with leaflet (geojson, topojson, and protobuf). See <a href="http://tristan.io/hoverboard/">demo</a>. Compatible with Cartographer 0.7.x only.
		</td><td>
			<a href="http://tristan.io/">Tristan Davies</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mapbox/geojson-vt">geojson-vt</a>
		</td><td>
			Efficient library for slicing GeoJSON data into vector tiles on the fly.
		</td><td>
			<a href="https://www.mapbox.com/">Mapbox</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IvanSanchez/Cartographer.VectorGrid">Cartographer.VectorGrid</a>
		</td><td>
			Display gridded vector data (GeoJSON or TopoJSON sliced with geojson-vt, or protobuf vector tiles) in Cartographer 1.0.0. See <a href="https://github.com/IvanSanchez/Cartographer.VectorGrid#demo">demos</a>. Not compatible with 0.7.x.
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/jkuebart/Cartographer.VectorTileLayer/">Cartographer.VectorTileLayer</a>
		</td><td>
			A Cartographer layer for displaying vector tiles. Very similar to <a href="https://github.com/IvanSanchez/Cartographer.VectorGrid">Cartographer.VectorGrid</a> except for styling: a single style can be specified for all layers while VectorGrid requires knowing layer names in advance. For Cartographer 1.0.0.
		</td><td>
			<a href="https://gitlab.com/jkuebart/">Joachim Kuebart</a>
		</td>
	</tr>
</table>


## Overlay data

The following plugins provide new ways of loading overlay data (GIS vector data): points, lines and polygons.

* [Overlay data formats](#overlay-data-formats)
* [Dynamic data loading](#dynamiccustom-data-loading)
* [Synthetic overlays](#synthetic-overlays)
* [Data providers](#data-providers)

### Overlay data formats

Load your own data from various GIS formats.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
    <tr>
		<td>
			<a href="https://github.com/mapbox/leaflet-omnivore">leaflet-omnivore</a>
		</td><td>
			Loads &amp; converts CSV, KML, GPX, TopoJSON, WKT formats for Cartographer.
		</td><td>
			<a href="https://github.com/mapbox">Mapbox</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.FileLayer">Cartographer.FileLayer</a>
		</td><td>
			Loads files (GeoJSON, GPX, KML) into the map using the HTML5 FileReader API (i.e. locally without server).
		</td><td>
			<a href="https://github.com/leplatrem">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/joker-x/Cartographer.geoCSV">Cartographer.geoCSV</a>
		</td><td>
			Cartographer plugin for loading a CSV file as geoJSON layer.
		</td><td>
			<a href="https://github.com/joker-x">Iván Eixarch</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/calvinmetcalf/leaflet.shapefile">Cartographer.Shapefile</a>
		</td><td>
			Put a shapefile onto your map as a layer.
		</td><td>
			<a href="https://github.com/calvinmetcalf">Calvin Metcalf</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/calvinmetcalf/leaflet.filegdb">Cartographer.FileGDB</a>
		</td><td>
			Put an ESRI File GeoDatabase onto your map as a layer.
		</td><td>
			<a href="https://github.com/calvinmetcalf">Calvin Metcalf</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jieter/Cartographer.encoded">Cartographer.encoded</a>
		</td><td>
			Use encoded polylines in Cartographer.
		</td><td>
			<a href="https://github.com/jieter">Jieter</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mpetazzoni/leaflet-gpx">Cartographer GPX</a>
		</td><td>
			GPX layer, targeted at sporting activities by providing access to information such as distance, moving time, pace, elevation, heart rate, etc.
		</td><td>
			<a href="https://github.com/mpetazzoni/">Maxime Petazzoni</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://arthur-e.github.com/Wicket/">Wicket</a>
		</td><td>
			A modest library for translating between Well-Known Text (WKT) and Cartographer geometry objects (e.g. between L.marker() instances and "POINT()" strings).
		</td><td>
			<a href="https://github.com/arthur-e/">K. Arthur Endsley</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/tomchadwin/qgis2web">qgis2web</a>
		</td><td>
			A <a href="http://qgis.org/">QGIS</a> plugin to make webmaps without coding.
		</td><td>
			<a href="https://github.com/tomchadwin">Tom Chadwin</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Flexberry/Cartographer-WFST">Cartographer-WFST</a>
		</td><td>
			<a href="http://www.opengeospatial.org/standards/wfs">WFS</a> client layer with transaction support
		</td><td>
			<a href="https://github.com/Flexberry/">Flexberry</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/daniellsu/leaflet-betterscale">Cartographer-BetterScale</a>
		</td><td>
			A new, more GIS-like scalebar with alternating black/white bars.
		</td><td>
			<a href="https://github.com/daniellsu/">Dan Brown</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ngageoint/geopackage-js/tree/master/leaflet">Cartographer-GeoPackage</a>
		</td><td>
			Load <a href="http://www.geopackage.org/">GeoPackage</a> Tile and Feature Layers.
		</td><td>
			<a href="https://github.com/danielbarela">Daniel Barela</a>,
			<a href="https://github.com/ngageoint">NGA</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gherardovarando/leaflet-csvtiles">Cartographer-CsvTiles</a>
		</td><td>
		Load points from tiled csv files, using the amazing <a href="http://papaparse.com/">PapaParse</a> library. <a href="https://gherardovarando.github.io/leaflet-csvtiles/demo/index.html">Demo</a>.
		</td><td>
			<a href="https://github.com/gherardovarando">Gherardo Varando</a>
		</td>
	</tr>
</table>



### Dynamic/custom data loading

Load dynamic data which is updated in the map, or load GIS vector data in non-standard ways.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/perliedman/leaflet-realtime">Cartographer Realtime</a>
		</td><td>
			Put realtime data on a Cartographer map: live tracking GPS units, sensor data or just about anything.
		</td><td>
			<a href="https://github.com/perliedman/">Per Liedman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/calvinmetcalf/leaflet-ajax">Cartographer Ajax</a>
		</td><td>
			Add GeoJSON data via ajax or jsonp.
		</td><td>
			<a href="https://github.com/calvinmetcalf/">Calvin Metcalf</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/tinuzz/leaflet-liveupdate">Cartographer.Liveupdate</a>
		</td>
		<td>
			Periodically ('live') update something on a map (<a href="https://www.grendelman.net/leaflet/">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/tinuzz/">Martijn Grendelman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/calvinmetcalf/leaflet.pouch">Cartographer.Pouch</a>
		</td><td>
			Use PouchDB to sync CouchDB data to local storage (indexedDB), to just add couchDB data or as just a less confusing implementation of indexedDB.
		</td><td>
			<a href="https://github.com/calvinmetcalf/">Calvin Metcalf</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/cbaines/leaflet-indoor">Cartographer.Indoor</a>
		</td><td>
			Create indoor maps.
		</td><td>
			<a href="https://github.com/cbaines">Christopher Baines</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/BenjaminVadant/leaflet-ugeojson">Cartographer uGeoJSON</a>
		</td><td>
			Add an auto updating GeoJSON data Layer via ajax post requests.
		</td><td>
			<a href="https://github.com/BenjaminVadant/">Benjamin VADANT</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dj0001/Cartographer.mytrack">Cartographer.mytrack</a>
		</td><td>Track my way on a map and download it. <a href="https://dj0001.github.io/Cartographer.mytrack">Demo</a>
		</td><td>
			<a href="https://github.com/dj0001">DJ</a>
		</td>
	</tr>
</table>



### Synthetic overlays

These plugins create useful overlays from scratch, no loading required.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/turban/Cartographer.Graticule">Cartographer.Graticule</a>
		</td><td>
			Draws a grid of latitude and longitude lines.
		</td><td>
			<a href="https://github.com/turban">Bjørn Sandvik</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ablakey/Cartographer.SimpleGraticule">Cartographer.SimpleGraticule</a>
		</td><td>
			Draws a grid lines for L.CRS.Simple coordinate system.
		</td><td>
			<a href="https://github.com/ablakey">Andrew Blakey</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jonshutt/Cartographer.OS.Graticule">L.OS.Graticule</a>
		</td><td>
			Overlays UK Ordinance Survey (OS) 1km grid squares and labels.
		</td><td>
			<a href="https://github.com/jonshutt">Jon Shutt</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/bill-chadwick/Cartographer.MetricGrid">Cartographer.MetricGrid</a>
		</td><td>
			A general purpose Metric Grid overlay for Cartographer with ready defined UTM, British and Irish Grids.
		</td><td>
			<a href="https://github.com/bill-chadwick">Bill Chadwick</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/joergdietrich/Cartographer.Terminator">Cartographer.Terminator</a>
		</td><td>Overlay day and night regions on a map.
		</td><td>
			<a href="https://github.com/joergdietrich">J&ouml;rg Dietrich</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dj0001/Cartographer.Sun">Cartographer.Sun</a>
		</td><td>Get sunset or sunrise at map click. <a href="https://dj0001.github.io/Cartographer.Sun">Demo</a>
		</td><td>
			<a href="https://github.com/dj0001">DJ</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dj0001/Cartographer.timezones">Cartographer.timezones</a>
		</td><td>Overlay timezones on a Cartographer Earth map. <a href="https://dj0001.github.io/Cartographer.timezones">Demo</a>
		</td><td>
			<a href="https://github.com/dj0001">DJ</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/cloudybay/leaflet.latlng-graticule">leaflet.latlng-graticule</a>
		</td>
		<td>
			Create a Canvas as ImageOverlay to draw the Lat/Lon Graticule, and show the grid tick label at the edges of the map.<a href="https://cloudybay.github.io/leaflet.latlng-graticule/example/">Demo</a>.
		</td>
		<td>
			<a href="https://github.com/cloudybay/">CloudyBay</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://github.com/GEOF-OSGL/Cartographer.EdgeScaleBar">Cartographer.EdgeScaleBar</a>
		</td>
		<td>
			Creates scale bars along top and right edge of a map in the Web Mercator projection..<a href="http://geof-osgl.github.io/Cartographer.EdgeScaleBar/">Demo</a>.
		</td>
		<td>
			<a href="http://github.com/GEOF-OSGL">Dražen Tutić, Ana Kuveždić Divjak</a>
		</td>
	</tr>
</table>



### Data providers

Load overlay data from third-party-services. See also [basemap providers](#basemap-providers) and [plugin collections](#collections).

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="http://jasonsanford.github.io/leaflet-vector-layers/">Cartographer Vector Layers</a>
		</td><td>
			Allows to easily create vector layers from a number of geo web services, such as ArcGIS Server, Arc2Earth, GeoIQ, CartoDB and GIS Cloud.
		</td><td>
			<a href="http://geojason.info">Jason Sanford</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/GuillaumeAmat/leaflet-overpass-layer">Cartographer Overpass Layer</a>
		</td><td>
      Easily include data from the <a href="http://overpass-api.de">overpass api</a>.
		</td><td>
			<a href="https://github.com/GuillaumeAmat">Guillaume AMAT</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/kr1/Cartographer.dbpediaLayer/">Cartographer.dbpediaLayer</a>
		</td><td>
			A layer with Points of interest from Wikipedia - loaded via ajax from DBpedia's SPARQL endpoint.
		</td><td>
			<a href="https://github.com/kr1/">Kr1</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MatthewBarker/leaflet-wikipedia">Cartographer-Wikipedia</a>
		</td>
		<td>
			A leaflet plugin to display Wikipedia API entries on a map layer.
		</td>
		<td>
			<a href="https://github.com/MatthewBarker">Matthew Barker</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/windycom/API">Windy-Cartographer-plugin</a>
		</td>
		<td>
			Displays animated weather map on your page using Windy's free API.
		</td>
		<td>
			<a href="https://www.windy.com">Windy.com</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/barryhunter/Cartographer.GeographPhotos">Cartographer.GeographPhotos</a>
		</td>
		<td>
			Display Geographical-Photos from Geograph Britian and Ireland in a interactive overlay, using their API.
		</td>
		<td>
			<a href="https://github.com/barryhunter/">Barry Hunter</a>
		</td>
	</tr>
</table>



## Overlay display

The following plugins provide new ways of displaying overlay data information.

* [Markers & renderers](#markers--renderers)
* [Overlay animations](#overlay-animations)
* [Clustering/decluttering](#clusteringdecluttering)
* [Heatmaps](#heatmaps)
* [DataViz](#dataviz)


### Markers & renderers

These plugins provide new markers or news ways of converting abstract data into images in your screen. Cartographer users versed in GIS also know these as symbolizers.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/zhuang-hao-ming/Cartographer.RoughCanvas">Cartographer.RoughCanvas</a>
		</td><td>
			Cartographer.RoughCanvas renders hand-drawn, sketch style vector map(polyline, polygon, geojson).
		</td><td>
			<a href="https://github.com/zhuang-hao-ming/">haoming</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jdfergason/Cartographer.Ellipse">Cartographer.ellipse</a>
		</td><td>
			Cartographer.ellipse place ellipses on map by specifying center point, semi-major axis,
			semi-minor axis, and tilt degrees from west.
		</td><td>
			<a href="https://github.com/jdfergason">JD Fergason</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IntelligentMap/Cartographer.label">Cartographer.label</a>
		</td><td>
			Adds text labels to map markers and vector layers.
		</td><td>
			<a href="https://github.com/jacobtoye">Jacob Toye</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jieter/Cartographer-semicircle">Cartographer-semicircle</a>
		</td><td>
			Adds functionality to <code>L.Circle</code> to draw semicircles.
		</td><td>
			<a href="https://github.com/jieter">Jieter</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/bbecquet/Cartographer.PolylineDecorator">Cartographer.PolylineDecorator</a>
		</td><td>
			Allows you to draw patterns (like dashes, arrows or evenly spaced Markers) along Polylines or coordinate paths.
		</td><td>
			<a href="https://github.com/bbecquet">Benjamin Becquet</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/leaflet-extras/leaflet.sprite">Cartographer.Sprite</a>
		</td><td>
			Use sprite based icons in your markers.
		</td><td>
			<a href="https://github.com/calvinmetcalf">Calvin Metcalf</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.TextPath">Cartographer.TextPath</a>
		</td><td>
			Allows you to draw text along Polylines.
		</td><td>
			<a href="https://github.com/leplatrem">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/iatkin/leaflet-svgicon">Cartographer-SVGIcon</a>
		</td><td>
			A simple and customizable SVG icon with no external dependencies. Also included is a convenience Marker class and two example subclasses. <a href="http://iatkin.github.io/leaflet-svgicon/">Customizable demo with example subclasses</a>
		</td><td>
			<a href="https://github.com/iatkin">Ilya Atkin</a>
		</td>
	</tr>
    	<tr>
		<td>
			<a href="https://github.com/marslan390/BeautifyMarker">Cartographer.BeautifyMarkers</a>
		</td><td>
			Lightweight plugin that adds colorful iconic markers without image and gives full control of style to end user (i.e. Unlimited colors and CSS styling).
		</td><td>
			<a href="https://github.com/marslan390">Muhammad Arslan Sajid</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/lvoogdt/Cartographer.awesome-markers">Cartographer.Awesome-Markers</a>
		</td><td>
			Colorful, iconic &amp; retina-proof markers based on the Font Awesome icons/Twitter Bootstrap icons
		</td><td>
			<a href="http://www.lennardvoogdt.nl">Lennard Voogdt</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/coryasilva/Cartographer.ExtraMarkers">Cartographer.Extra-Markers</a>
		</td><td>
			Shameless copy of Awesome-Markers with more shapes, colors and semantic-ui support
		</td><td>
			<a href="http://www.corysilva.com">Cory Silva</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jseppi/Cartographer.MakiMarkers">Cartographer.MakiMarkers</a>
		</td><td>Create markers using <a href="https://www.mapbox.com/maki/">Maki Icons</a> from MapBox.
		</td><td>
			<a href="https://github.com/jseppi">James Seppi</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IvanSanchez/Cartographer.Icon.Glyph">Cartographer.Icon.Glyph</a>
		</td><td>
			Use icon font glyphs in your markers (from Font Awesome, Material Design Icons, Glyphicons,
			Metro UI icons, Elusive, and other icon fonts). (<a href='https://ivansanchez.github.io/Cartographer.Icon.Glyph/demo.html'>demo</a>)
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.LineExtremities">Cartographer.LineExtremities</a>
		</td><td>
			Show symbols at the extremities of polylines, using SVG markers.
		</td><td>
			<a href="https://github.com/fredericbonifas">Frédéric Bonifas</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/hiasinho/Cartographer.vector-markers">Cartographer.VectorMarkers</a>
		</td><td>
			Vector SVG markers for Cartographer, with an option for Font Awesome/Twitter Bootstrap icons.
		</td><td>
			<a href="https://github.com/hiasinho">Mathias Schneider</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/teastman/Cartographer.pattern">Cartographer.pattern</a>
		</td><td>
			Add support for pattern fills on Paths.
		</td><td>
			<a href="https://github.com/teastman">Tyler Eastman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/thomasbrueggemann/leaflet.boatmarker">Cartographer.BoatMarker</a>
		</td><td>
			A boat marker using HTML Canvas for displaying yachts and sailboats with heading and optional wind information. <a href="http://thomasbrueggemann.github.io/leaflet.boatmarker/">Demo</a>.
		</td><td>
			<a href="https://github.com/thomasbrueggemann">Thomas Brüggemann</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/heyman/leaflet-usermarker">leaflet-usermarker</a>
		</td><td>
			Plugin for plotting a marker representing a user - or multiple users - on a map,
			with support for drawing an accuraccy circle. Can be seen in action on
			<a href="http://longitude.me">Longitude.me</a>.
		</td><td>
			<a href="http://heyman.info">Jonatan Heyman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/albburtsev/Cartographer.geojsonCSS">Cartographer.geojsonCSS</a>
		</td><td>
			<a href="http://wiki.openstreetmap.org/wiki/Geojson_CSS">Geojson CSS</a> implementation for Cartographer.
		</td><td>
			<a href="https://github.com/albburtsev/">Alexander Burtsev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://osmbuildings.org/">OSM Buildings</a>
		</td><td>
			Amazing JS library for visualizing 3D OSM building geometry on top of Cartographer.
		</td><td>
			<a href="https://github.com/kekscom/">Jan Marsch</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ubergesundheit/Cartographer.EdgeMarker">Cartographer.EdgeMarker</a>
		</td><td>
			Plugin to indicate the existence of Features outside of the current view.
		</td><td>
			<a href="https://github.com/ubergesundheit">Gerald Pape</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gismartwaredev/leaflet.orientedMarker">Cartographer.orientedMarker</a>
		</td><td>
			Allows to manage orientation of markers dynamically.
		</td><td>
			<a href="https://github.com/gismartwaredev">Gismartwaredev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mapshakers/leaflet-icon-pulse">leaflet-icon-pulse</a>
		</td><td>
			Renders pulsing icon using CSS3. It can be used for location marker.
		</td><td>
			<a href="https://github.com/mapshakers">mapshakers</a>/
			<a href="https://github.com/filipzava">Filip Zavadil</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mapshakers/leaflet-mapkey-icon">leaflet-mapkey-icon</a>
		</td><td>
			Set of cartographic font icons based on <a href="http://www.mapkeyicons.com">mapkeyicons</a>.
		</td><td>
			<a href="https://github.com/mapshakers">mapshakers</a>/
			<a href="https://github.com/filipzava">Filip Zavadil</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/turban/Cartographer.Photo">Cartographer.Photo</a>
		</td><td>
			Plugin to show geotagged photos on a Cartographer map. <a href="http://turban.github.io/Cartographer.Photo/examples/picasa.html">Demo</a>.
		</td><td>
			<a href="https://github.com/turban">Bjørn Sandvik</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/elfalem/Cartographer.curve">Cartographer.curve</a>
		</td><td>
			A Cartographer plugin for drawing Bézier curves and other complex shapes. <a href="http://elfalem.github.io/Cartographer.curve/">Demo</a>.
		</td><td>
			<a href="https://github.com/elfalem">elfalem</a>
		</td>
	</tr>
		<tr>
		<td>
			<a href="https://github.com/lifeeka/leaflet.bezier">Cartographer.bezier</a>
		</td><td>
			Draws a Bézier line between two points with an animated flight object.
		</td><td>
			<a href="https://github.com/spmsupun">Supun Praneeth</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MAD-GooZe/Cartographer.Arc">Cartographer.Arc</a>
		</td><td>
			This plugin adds L.Polyline.Arc function which wraps arc.js functionality for creation of Great Cirlce arcs.
		</td><td>
			<a href="https://github.com/MAD-GooZe">Alexey Gusev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/timwis/leaflet-choropleth">leaflet-choropleth</a>
		</td><td>
			Extends L.geoJson to add a choropleth visualization (color scale based on value). <a href="http://timwis.com/leaflet-choropleth/examples/basic">Demo</a>.
		</td><td>
			<a href="http://timwis.com">Tim Wisniewski</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/eJuke/Cartographer.Canvas-Markers">Cartographer.Canvas-Markers</a>
		</td><td>
			Displays markers on canvas instead of DOM.
		</td><td>
			<a href="https://github.com/eJuke">Evgeniy Voynov</a>
		</td>
	</tr>
        <tr>
                <td>
                        <a href="https://github.com/lethexa/leaflet-tracksymbol">leaflet-tracksymbol</a>
                </td><td>
                        This marker provides a tracksymbol with orientation, velocity-vector and configurable shape.
                </td><td>
                        <a href="https://github.com/lethexa">Tim Leerhoff</a>
                </td>
        </tr>
        <tr>
                <td>
                        <a href="https://github.com/PowerPan/leaflet-ais-tracksymbol">leaflet-ais-tracksymbol</a>
                </td><td>
                        AIS Extension for leaflet-tracksymbol It displays AIS Contacts on the Map.
                </td><td>
                        <a href="https://github.com/powerpan">Johannes Rudolph</a>
                </td>
        </tr>
        <tr>
                <td>
                        <a href="https://github.com/PowerPan/leaflet-ais-tracksymbol-search">leaflet-ais-tracksymbol-search</a>
                </td><td>
                        Adds a Seach Box for your Cartographer Map and Your [leaflet-ais-trackymbol](https://github.com/PowerPan/leaflet-ais-tracksymbol)
                </td><td>
                        <a href="https://github.com/powerpan">Johannes Rudolph</a>
                </td>
        </tr>
	<tr>
		<td>
			<a href="https://github.com/wwwouaiebe/leaflet.TravelNotes">leaflet.TravelNotes</a>
		</td>
		<td>
			Editable markers and routing engine for leaflet. The routing engine have plugins for Mapbox, GraphHopper and OSRM and can be used for car, bike or pedestrian route. <a href="https://wwwouaiebe.github.io/leaflet.TravelNotes/?lng=en">Demo</a>.
		</td>
		<td>
			<a href="https://github.com/wwwouaiebe">Christian Guyette</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IvanSanchez/Cartographer.Marker.Stack">Cartographer.Marker.Stack</a>
		</td>
		<td>
			A pure Cartographer implementation of CartoDB's "<a href="http://blog.cartodb.com/stacking-chips-a-map-hack/">stacked chips</a>" symbolizer. <a href="http://ivansanchez.github.io/Cartographer.Marker.Stack/demos/color_ramps.html">Demo</a>.
		</td>
		<td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/cloudybay/leaflet-polygon-fillPattern">leaflet-polygon.fillPattern</a>
		</td>
		<td>
			Extend the Polygon Object to fill SVG Path element with an image pattern.<a href="http://lwsu.github.io/leaflet-polygon-fillPattern/example/">Demo</a>.
		</td>
		<td>
			<a href="https://github.com/cloudybay/">CloudyBay</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/bbecquet/Cartographer.PolylineOffset">Cartographer Polyline Offset</a>
		</td>
		<td>
			Adds to <code>L.Polyline</code> the ability to be shifted with a relative pixel offset, without modifying its actual <code>LatLng</code>s. The offset value can be either negative or positive, for left- or right-side offset, and remains constant across zoom levels (<a href="http://bbecquet.github.io/Cartographer.PolylineOffset/examples/example.html">basic demo</a>).
		</td>
		<td>
			<a href="https://github.com/bbecquet">Benjamin Becquet</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/w8r/leaflet-labeled-circle">leaflet-labeled-circle</a>
		</td>
		<td>
			Special type of SVG marker with a label inside and draggable around the anchor point (<a href="https://w8r.github.io/leaflet-labeled-circle/demo/">demo</a>).
		</td>
		<td>
			<a href="https://github.com/w8r/">Alexander Milevski</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dagjomar/Cartographer.ParallaxMarker">Cartographer.ParallaxMarker</a>
		</td>
		<td>
			Add markers that moves with a parallax-effect relative to the map when panning (<a href="https://dagjomar.github.io/Cartographer.ParallaxMarker/">demos / examples</a>).
		</td>
		<td>
			<a href="https://github.com/dagjomar/">Dag Jomar Mersland</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/adoroszlai/leaflet-distance-markers">leaflet-distance-markers</a>
		</td>
		<td>
			Allows displaying markers along a route (L.Polyline) at equivalent distances (eg. one per mile) (<a href="http://adoroszlai.github.io/leaflet-distance-markers/">demo</a>).
		</td>
		<td>
			<a href="https://github.com/adoroszlai">Doroszlai, Attila</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mikhailshilkov/leaflet-corridor">leaflet-corridor</a>
		</td>
		<td>
			Renders a polyline with width fixed in meters, not in pixels; adjusts width depending on zoom level (<a href="http://mikhail.io/demos/leaflet-corridor/">demo</a>).
		</td>
		<td>
			<a href="https://github.com/mikhailshilkov">Mikhail Shilkov</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/yakitoritabetai/Cartographer.LabelTextCollision">Cartographer.LabelTextCollision</a>
		</td>
		<td>
			Displays labels on paths (polylines, polygons, circles) avoiding label collision. (<a href="https://yakitoritabetai.github.io/Cartographer.LabelTextCollision/">demo</a>).
		</td>
		<td>
			<a href="https://github.com/yakitoritabetai">Kenta Hakoishi</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/triedeti/Cartographer.streetlabels">Cartographer.streetlabels</a>
		</td>
		<td>
			A Cartographer plugin to show labels following the paths of polylines. An extension of yakitoritabetai Cartographer.LabelTextCollision (<a href="https://triedeti.github.io/Cartographer.streetlabels/">demo</a>).
		</td>
		<td>
			<a href="https://github.com/triedeti">Triede TI</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ggolikov/Cartographer.Viewpoint">Cartographer.Viewpoint</a>
		</td>
		<td>
			Displays circleMarker with multiple directions.
			Useful to show photos taken from one point. (<a href="https://ggolikov.github.io/Cartographer.Viewpoint/example/">demo</a>).
		</td>
		<td>
			<a href="https://github.com/ggolikov">Grigory Golikov</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/react-map/leaflet.magicMarker">Cartographer.magicMarker</a>
		</td>
		<td>
			Adding magical animation effect to a marker while loading.(<a href="https://react-map.github.io/leaflet.magicMarker/">Demo</a>).
		</td>
		<td>
			<a href="https://github.com/react-map">Sylvenas</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/brandonxiang/leaflet.marker.highlight">Cartographer.Marker.Highlight</a>
		</td>
		<td>
			Adding highlight performance for L.marker.(<a href="https://brandonxiang.github.io/leaflet.marker.highlight/examples/">Demo</a>).
		</td>
		<td>
			<a href="https://github.com/brandonxiang">Brandon Xiang</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/nypl-spacetime/Cartographer.GeotagPhoto">Cartographer.GeotagPhoto</a>
		</td>
		<td>
			Plugin for photo geotagging, with two modes: camera and crosshair (<a href="http://spacetime.nypl.org/Cartographer.GeotagPhoto/examples/camera.html">Demo</a>).
		</td>
		<td>
			<a href="https://github.com/bertspaan">Bert Spaan</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.GLMarkers">Cartographer.GLMarkers</a>
		</td><td>
			Display thousands of markers with custom WebGL shaders, optionally animated. (<a href='http://https://ivansanchez.gitlab.io/Cartographer.GLMarkers/demo/repl.html'>demo</a>)
		</td><td>
			<a href="https://gitlab.com/IvanSanchez">Iván Sánchez Ortega</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ggolikov/Cartographer.River">Cartographer.River</a>
		</td>
		<td>
			Draw lines with different width (like rivers) on a map.
			Useful when you want to show how rivers 'flow' on the map (<a href="https://ggolikov.github.io/Cartographer.River/">demo</a>).
		</td>
		<td>
			<a href="https://github.com/ggolikov">Grigory Golikov</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/sybri/Cartographer.SpeechBubble/">Cartographer.SpeechBubble</a>
		</td>
		<td>
			Popup a speech bubble with the arrow that follow points,layer, markers ...
			 (<a href="https://sybri.github.io/demo/Cartographer.SpeechBubble/demo.html">demo</a>).
		</td>
		<td>
			<a href="https://github.com/sybri">Sylvain BRISSY</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://wbkd.github.io/leaflet-swoopy/">Cartographer Swoopy</a>
		</td>
		<td>
			A plugin for creating customizable swoopy arrow annotations.
		</td>
		<td>
			<a href="https://webkid.io">webkid</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Oliv/leaflet-polycolor">leaflet-polycolor</a>
		</td>
		<td>
			Color each polyline segment. (<a href='https://oliv.github.io/leaflet-polycolor/'>demo</a>)
		</td>
		<td>
			<a href="https://github.com/Oliv">Olivier Gasc</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/JackZouShao/leaflet-marker-direction">leaflet-marker-direction</a>
		</td>
		<td>
			display the path and the direction of the marker. (<a href='https://jackzoushao.github.io/leaflet-marker-direction/examples/marker-direction.html'>demo</a>)
		</td>
		<td>
			<a href="https://github.com/JackZouShao">Jack Zou</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/bbecquet/Cartographer.RotatedMarker">Cartographer Rotated Marker</a>
		</td>
		<td>
			Enables rotation of marker icons in Cartographer. (<a href='http://bbecquet.github.io/Cartographer.RotatedMarker/example.html'>Demo</a>)
		</td>
		<td>
			<a href="https://github.com/bbecquet">Benjamin Becquet</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://wbkd.github.io/leaflet-truesize/">Cartographer Truesize</a>
		</td>
		<td>
			A plugin for creating projection aware draggable polygons and polylines.
		</td>
		<td>
			<a href="https://webkid.io">webkid</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.RepeatedMarkers">Cartographer.RepeatedMarkers</a>
		</td>
		<td>
			Displays markers when wrapping around the globe, once every 360 degrees of longitude (<a href="https://ivansanchez.gitlab.io/Cartographer.RepeatedMarkers/demo.html">demo</a>).
		</td>
		<td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/nuclearsecrecy/Cartographer.greatCircle">Cartographer.greatCircle</a>
		</td>
		<td>
			A wrapper class for the Cartographer.js Polygon object that draws true "great circles" (showing true geodesic, spherical paths) that wrap around the Earth (<a href="https://nuclearsecrecy.github.io/Cartographer.greatCircle/example/">demo</a>).
		</td>
		<td>
			<a href="https://github.com/nuclearsecrecy/">Alex Wellerstein</a>
		</td>
	</tr>

</table>



### Overlay animations

These plugins animate markers or some geometries. See also [geometries with time or elevation](#geometryinteraction-time).

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/openplans/Cartographer.AnimatedMarker">Cartographer.AnimatedMarker</a>
		</td><td>
			Animate a marker along a polyline.
		</td><td>
			<a href="https://github.com/atogle">Aaron Ogle</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/maximeh/leaflet.bouncemarker">Cartographer.BounceMarker</a>
		</td><td>
			Make a marker bounce when you add it to a map.
		</td><td>
			<a href="https://github.com/maximeh">Maxime Hadjinlian</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/hosuaby/Cartographer.SmoothMarkerBouncing">Cartographer.SmoothMarkerBouncing</a>
		</td><td>
			Smooth animation of marker bouncing for Cartographer.
		</td><td>
			<a href="https://github.com/hosuaby">Alexei KLENIN</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ewoken/Cartographer.MovingMarker">Cartographer.MovingMarker</a>
		</td><td>
			Allow to move markers along a polyline with custom durations.
		</td><td>
			<a href="https://github.com/ewoken">Ewoken</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/naturalatlas/leaflet-transitionedicon">Cartographer.TransitionedIcon</a>
		</td><td>
			Transition in/out markers with CSS3 transitions. It supports jitter
			for staggering markers into view to prevent visual overload. See the <a href="http://naturalatlas.github.io/leaflet-transitionedicon/">demo</a>.
		</td><td>
			<a href="https://github.com/brianreavis">Brian Reavis</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IvanSanchez/Cartographer.Polyline.SnakeAnim">Cartographer.Polyline.SnakeAnim</a>
		</td><td>
			Animates (poly)lines into existence, as if they were being slowly drawn from start to end.
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>,
			<a href="https://github.com/MazeMap">MazeMap</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/rubenspgcavalcante/leaflet-ant-path">Cartographer.AntPath</a>
		</td><td>
			Cartographer.AntPath put a flux animation (like ants walking) into a Polyline.
			(<a href='http://rubenspgcavalcante.github.io/leaflet-ant-path/'>demo</a>)
		</td><td>
			<a href="https://github.com/rubenspgcavalcante">Rubens Pinheiro</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://gitlab.com/IvanSanchez/Cartographer.Marker.SlideTo">Cartographer.Marker.SlideTo</a>
		</td><td>
			Smoothly move (slide) markers to a new location. (<a href='http://ivansanchez.gitlab.io/Cartographer.Marker.SlideTo/demo.html'>demo</a>)
		</td><td>
			<a href="https://gitlab.com/u/IvanSanchez">Iván Sánchez Ortega</a>,
			<a href="https://github.com/MazeMap">MazeMap</a>
		</td>
	</tr>
	</table>



### Clustering/Decluttering

When you are displaying a lot of data, these plugins will make your map look cleaner.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/IntelligentMap/Cartographer.markercluster">Cartographer.markercluster</a>
		</td><td>
			Beautiful, sophisticated, high performance marker clustering solution with smooth animations and lots of great features. <em>Recommended!</em>
		</td><td>
			<a href="https://github.com/danzel">Dave Leaver</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MazeMap/Cartographer.LayerGroup.Collision">Cartographer.LayerGroup.Collision</a>
		</td><td>
			Provides collision detection for groups of markers. Unlike clustering, this takes into account the shape &amp; size of the markers.
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>,
			<a href="https://github.com/MazeMap">MazeMap</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jawj/OverlappingMarkerSpiderfier-Cartographer">Overlapping Marker Spiderfier</a>
		</td><td>
			Deals with overlapping markers in a Google Earth-inspired way by gracefully springing them apart on click.
		</td><td>
			<a href="http://mackerron.com">George MacKerron</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/SINTEF-9012/PruneCluster">PruneCluster</a>
		</td><td>
			Fast and realtime marker clustering library.
		</td><td>
			<a href="https://github.com/yellowiscool">Antoine Pultier</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/oliverroick/Cartographer.Deflate">Cartographer.Deflate</a>
		</td><td>
			Deflates lines and polygons to a marker when their screen size becomes too small in lower zoom levels.
		</td><td>
			<a href="https://github.com/oliverroick">Oliver Roick</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/andy-kay/Cartographer.GridCluster">Cartographer.GridCluster</a>
		</td><td>
			Create grid-based clusters in realtime.
		</td><td>
			<a href="https://github.com/andy-kay">Andreas Kiefer</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/spatialdev/q-cluster">q-cluster</a>
		</td><td>
			Quick point clustering library with D3 categorization.
		</td><td>
			<a href="https://github.com/hallahan">Nicholas Hallahan</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Eclipse1979/leaflet-conditionalLayer">Cartographer.ConditionalLayer</a>
		</td><td>
			A FeatureGroup that does not show any more than a certain amount of markers visible in the viewport. (<a href="http://eclipse1979.github.io/Cartographer.ConditionalLayer/example/leaflet-conditionalLayer2.html">Demo</a>)
		</td><td>
			<a href="https://github.com/Eclipse1979">EPP</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ghybs/Cartographer.FeatureGroup.SubGroup">Cartographer.FeatureGroup.SubGroup</a>
		</td><td>
			A simple plugin to create Feature Groups that add their child layers into a parent group. Typical usage is to switch them through L.Control.Layers to dynamically add/remove groups of markers from Cartographer.markercluster. <a href="http://ghybs.github.io/Cartographer.FeatureGroup.SubGroup/examples/subGroup-markercluster-controlLayers-realworld.388.html">Demo</a>.
		</td><td>
			<a href="https://github.com/ghybs">ghybs</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ZijingPeng/leaflet-tooltip-layout">leaflet-tooltip-layout</a>
		</td><td>
			A plugin to avoid tooltips overlapping and make it easier to find out the relationship between each tooltip and marker. <a href="https://zijingpeng.github.io/overlapping-avoided-tooltip/">Demo</a>.
		</td><td>
			<a href="https://github.com/ZijingPeng">Zijing Peng</a>
		</td>
	</tr>
</table>

### Heatmaps

These plugins create heatmaps and heatmap-like visualizations from vector data.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/domoritz/leaflet-maskcanvas">MaskCanvas</a>
		</td><td>
			Canvas layer that can be used to visualize coverage.
		</td><td>
			<a href="https://github.com/domoritz">Dominik Moritz</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/sunng87/heatcanvas">HeatCanvas</a>
		</td><td>
			Simple heatmap api based on HTML5 canvas.
		</td><td>
			<a href="https://github.com/sunng87">Sun Ning</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://www.patrick-wied.at/static/heatmapjs/example-heatmap-leaflet.html">heatmap.js</a>
		</td><td>
			JavaScript Library for HTML5 canvas based heatmaps.

			Its Cartographer layer implementation supports large datasets because it is tile based and uses a quadtree index to store the data.
		</td><td>
			<a href="https://github.com/pa7">Patrick Wied</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dpiccone/leaflet-div-heatmap">Cartographer divHeatmap</a>
		</td><td>
			Lightweight and versatile heatmap layer based on CSS3 and divIcons

		</td><td>
			<a href="https://github.com/dpiccone">Daniele Piccone</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://ursudio.com/webgl-heatmap-leaflet/">WebGL Heatmap</a>
		</td><td>
			High performance Javascript heatmap plugin using WebGL.

		</td><td>
			<a href="https://twitter.com/bozdoz">Benjamin J DeLong</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IntelligentMap/Cartographer.heat">Cartographer.heat</a>
		</td><td>
			A tiny, simple and fast Cartographer heatmap plugin. Uses <a href='https://github.com/mourner/simpleheat'>simpleheat</a> under the hood, additionally clustering points into a grid for performance. (<a href='https://leaflet.github.io/Cartographer.heat/demo'>Demo</a>)

		</td><td>
			<a href="https://github.com/mourner">Vladimir Agafonkin</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mejackreed/leaflet-solr-heatmap">Cartographer-Solr-Heatmap</a>
		</td><td>
			A Cartographer plugin for rendering heatmaps and clusters from <a href='https://lucene.apache.org/solr/guide/6_6/spatial-search.html#SpatialSearch-HeatmapFaceting'>Solr's Heatmap Faceting</a>. High performance for millions of points or polygons.
		</td><td>
			<a href="https://github.com/mejackreed">Jack Reed</a> /
			<a href="https://github.com/spacemansteve">Steve McDonald</a>
		</td>
	</tr>
</table>


### DataViz

Powerful multi-purpose libraries for data visualization.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/giscience/geogrid.js">geogrid.js</a>
		</td><td>
			Displays data aggregated by the ISEA3H discrete global grid system.  The data can, e.g., be delived by using <a href="https://github.com/giscience/measures-rest">Measures REST</a> (a framework to deliver data aggregated by the grid) or <a href="https://github.com/giscience/geogrid">geogrid</a> (a library for handling the grid in case that you want to aggregate data manually).
		</td><td>
			<a href="http://www.mocnik-science.net">F.-B. Mocnik,</a><br><a href="http://www.geog.uni-heidelberg.de/gis/index_en.html">GIScience Research Group,<br>Heidelberg University</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://dynmeth.github.com/RaphaelLayer/">RaphaelLayer</a>
		</td><td>
			Allows you to use <a href="http://raphaeljs.com/">Raphael</a> as a layer on a Cartographer map for advanced animations and visualizations.
		</td><td>
			<a href="https://github.com/dynmeth">Dynamic Methods</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://humangeo.github.com/leaflet-dvf/">Cartographer Data Visualization Framework</a>
		</td><td>
			New markers, layers, and utility classes for easy thematic mapping and data visualization.
		</td><td>
			<a href="https://github.com/sfairgrieve">Scott Fairgrieve</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/teralytics/Cartographer.D3SvgOverlay">Cartographer.D3SvgOverlay</a>
		</td><td>
			SVG overlay class for using with <a href="http://d3js.org">D3</a> library. Supports zoom animation and scaling without need to redraw the layer.
		</td><td>
			<a href="https://github.com/xEviL">Kirill Zhuravlev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mapbox/mapbox-gl-leaflet">mapbox-gl-leaflet</a>
		</td><td>
			Binding from Mapbox GL JS to the Cartographer API
		</td><td>
			<a href="https://github.com/tmcw">Tom MacWright</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/wandergis/leaflet-echarts">leaflet-echarts</a>
		</td><td>
			A plugin for Cartographer to load <a href="https://github.com/ecomfe/echarts">echarts</a> map and make big data visualization easier.
		</td><td>
			<a href="https://github.com/wandergis">wandergis</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/atlefren/storymap">jquery-storymap</a>
		</td><td>
			A jQuery plugin to display several map locations as the user scrolls through paragraphs.
		</td><td>
			<a href="https://github.com/atlefren">Atle Frenvik Sveen</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/rstudio/leaflet">Cartographer for R</a>
		</td><td>
			Allows using Cartographer from within <a href="https://en.wikipedia.org/wiki/R_%28programming_language%29">R</a> programs, a programming language popular for statistical analysis and data mining.
		</td><td>
			<a href="https://github.com/rstudio/">RStudio team</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/react-map/leaflet.migrationLayer">leaflet.migrationLayer</a>
		</td><td>
			leafet.migrationLayer is used to show migration data such as population,flight,vehicle,traffic and so on.Data visualization on map.<a href="https://react-map.github.io/leaflet.migrationLayer">demo</a>
		</td><td>
			<a href="https://github.com/react-map">Sylvenas</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://ibesora.github.io/Cartographer.Quadtree/">Cartographer.Quadtree</a>
		</td><td>
			Cartographer.Quadtree is used to retrieve visible data inside given bounds
		</td><td>
			<a href="https://github.com/ibesora">ibesora</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jwasilgeo/Cartographer.Canvas-Flowmap-Layer">Cartographer.Canvas-Flowmap-Layer</a>
		</td><td>
			A CartographerJS custom map layer for mapping the flow of objects, ideas, people, etc. with Bezier curves rendered on the HTML canvas.
		</td><td>
			<a href="https://github.com/jwasilgeo">Jacob Wasilkowski</a>,
			<a href="https://github.com/sarahbellum">Sarah Bell</a>
    </td>
  </tr>
  <tr>
    <td>
			<a href="https://github.com/manubb/Cartographer.PixiOverlay">Cartographer.PixiOverlay</a>
		</td><td>
			A Cartographer overlay class for drawing and animating with <a href="http://www.pixijs.com/">Pixi.js</a>. (<a href="https://manubb.github.io/Cartographer.PixiOverlay/demo.html">demo</a>)
		</td><td>
			<a href="https://github.com/manubb">Manuel Baclet</a>
		</td>
	</tr>
	 <tr>
        <td>
    		<a href="https://github.com/danwild/leaflet-velocity">leaflet-velocity</a>
    	</td>
    	<td>
            Visualise velocity layers with leaflet.
            <a href="https://danwild.github.io/leaflet-velocity">Demo here.</a>
        </td>
        <td>
            <a href="https://github.com/danwild">Dan Wild</a>
        </td>
    </tr>
</table>



## Interaction with geometries/features

The following plugins enable users to interact with overlay data: edit geometries, select areas or features, interact with the time dimension, search features and display information about them.

* [Edit geometries](#edit-geometries)
* [Time & elevation](#time--elevation)
* [Search & popups](#search--popups)
* [Area/overlay selection](#areaoverlay-selection)

### Edit geometries

Allows users to create, draw, edit and/or delete points, lines and polygons.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/codeofsumit/leaflet.pm">Cartographer.PM</a>
		</td><td>
			Geometry Management for Cartographer 1.0 and higher. Draw, Edit, Cut, Drag and Snap Layers like Markers, Circles, Rectangles, Polylines, Polygons, LayerGroups, geoJSON, MultiPolygons, MultiLineStrings. Supports holes in polygons, snapping, canvas mode and more. (<a href="https://leafletpm.now.sh">Demo</a>)
		</td><td>
			<a href="https://github.com/codeofsumit">Sumit Kumar</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Wildhoney/Cartographer.FreeDraw">Cartographer.FreeDraw</a>
		</td><td>
			Zoopla inspired freehand polygon creation using Cartographer.js and D3.
		</td><td>
			<a href="https://github.com/Wildhoney">Wildhoney</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/scripter-co/leaflet-plotter">Cartographer.plotter</a>
		</td><td>
			leaflet-plotter allows you to create routes using a leaflet powered map. You can click on the mid-points to create a new, draggable point.
		</td><td>
			<a href="https://github.com/scripter-co">Nathan Mahdavi</a>
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://github.com/tkrajina/leaflet-editable-polyline">Cartographer.Editable.Polyline</a>
		</td><td>Editable polylines: move existing points, add new points and split polylines.
		</td><td>
			<a href="https://github.com/tkrajina">Tomo Krajina</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IntelligentMap/Cartographer.draw">Cartographer.draw</a>
		</td><td>
			Enables drawing features like polylines, polygons, rectangles, circles and markers through a very nice user-friendly interface with icons and hints. <em>Recommended!</em>
		</td><td>
			<a href="https://github.com/jacobtoye">Jacob Toye</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/kartena/Cartographer.EditableHandlers">Cartographer.EditableHandlers</a>
		</td><td>
			A set of plugins that includes circle editing, measuring tool, and label for polygon sides.
		</td><td>
			<a href="http://www.kartena.se/">Kartena</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dwilhelm89/Cartographer.StyleEditor">Cartographer.StyleEditor</a>
		</td><td>
			Enables editing the styles of features (lines, polygons, etc) and markers with a GUI.
		</td><td>
			<a href="https://github.com/dwilhelm89">Dennis Wilhelm</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jdomingu/Cartographer.SimpleMarkers">Cartographer.SimpleMarkers</a>
		</td><td>
			A light-weight Cartographer plugin for adding and deleting markers.
		</td><td>
			<a href="https://github.com/jdomingu">Jared Dominguez</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/yohanboniface/Cartographer.Editable">Cartographer.Editable</a>
		</td><td>
			Lightweight fully customisable and controlable drawing/editing plugin.
		</td><td>
			<a href="http://yohanboniface.me/">Yohan Boniface</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/w8r/Cartographer.Path.Drag">Cartographer.Path.Drag</a>
		</td>
		<td>
			Drag handler and interaction for polygons and polylines (<a href="https://w8r.github.io/Cartographer.Path.Drag">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/w8r/">Alexander Milevski</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/w8r/Cartographer.Path.Transform">Cartographer.Path.Transform</a>
		</td>
		<td>
			Scale & rotate handler and interaction for polygons and polylines (<a href="https://w8r.github.io/Cartographer.Path.Transform">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/w8r/">Alexander Milevski</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.Snap">Cartographer.Snap</a>
		</td><td>
			Enables snapping of draggable markers to polylines and other layers.
		</td><td>
			<a href="https://github.com/leplatrem">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/willfarrell/Cartographer.Clipper">Cartographer.Clipper</a>
		</td><td>
			Allows Union, Difference, Xor, and Intersection operations on two polygons. (<a href="https://willfarrell.github.io/Cartographer.Clipper">Demo</a>)
		</td><td>
			<a href="https://github.com/willfarrell">will Farrell</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/SINTEF-9012/Cartographer.MapPaint">Cartographer.MapPaint</a>
		</td>
		<td>
			Bitmap painting plugin designed for touch devices.
		</td><td>
			<a href="https://github.com/yellowiscool">Antoine Pultier</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/yohanboniface/Cartographer.Storage">Cartographer.Storage</a>
		</td><td>
			Create/update/delete Map, Marker, Polygon, Polyline... and expose them for backend storage with an API.
		</td><td>
			<a href="http://yohanboniface.me/">Yohan Boniface</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Wildhoney/L.Pather">Cartographer.Pather</a>
		</td><td>
			L.Pather is a freehand polyline creator that simplifies the polyline for mutability. Requires D3 support.
		</td><td>
			<a href="https://github.com/Wildhoney">Wildhoney</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/manleyjster/Cartographer.Illustrate">Cartographer.Illustrate</a>
		</td><td>
			Extension for Cartographer.draw enabling users to <a href="http://manleyjster.github.io/Cartographer.Illustrate/examples/0.0.2/simple/">type annotations directly on maps</a>.
		</td><td>
			<a href="https://github.com/manleyjster">Justin Manley</a>
		</td>
	</tr>
        <tr>
		<td>
			<a href="https://github.com/kklimczak/Cartographer.Pin">Cartographer.Pin</a>
		</td><td>
			Enable attaching of markers to other layers during draw or edit features with Cartographer.Draw.
		</td><td>
			<a href="https://github.com/kklimczak">Konrad Klimczak</a>
		</td>
	</tr>
        <tr>
		<td>
			<a href="https://github.com/tcoupin/leaflet-paintpolygon">L.Control.PaintPolygon</a>
		</td><td>
			Draw yours polygons with a circle brush like Paint[brush]. Includes turf.js dependencies.
		</td><td>
			<a href="https://github.com/tcoupin">Thibault Coupin</a>
		</td>
	</tr>
</table>


### Time & elevation

Most data is two-dimensional (latitude and longitude), but some data has more dimensions (altitude and/or time). The following plugins help users navigate these extra dimensions.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/socib/Cartographer.TimeDimension">Cartographer.TimeDimension</a>
		</td>
		<td>
			Add time dimension capabilities on a Cartographer map. <a href="http://apps.socib.es/Cartographer.TimeDimension/examples/index.html">Demos</a>
		</td>
		<td>
			<a href="http://www.socib.eu">ICTS SOCIB</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dwilhelm89/CartographerSlider">Cartographer Time-Slider</a>
		</td><td>
			The Cartographer Time-Slider enables you to dynamically add and remove Markers on a map by using a JQuery UI slider
		</td><td>
			<a href="https://github.com/dwilhelm89">Dennis Wilhelm</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/hallahan/CartographerPlayback">CartographerPlayback</a>
		</td><td>
			Play back time-stamped GPS Tracks synchronized to a clock.
		</td><td>
			<a href="http://theoutpost.io">Nicholas Hallahan</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/skeate/Cartographer.timeline">Cartographer.timeline</a>
		</td><td>
			Display arbitrary GeoJSON on a map with a timeline slider and play button.
		</td><td>
			<a href="https://github.com/skeate">Jonathan Skeate</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MrMufflon/Cartographer.Elevation">Cartographer.Elevation</a>
		</td><td>
			A Cartographer plugin to view interactive height profiles of GeoJSON lines using <a href="http://d3js.org/">d3</a>.
		</td><td>
			<a href="https://github.com/MrMufflon">Felix Bache</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/iosphere/Cartographer.hotline">Cartographer.hotline</a>
		</td><td>
			A Cartographer plugin for drawing gradients along polylines.
		</td><td>
			<a href="https://github.com/iosphere">iosphere</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/linghuam/Cartographer.TrackPlayBack">leaflet.TrackPlayBack</a>
		</td>
		<td>
			A leaflet track-playback plugin, can display and dynamically play tracks. <a href="https://linghuam.github.io/Cartographer.TrackPlayBack/">Demo</a>.
		</td>
		<td>
			<a href="https://github.com/linghuam">linghuam</a>
		</td>
	</tr>
</table>




### Search & popups

Plugins that search for overlays and enhance how to display information about them.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/naomap/leaflet-fusesearch">leaflet-fusesearch</a>
		</td><td>
			A control that provides a panel to search features in a GeoJSON layer using the lightweight fuzzy search Fuse.js
		</td><td>
			<a href="http://www.naomap.fr">Antoine Riche</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/stefanocudini/leaflet-search">Cartographer Search</a>
		</td><td>
			A control for search Markers/Features location by custom property in LayerGroup/GeoJSON. Support AJAX/JSONP, Autocompletion and 3rd party service
		</td><td>
			<a href="http://labs.easyblog.it">Stefano Cudini</a>
		</td>
	</tr>
	<tr>
        	<td>
            		<a href="https://github.com/8to5Developer/leaflet-custom-searchbox">leaflet-custom-searchbox</a>
        	</td>
		<td>
            		A google map style search box which includes a side panel slider control.
        	</td>
		<td>
		        <a href="https://github.com/8to5Developer/">A.D</a>
			</td>
          </tr>
	<tr>
		<td>
			<a href="http://erictheise.github.com/rrose">Cartographer.Rrose</a>
		</td><td>
			A Cartographer Plugin for Edge Cases.  For use when you want popups on <em>mouseover</em>, not <em>click</em>, and
			you need popup tips to reorient as you get close to the edges of your map.
		</td><td>
			<a href="http://www.linkedin.com/in/erictheise">Eric Theise</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/danzel/Cartographer.utfgrid">Cartographer.utfgrid</a>
		</td><td>
			Provides a utfgrid interaction handler for leaflet a very small footprint.
		</td><td>
			<a href="https://github.com/danzel">Dave Leaver</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/yohanboniface/Cartographer.RevealOSM">Cartographer.RevealOSM</a>
		</td><td>
			Very simple but extendable Cartographer plugin to display OSM POIs data on map click.
		</td><td>
			<a href="http://yohanboniface.me">Yohan Boniface</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/perliedman/leaflet-underneath">Cartographer Underneath</a>
		</td><td>
			Find interesting features near a location using Mapbox Vector Tiles data, to add
			interactive functionality to a tile layer with speed and limited bandwidth.
		</td><td>
			<a href="http://github.com/perliedman">Per Liedman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/utahemre/Cartographer.GeoJSONAutocomplete">Cartographer.GeoJSONAutocomplete</a>
		</td><td>
			Cartographer Autocomplete For Remote Searching with GeoJSON Services.
		</td><td>
			<a href="https://github.com/utahemre">Yunus Emre Özkaya</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/maydemirx/leaflet-tag-filter-button">L.tagFilterButton</a>
		</td><td>
			LeafLet marker filtering by tags
		</td><td>
			<a href="https://github.com/maydemirx">Mehmet Aydemir</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Twista/leaflet-google-places-autocomplete">Cartographer-gplaces-autocomplete</a>
		</td><td>
			Add google places search into map
		</td><td>
			<a href="https://github.com/Twista">Michal Haták</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/yafred/leaflet-responsive-popup">leaflet-responsive-popup</a>
		</td><td>
			Removes the need to move the map to be able to see the content of the popup.
		</td><td>
			<a href="https://github.com/yafred">YaFred</a>
		</td>
	</tr>
</table>



### Area/overlay selection

These plugins help users select either overlays or areas in the map.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/heyman/leaflet-areaselect/">Cartographer.AreaSelect</a>
		</td><td>
			A fixed positioned, resizable rectangle for selecting an area on the map.
		</td><td>
			<a href="http://heyman.info">Jonatan Heyman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/kajic/leaflet-locationfilter/">leaflet-locationfilter</a>
		</td><td>
			A draggable/resizable rectangle for selecting an area on the map.
		</td><td>
			<a href="https://github.com/kajic">Robert Kajic</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/w8r/L.Control.LineStringSelect">L.Control.LineStringSelect</a>
		</td>
		<td>
			Fast LineString(polyline) partial selection tool: select a stretch between two points in a complex path. <a href="https://w8r.github.io/L.Control.LineStringSelect">Demo</a>
		</td>
		<td>
			<a href="https://github.com/w8r">Alexander Milevski</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/openplans/Cartographer.FeatureSelect">Cartographer.FeatureSelect</a>
		</td><td>Use a configurable centerpoint marker to select any geometry type from a GeoJSON layer.
		</td><td>
			<a href="https://github.com/atogle">Aaron Ogle</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/stefanocudini/leaflet-geojson-selector">Cartographer GeoJSON Selector</a>
		</td>
		<td>
			Cartographer Control for selection from GeoJSON feature in a interactive list and map(<a href="http://labs.easyblog.it/maps/leaflet-geojson-selector/">Demo</a>).
		</td>
		<td>
			<a href="http://labs.easyblog.it/stefano-cudini/">Stefano Cudini</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IvanSanchez/Cartographer.CheapLayerAt">Cartographer.CheapLayerAt</a>
		</td>
		<td>
			Allows querying which layer is under a screen coordinate (<a href="http://ivansanchez.github.io/Cartographer.CheapLayerAt/demo.html">Demo</a>).
		</td>
		<td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>,
			<a href="https://github.com/MazeMap">MazeMap</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/sandropibia/Cartographer.SelectAreaFeature/">Cartographer.SelectAreaFeature</a>
		</td><td>
			Selecting feature layers on a map by drawing an area.
		</td><td>
			<a href="http://pezzo.org">Sandro Pibia</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mkong0216/leaflet-shades/"> Cartographer-Shades </a>
		</td>
		<td>
			A draggable and resizable rectangle for selecting an area on a map and creating a gray overlay in unselected areas (<a href="https://mkong0216.github.io/leaflet-shades/examples">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/mkong0216"> Mandy Kong </a>
		</td>
	</tr>
  <tr>
		<td>
			<a href="https://github.com/zakjan/leaflet-lasso">leaflet-lasso</a>
		</td>
		<td>
			True lasso selection plugin
		</td>
		<td>
			<a href="https://github.com/zakjan">Jan Zak</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/olanaso/Cartographer-Select-Polygons">Cartographer-Select-Polygons</a>
		</td>
		<td>
			Cartographer-Select-Polygons allows the selection of several polygons and also adjusts the base map view (<a href="https://olanaso.github.io/Cartographer-Select-Polygons/">demo</a>)
		</td>
		<td>
			<a href="https://github.com/olanaso">Erick S Escalante Olano</a>
		</td>
	</tr>
</table>



## Map interaction

New ways to interact with the map itself.

* [Layer switching controls](#layer-switching-controls)
* [Interactive pan/zoom](#interactive-panzoom)
* [Bookmarked pan/zoom](#bookmarked-panzoom)
* [Fullscreen](#fullscreen-controls)
* [Minimaps & synced maps](#minimaps--synced-maps)
* [Measurement](#measurement)
* [Mouse coordinates](#mouse-coordinates)
* [Events](#events)
* [User interface](#user-interface)
* [Print/export](#printexport)
* [Geolocation](#geolocation)

### Layer switching controls

The following plugins enhance or extend `L.Control.Layers`.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/aebadirad/Cartographer.AutoLayers">Cartographer.AutoLayers</a>
		</td><td>
			Automatically pull layers from multiple mapservers and organize/search them with user controlled overlay zindex management.
		</td><td>
			<a href="https://github.com/aebadirad">Alex Ebadirad</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/vogdb/SelectLayersControl">Cartographer.SelectLayers</a>
		</td><td>
			a Cartographer plugin which adds new control to switch between different layers on the map. New control replaces L.Control.Layers radio button panel with select tag.
		</td><td>
			<a href="https://github.com/vogdb">vogdb</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/davicustodio/Cartographer.StyledLayerControl">Cartographer.StyledLayerControl</a>
		</td><td>
			A Cartographer plugin that implements the management and control of layers by organization into categories or groups.
		</td><td>
			<a href="https://github.com/davicustodio">Davi Custodio</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ismyrnow/Cartographer.groupedlayercontrol">Cartographer.GroupedLayerControl</a>
		</td><td>
			Cartographer layer control with support for grouping overlays together.
		</td><td>
			<a href="https://github.com/ismyrnow">Ishmael Smyrnow</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://elesdoar.github.io/leaflet-control-orderlayers/">Cartographer Control Order Layers</a>
		</td><td>
			Adds the ability to change overlay order in the layers control.
		</td><td>
			<a href="https://github.com/elesdoar/">Michael Salgado</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/robbiet480/leaflet-categorized-layers">Cartographer Categorized Layers</a>
		</td><td>
			Cartographer Control Layers extended for groups of categorized layers
		</td><td>
			<a href="http://robbie.io/">Robbie Trencheny</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/stefanocudini/leaflet-panel-layers">Cartographer Panel Layers</a>
		</td><td>
			Cartographer Control Layers extended for group of layers and icons legend
		</td><td>
			<a href="http://labs.easyblog.it">Stefano Cudini</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/chriscalip/L.UniformControl">Cartographer.UniformControl</a>
		</td><td>
			Cartographer layer control with stylable checkboxes and radio buttons.
		</td><td>
			<a href="https://github.com/chriscalip">Chris Calip</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ScanEx/Cartographer-IconLayers">Cartographer-IconLayers</a>
		</td><td>
			Cartographer control that displays base layers as small icons (<a href="http://scanex.github.io/Cartographer-IconLayers/examples">demo</a>).
		</td><td>
			<a href="https://github.com/zverev">Alexander Zverev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/bambrikii/leaflet-layer-tree-plugin">Leafet.LayerTreePlugin</a>
		</td><td>
			Cartographer control allows to switch layers on and off, display them in a tree-like way (<a href="http://rawgit.com/bambrikii/leaflet-layer-tree-plugin/master/examples/basic-example.htm">demo</a>).
		</td><td>
			<a href="https://github.com/bambrikii">Alexander Arakelyan</a>
		</td>
	</tr>
		<tr>
		<td>
			<a href="https://github.com/consbio/Cartographer.Basemaps">Cartographer.Basemaps</a>
		</td><td>
			A basemap chooser with a preview image from the tile stack.
			<a href="http://consbio.github.io/Cartographer.Basemaps/">Example</a>
		</td><td>
			<a href="https://github.com/brendan-ward">Brendan Ward</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jjimenezshaw/Cartographer.Control.Layers.Tree">Cartographer.Control.Layers.Tree</a>
		</td><td>
			L.Control.Layers extension that supports a Tree structure, both for base and overlay layers. Simple and highly configurable. See <a href="https://jjimenezshaw.github.io/Cartographer.Control.Layers.Tree/examples/">demos</a>
		</td><td>
			<a href="https://github.com/jjimenezshaw/">Javier Jimenez Shaw</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/vogdb/Cartographer.ActiveLayers">Cartographer.ActiveLayers</a>
		</td><td>
			Adds new L.Control.ActiveLayers with functionality to get currently active layers on the map.
		</td><td>
			<a href="https://github.com/vogdb">vogdb</a>
		</td>
	</tr>
</table>


### Interactive pan/zoom

Change the way the user can interactively move around the map.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="http://kartena.github.com/Cartographer.Pancontrol/">Cartographer.Pancontrol</a>
		</td><td>
			A simple panning control.
		</td><td>
			<a href="http://www.kartena.se/">Kartena</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gregallensworth/L.Control.BoxZoom">Cartographer.BoxZoom</a>
		</td><td>
			A visible, clickable control to perform a box zoom.
		</td><td>
			<a href="https://github.com/gregallensworth/L.Control.BoxZoom">Greg Allensworth</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/elrobis/L.Control.ZoomBar">L.Control.ZoomBar</a>
		</td><td>
			An extended version of Cartographer's native Zoom control with Home and Zoom-to-Area buttons. <a href="https://elrobis.github.io/L.Control.ZoomBar/">Demo</a>
		</td><td>
			<a href="http://cartometric.com/blog/">Elijah Robison</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://kartena.github.com/Cartographer.zoomslider/">Cartographer.zoomslider</a>
		</td><td>
			A zoom slider control.
		</td><td>
			<a href="http://www.kartena.se/">Kartena</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/flaviocarmo/Cartographer.zoominfo/">Cartographer.zoominfo</a>
		</td><td>
			A zoom control which displays the current zoom level.
		</td><td>
			<a href="https://github.com/flaviocarmo">Flávio Carmo</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/slara/Cartographer.BorderPan">Cartographer.BorderPan</a>
		</td><td>
			A Cartographer plugin to pan by clicking on map borders.
		</td><td>
			<a href="https://github.com/slara">Sebastián Lara</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/SINTEF-9012/Cartographer.GameController">Cartographer GameController</a>
		</td><td>
			Interaction handler providing support for gamepads.
		</td><td>
			<a href="https://github.com/yellowiscool">Antoine Pultier</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/aratcliffe/Cartographer.twofingerzoom">Cartographer.twofingerZoom</a>
		</td><td>
			 Interaction handler for touch devices enabling zooming out with a two finger tap.
		</td><td>
			<a href="https://github.com/aratcliffe/">Adam Ratcliffe</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/consbio/Cartographer.ZoomBox">Cartographer.ZoomBox</a>
		</td>
		<td>
			A lightweight zoom box control: draw a box around the area you want to zoom to. <a href="https://consbio.github.io/Cartographer.ZoomBox">Demo</a>
		</td>
		<td>
			<a href="https://github.com/brendan-ward">Brendan Ward</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Zverik/Cartographer.LimitZoom">Cartographer LimitZoom</a>
		</td><td>
			Plugins to limit available zoom levels to a given list, either by
			restricting zooming or by interpolating tiles.
		</td><td>
			<a href="https://github.com/zverik">Ilya Zverev</a>
		</td>
	</tr>
  <tr>
		<td>
			<a href="https://github.com/GhostGroup/Cartographer.DoubleRightClickZoom">Cartographer.DoubleRightClickZoom</a>
		</td><td>
			 Interaction handler enabling zooming out with double right click.
		</td><td>
			<a href="https://github.com/mikeotoole/">Mike O'Toole</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/unbam/Cartographer.ZoomLabel">Cartographer.ZoomLabel</a>
		</td>
		<td>
			A simple zoom label control.
		</td>
		<td>
			<a href="https://github.com/unbam">Masashi Takeshita</a>
		</td>
	</tr>
</table>



### Bookmarked pan/zoom

Change the way the user is moved around the map, by jumping to predefined/stored places.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/pwldp/leaflet.viewcenter">Cartographer.viewcenter</a>
		</td><td>
			A simple control that adds a button to change view and zoom to predefinied values in options.
		</td><td>
			<a href="https://github.com/pwldp/">Dariusz Pawlak</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/alanshaw/leaflet-zoom-min/">leaflet-zoom-min</a>
		</td><td>
			Adds a button to the zoom control that allows you to zoom to the map minimum zoom level in a single click.
		</td><td>
			<a href="https://github.com/alanshaw/">Alan Shaw</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/davidchouse/Cartographer.NavBar">Cartographer Navigation Toolbar</a>
		</td><td>
			Cartographer control for simple back, forward and home navigation.
		</td><td>
			<a href="https://github.com/davidchouse">David C</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mithron/leaflet.locationlist">Cartographer Locationlist</a>
		</td><td>
			A control to jump between predefined locations and zooms.
		</td><td>
			<a href="https://github.com/mithron">Ivan Ignatyev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/nguyenning/Cartographer.defaultextent">Cartographer.defaultextent</a>
		</td>
		<td>
			A control that returns to the original start extent of the map.  Similar to the <a href="https://developers.arcgis.com/javascript/jssamples/widget_home.html">HomeButton</a> widget.
		</td>
		<td>
			<a href="https://github.com/nguyenning">Alex Nguyen</a>
		</td>
	</tr>
		<tr>
		<td>
			<a href="https://github.com/w8r/Cartographer.Bookmarks">Cartographer.Bookmarks</a>
		</td>
		<td>
			Control for adding and navigating between user-created bookmarks on the map.
		</td>
		<td>
			<a href="https://github.com/w8r/">Alexander Milevski</a>
		</td>
	</tr>
	<tr>
        <td>
			<a href="https://github.com/florpor/Cartographer.ShowAll">Cartographer.ShowAll</a>
		</td><td>
			A control that can show a predefined extent while saving the current one so it can be jumped back to.
		</td><td>
			<a href="https://github.com/florpor">Mor Yariv</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/torfsen/leaflet.zoomhome">Cartographer.zoomhome</a>
		</td>
		<td>
			Zoom control with a home button for resetting the view (<a href="http://torfsen.github.io/leaflet.zoomhome/">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/torfsen">Florian Brucker</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/cscott530/leaflet-history">Cartographer-History</a>
		</td>
		<td>
			Track history of map movements and zoom locations similar to a browser.
		</td>
		<td>
			<a href="https://github.com/cscott530">Chris Scott</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.RestoreView">Cartographer.RestoreView</a>
		</td><td>
			Stores and restores map view using localStorage.
		</td><td>
			<a href="https://github.com/leplatrem">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mlevans/leaflet-hash">leaflet-hash</a>
		</td><td>
			Plugin for persisting map state and browsing history through the URL hash.
		</td><td>
			<a href="https://github.com/mlevans">Michael Lawrence Evans</a>
		</td>
	</tr>
</table>



### Fullscreen controls

Allows display of the map in full-screen mode.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/mapbox/Cartographer.fullscreen">Cartographer.fullscreen</a>
		</td><td>
			A fullscreen button control by mapbox
		</td><td>
			<a href="https://github.com/mapbox">mapbox</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://brunob.github.com/leaflet.fullscreen">leaflet.fullscreen</a>
		</td><td>
			Another fullscreen button control but for modern browsers, using HTML5 Fullscreen API.
		</td><td>
			<a href="https://github.com/brunob/">Bruno B</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://elidupuis.github.com/leaflet.zoomfs">leaflet.zoomfs</a>
		</td><td>
			A fullscreen button control.
		</td><td>
			<a href="https://github.com/elidupuis">Eli Dupuis</a>
		</td>
	</tr>
</table>



### Minimaps & synced maps

Display two maps at once. One of them might be a different size and zoom level, usable as a minimap to aid with navigation.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/turban/Cartographer.Sync">Cartographer.Sync</a>
		</td><td>
			Synchronized view of two maps.
		</td><td>
			<a href="https://github.com/turban">Bjørn Sandvik</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Norkart/Cartographer-MiniMap">Cartographer.MiniMap</a>
		</td><td>
			A small minimap showing the map at a different scale to aid navigation.
		</td><td>
			<a href="https://github.com/robpvn">Robert Nordan</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/bbecquet/Cartographer.MagnifyingGlass">Cartographer.MagnifyingGlass</a>
		</td><td>
			Allows you to display a small portion of the map at another zoom level, either at a fixed position or linked to the mouse movement, for a magnifying glass effect.
		</td><td>
			<a href="https://github.com/bbecquet/">Benjamin Becquet</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jieter/Cartographer.layerscontrol-minimap">Cartographer.layerscontrol-minimap</a>
		</td><td>
			Extends the default Cartographer layers control with synced minimaps.
		</td><td>
			<a href="https://github.com/jieter">Jieter</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/chriswhong/leaflet-globeminimap/">Cartographer.GlobeMiniMap</a>
		</td><td>
			Simple minimap control that places a 3D Globe in the corner of your map, centered on the same location as the main map (<a href='http://chriswhong.github.io/leaflet-globeminimap/example/'>demo</a>).
		</td><td>
			<a href="https://github.com/chriswhong">Chris Whong</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jieter/leaflet-clonelayer">leaflet-clonelayer</a>
		</td><td>
			Clone Cartographer layers to allow reuse across different maps in the same runtime.
		</td><td>
			<a href="https://github.com/jieter">Jieter</a>
		</td>
	</tr>
</table>






### Measurement

Allow the user to measure distances or areas.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/ppete2/Cartographer.PolylineMeasure">Cartographer.PolylineMeasure</a>
		</td><td>
			 Measure great-circle distances of simple lines as well as of complex polylines. (<a href="https://ppete2.github.io/Cartographer.PolylineMeasure/demo1.html">Demo 1</a>), (<a href="https://ppete2.github.io/Cartographer.PolylineMeasure/demo2.html">Demo 2</a>), (<a href="https://ppete2.github.io/Cartographer.PolylineMeasure/demo3.html">Demo 3</a>)
		</td><td>
			<a href="https://github.com/ppete2">PPete</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.MeasureControl">Cartographer.MeasureControl</a>
		</td><td>
			A simple tool to measure distances on maps (*relies on Cartographer.Draw*).
		</td><td>
			<a href="https://github.com/makinacorpus/">Makina Corpus</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/zvaraondrej/Cartographer.MeasureAreaControl">Cartographer.MeasureAreaControl</a>
		</td><td>
			 Control for measuring element's area.
		</td><td>
			<a href="https://github.com/zvaraondrej">Ondrej Zvara</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ljagis/leaflet-measure">leaflet-measure</a>
		</td>
		<td>
			Coordinate, linear, and area measure control for Cartographer maps
		</td>
		<td>
			<a href="https://github.com/ljagis">LJA GIS</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/nerik/leaflet-graphicscale">leaflet-graphicscale</a>
		</td>
		<td>
			Animated graphic scale control (<a href='http://nerik.github.io/leaflet-graphicscale/demo/'>demo</a>).
		</td>
		<td>
			<a href="https://github.com/nerik">Erik Escoffier</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MarcChasse/leaflet.ScaleFactor">Cartographer.ScaleFactor</a>
		</td><td>
			Display a Scale Factor (e.g. 1:50,000) for Cartographer maps (<a href="https://marcchasse.github.io/leaflet.ScaleFactor/">Demo</a>)
		</td><td>
			<a href="https://github.com/MarcChasse">Marc Chasse</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/PowerPan/leaflet.nauticscale">Cartographer.nauticscale</a>
		</td><td>
			Display a Nauticscale on Cartographer maps
		</td><td>
			<a href="https://github.com/PowerPan">Johannes Rudolph</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/ProminentEdge/leaflet-measure-path">Cartographer Measure Path</a>
		</td><td>
			Show measurements on paths; polylines, polygons and circles currently supported (<a href="http://prominentedge.com/leaflet-measure-path/">demo</a>)
		</td><td>
			<a href="https://github.com/perliedman">Per Liedman</a> / <a href="http://prominentedge.com/">Prominent Edge</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/NLTGit/Cartographer.LinearMeasurement">Cartographer.LinearMeasurement</a>
		</td><td>
			Cartographer Linear Measurement plugin that creates polylines with incremental measures along the path. (<a href="https://nltgit.github.io/Cartographer.LinearMeasurement/">demo</a>)
		</td><td>
			<a href="http://www.newlighttechnologies.com/">New Light Technologies</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gokertanrisever/leaflet-ruler">leaflet-ruler</a>
		</td><td>
			A simple leaflet plugin to measure true bearing and distance between clicked points. (<a href="https://gokertanrisever.github.io/leaflet-ruler/">Demo</a>)
		</td><td>
			<a href="https://github.com/gokertanrisever">Goker Tanrisever</a>
		</td>
	</tr>
</table>








### Mouse coordinates

Show the geographical coordinates under the mouse cursor in different ways.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/ardhi/Cartographer.MousePosition">Cartographer.MousePosition</a>
		</td><td>
			A simple MousePosition control that displays geographic coordinates of the mouse pointer, as it is moved about the map
		</td><td>
			<a href="https://github.com/ardhi">Ardhi Lukianto</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MrMufflon/Cartographer.Coordinates">Cartographer.Coordinates</a>
		</td><td>
			A simple Cartographer plugin viewing the mouse LatLng-coordinates. Also views a marker with coordinate popup on userinput.
		</td><td>
			<a href="https://github.com/MrMufflon">Felix Bache</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/zimmicz/Cartographer-Coordinates-Control">Cartographer Coordinates Control</a>
		</td><td>
			Captures mouseclick and displays its coordinates with easy way to copy them.
		</td><td>
			<a href="https://github.com/zimmicz">Michal Zimmermann</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mahmoodvcs/Cartographer.NACCoordinates">Cartographer.NACCoordinates</a>
		</td>
		<td>
			Displays NAC coordinate of the mouse pointer on mouse move (<a href="http://mahmoodvcs.github.io/Cartographer.NACCoordinates/">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/mahmoodvcs">Mahmood Dehghan</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/PowerPan/leaflet.mouseCoordinate">Cartographer.mouseCoordinates</a>
		</td>
		<td>
			Displays the Mouse Coordinate in a Box.
			Multiple Formats Are Possible
			<ul>
				<li>GPS</li>
				<li>UTM</li>
				<li>UTMREF / MGRS</li>
				<li>QTH</li>
			</ul>
		</td>
		<td>
			<a href="https://github.com/PowerPan">Johannes Rudolph</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/stefanocudini/leaflet-locationpicker">Cartographer Location Picker</a>
		</td>
		<td>
			Simple location picker with mini Cartographer map (<a href="http://labs.easyblog.it/maps/leaflet-locationpicker/">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/stefanocudini/">Stefano Cudini</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/xguaita/Cartographer.MapCenterCoord">Cartographer.MapCenterCoord</a>
		</td>
		<td>
			A Cartographer control to display the coordinates of the map center, especially useful on touch/mobile devices. (<a href="http://xguaita.github.io/Cartographer.MapCenterCoord/">Doc & demos</a>)
		</td>
		<td>
			<a href="https://github.com/xguaita">Xisco Guaita</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/matlads/Cartographer.Mapcodes">Cartographer.Mapcodes</a>
		</td>
		<td>
			Displays the <a href="http://www.mapcode.com">Mapcode</a> of the mouse pointer on mouse move (<a href="http://matlads.github.io/Cartographer.Mapcodes/">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/matlads">Martin Atukunda</a>
		</td>
	</tr>
</table>









### Events

These plugins extend Cartographer event handling.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/elmarquis/Cartographer.GestureHandling/">Cartographer.GestureHandling</a>
		</td><td>
		Brings the basic functionality of Google Maps Gesture Handling into Cartographer. Prevents users from getting trapped on the map when scrolling a long page.
			<a href="https://elmarquis.github.io/Cartographer.GestureHandling/examples/"> Demo</a>
		</td><td>
			<a href="https://github.com/elmarquis">Andy Marquis</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/CliffCloud/Cartographer.Sleep">L.Sleep</a>
		</td><td>
			Avoid unwanted scroll capturing.
			<a href="https://cliffcloud.github.io/Cartographer.Sleep"> Demo</a>
		</td><td>
			<a href="https://github.com/atstp">atstp</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.OverIntent">Cartographer.OverIntent</a>
		</td><td>
			Adds a new event ``mouseintent``, that differs from ``mouseover`` since it reflects user
			intentions to aim a particular layer.
		</td><td>
			<a href="https://github.com/makinacorpus/">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.AlmostOver">Cartographer.AlmostOver</a>
		</td><td>
			Trigger mouse events when cursor is "almost" over a layer.
		</td><td>
			<a href="https://github.com/makinacorpus/">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Mappy/Cartographer-active-area">Cartographer-active-area</a>
		</td><td>
			This plugin allows you to use a smaller portion of the map as an active area.
			All positioning methods (setView, fitBounds, setZoom) will be applied on this portion instead of the all map.
		</td><td>
			<a href="https://github.com/Mappy">Mappy</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MazeMap/Cartographer.ControlledBounds">Cartographer.ControlledBounds</a>
		</td><td>
			Inspired by Cartographer-active-area, automatically detects the largest area of the map not covered by any map controls and applies setView, fitBounds, setZoom, getBounds to that area.
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>,
			<a href="https://github.com/MazeMap">MazeMap</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Outdooractive/leaflet-singleclick_0.7">singleclick</a>
		</td>
		<td>
			Extend <code>L.Map</code> to fire a <code>singleclick</code> event (<a href="http://outdooractive.github.io/leaflet-singleclick_0.7/">demo</a>). Compatible with Cartographer 0.7.x only.
		</td>
		<td>
			<a href="http://glat.info">Guillaume Lathoud</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MazeMap/Cartographer.singleclick">singleclick</a>
		</td>
		<td>
			Extend <code>L.Evented</code> to fire a <code>singleclick</code> event (<a href="https://mazemap.github.io/Cartographer.singleclick/">demo</a>). Compatible with Cartographer 1.0.0-beta1 and greater only.
		</td><td>
			<a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>,
			<a href="https://github.com/MazeMap">MazeMap</a>
		</td>
	</tr>

	<tr>
	        <td>
	            <a href="https://github.com/MazeMap/Cartographer.VisualClick">Cartographer.VisualClick</a>
	        </td>
	        <td>
	            Adds visual feedback when user clicks/taps the map (<a href="https://github.com/MazeMap/Cartographer.VisualClick/">demo</a>).
	            Useful when further action is delayed by server requests, or implementation of Cartographer.singleclick.
	            Or just because it looks cool :)
	            Only tested with Cartographer 1.0.0-beta1.
	        </td><td>
	            <a href="https://github.com/dagjomar">Dag Jomar Mersland</a>,
	            <a href="https://github.com/IvanSanchez">Iván Sánchez Ortega</a>,
	            <a href="https://github.com/MazeMap">MazeMap</a>
	        </td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/perliedman/leaflet-touch-helper">Cartographer Touch Helper</a>
		</td><td>
			Makes it easy to touch vector overlays with thick fingers on a small display by adding a transparent, larger touch surface
		</td><td>
			<a href="https://github.com/perliedman">Per Liedman</a> / <a href="http://prominentedge.com/">Prominent Edge</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/geoloep/Cartographer.ClickTolerance">Cartographer.ClickTolerance</a>
		</td><td>
			This plugin allows you to increase the click tolerance of canvas powered layers, making it possible to increase the clickable area of vector layers beyond their visible extent. Useful when your features are difficult to click otherwise.
		</td><td>
			<a href="https://github.com/geoloep">Geoloep</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/idawave/Cartographer.DraggableEnhancer">L.DraggableEnhancer</a>
		</td><td>
			Modify the default L.Draggable handler (responsible for map panning, ...) to make it work properly if one of the map container's parents has predefined handlers like "event.stopPropagation()' attached to a "mousemove" event for example.
		</td><td>
			<a href="https://github.com/idawave">Vincent Dechandon</a>
		</td>
	</tr>
</table>










### User interface

Buttons, sliders, toolbars, sidebars, and panels.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/yigityuce/Cartographer.Control.Custom">Cartographer.Control.Custom</a>
		</td><td>
			Fully customizable Cartographer control panel with HTML element.
			<a href="https://yigityuce.github.io/Cartographer.Control.Custom/examples/index.html"> Demo</a>
		</td><td>
			<a href="https://github.com/yigityuce">Yiğit Yüce</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/CliffCloud/Cartographer.EasyButton">L.EasyButton</a>
		</td><td>
			In one line, add a Font Awesome control button with attached click events.
			<a href="https://cliffcloud.github.io/Cartographer.EasyButton"> Demo</a>
		</td><td>
			<a href="https://github.com/atstp">atstp</a>
		</td>
	</tr>
		<tr>
		<td>
			<a href="https://github.com/aratcliffe/Cartographer.contextmenu">Cartographer.contextmenu</a>
		</td><td>
			A context menu for Cartographer.
		</td><td>
			<a href="https://github.com/aratcliffe/">Adam Ratcliffe</a>
		</td>
	</tr>
		<tr>
		<td>
			<a href="https://github.com/ahalota/Cartographer.CountrySelect/">Cartographer.CountrySelect</a>
		</td><td>
			Control with menu of all countries, and an event listener that returns
			the selected country as a GeoJSON feature (<a href="http://ahalota.github.io/Cartographer.CountrySelect/demo.html">demo</a>)
		</td><td>
			<a href="https://github.com/ahalota/">Anika Halota</a>
		</td>

	</tr>
	<tr>
		<td>
			<a href="https://github.com/turbo87/leaflet-sidebar/">leaflet-sidebar</a>
		</td><td>
			A responsive sidebar plugin.
		</td><td>
			<a href="https://github.com/turbo87/">Tobias Bieniek</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/turbo87/sidebar-v2/">sidebar-v2</a>
		</td><td>
			Another responsive sidebar plugin. This time with tabs!
		</td><td>
			<a href="https://github.com/turbo87/">Tobias Bieniek</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/tinuzz/leaflet-messagebox">Cartographer.Messagebox</a>
		</td>
		<td>
			Display a temporary text message on a map (<a href="https://www.grendelman.net/leaflet/">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/tinuzz/">Martijn Grendelman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/yohanboniface/Cartographer.TileLegend">Cartographer.TileLegend</a>
		</td><td>
			Create illustrated and interactive legends for your background layers.
		</td><td>
			<a href="http://yohanboniface.me">Yohan Boniface</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IntelligentMap/Cartographer.toolbar">Cartographer.toolbar</a>
		</td>
		<td>
			Flexible, extensible toolbars for Cartographer maps. View an example <a href="https://leaflet.github.io/Cartographer.toolbar/examples/popup.html">here</a>.
		</td>
		<td>
			<a href="https://github.com/manleyjster">Justin Manley</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gregallensworth/L.Control.Credits">L.Credits</a>
		</td>
		<td>
			A simple, attractive, interactive control to put your logo and link in the corner of your map.
		</td>
		<td>
			<a href="https://github.com/gregallensworth/">Greg Allensworth</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.Spin">Cartographer.Spin</a>
		</td><td>
			Shows a nice spinner on the map using <a href="http://fgnass.github.com/spin.js/">Spin.js</a>,
			for asynchronous data load, like with <a href="https://github.com/calvinmetcalf/leaflet-ajax">Cartographer Ajax</a>.
		</td><td>
			<a href="https://github.com/leplatrem">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/oskosk/Cartographer.Weather">Cartographer Weather</a>
		</td>
		<td>
			A Cartographer plugin for adding a weather widget to the map using OpenWeatherMap API (<a href="http://oskosk.github.io/Cartographer.Weather/">Demo</a>).
		</td>
		<td>
			<a href="https://github.com/oskosk">Osk</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dalbrx/Cartographer.ResizableControl">Cartographer ResizableControl</a>
		</td>
		<td>
			A Cartographer plugin to add a resizable and scrollable control to the map (<a href="http://dalbrx.github.io/Cartographer.ResizableControl/">Demo</a>).
		</td>
		<td>
			<a href="https://github.com/dalbrx">David Albrecht</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Eclipse1979/leaflet-slider">Cartographer.Slider</a>
		</td>
		<td>
			Adds a <code>&lt;input type="range"&gt;</code> slider that calls a function every time its input is changed (<a href="https://github.com/Eclipse1979/leaflet-slider">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/Eclipse1979">EPP</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mapshakers/leaflet-control-window">leaflet-control-window</a>
		</td><td>
		Creates modal/modeless, draggable, responsive, customisable window in your map.
		</td><td>
			<a href="https://github.com/mapshakers">mapshakers</a>/
			<a href="https://github.com/filipzava">Filip Zavadil</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/utahemre/Cartographer.CoordinatedImagePreview">Cartographer.CoordinatedImagePreview</a>
		</td><td>
			Displays coordinated images in map bounds.
		</td><td>
			<a href="https://github.com/utahemre">Yunus Emre Özkaya</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/unbam/Cartographer.SlideMenu">Cartographer.SlideMenu</a>
		</td>
		<td>
			A simple slide menu for Cartographer.
		</td>
		<td>
			<a href="https://github.com/unbam">Masashi Takeshita</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/NBTSolutions/Cartographer.Dialog">Cartographer.Dialog</a>
		</td>
		<td>
			A simple resizable, movable, customizable dialog box. (<a href="http://nbtsolutions.github.io/Cartographer.Dialog/">Demo</a>)
		</td>
		<td>
			<a href="https://github.com/NBTSolutions">NBT Solutions</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/MAD-GooZe/Cartographer.BootstrapZoom">Cartographer.BootstrapZoom</a>
		</td>
		<td>
			Overrides default zoom control buttons with Twitter Bootstrap styled ones
		</td>
		<td>
			<a href="https://github.com/MAD-GooZe">Alexey Gusev</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/route360/Cartographer.CondensedAttribution">Cartographer.CondensedAttribution</a>
		</td>
		<td>
			An attribution plugin that makes long attributes visible on hover
		</td>
		<td>
			<a href="http://www.motionintelligence.net/">Motion Intelligence GmbH</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/consbio/Cartographer.HtmlLegend">Cartographer.HtmlLegend</a>
		</td>
		<td>
			A simple Cartographer plugin for creating legends using HTML elements. <a href="https://consbio.github.io/Cartographer.HtmlLegend/">Demo</a>.
		</td>
		<td>
			<a href="https://github.com/ka7eh">Kaveh Karimi</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/publiclab/leaflet-blurred-location/">leaflet-blurred-image</a>
		</td>
		<td>
			A Cartographer-based interface for selecting a "blurred" or low-resolution location, to preserve privacy. <a href="https://publiclab.github.io/leaflet-blurred-location/examples/">Demo</a>.
		</td>
		<td>
			<a href="https://github.com/publiclab">Public Lab</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jjimenezshaw/Cartographer.Control.Resizer">Cartographer.Control.Resizer</a>
		</td><td>
			Control to resize your map on the right or bottom side. See <a href="https://jjimenezshaw.github.io/Cartographer.Control.Resizer/examples/basic.html">demo</a>
		</td><td>
			<a href="https://github.com/jjimenezshaw/">Javier Jimenez Shaw</a>
		</td>
	</tr>
</table>



### Print/export

Print or export your map.

<!--
- Saving a Cartographer Map to a PNG Example using Javascript and PHP https://github.com/tegansnyder/Cartographer-Save-Map-to-PNG
- Get a PNG from a Cartographer map and export it in PDF https://github.com/chrissom/leaflet-pdf
-->

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/aratcliffe/Cartographer.print">Cartographer.print</a>
		</td><td>
			Implements the Mapfish print protocol allowing a Cartographer map to be printed using either the Mapfish or GeoServer print module.
		</td><td>
			<a href="https://github.com/aratcliffe">Adam Ratcliffe</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mapbox/leaflet-image">Cartographer-image</a>
		</td><td>
			Export images out of Cartographer maps without a server component, by using Canvas and CORS.
		</td><td>
			<a href="https://github.com/tmcw">Tom MacWright</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/rowanwins/leaflet-easyPrint">Cartographer-easyPrint</a>
		</td><td>
			A simple plugin which adds an icon to print your Cartographer map.
		</td><td>
			<a href="https://github.com/rowanwins">Rowan Winsemius</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Igor-Vladyka/leaflet.browser.print">leaflet.browser.print</a>
		</td><td>
			Allows users to print full page map directly from the browser.
		</td><td>
			<a href="https://github.com/Igor-Vladyka">Igor Vladyka</a>
		</td>
	</tr>
</table>



### Geolocation

Plugins that extend Cartographer's geolocation capabilities.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/CliffCloud/Cartographer.LocationShare">L.LocationShare</a>
		</td><td>
			Allow users to send and receive a marker with a message.
			<a href="https://cliffcloud.github.io/Cartographer.LocationShare"> Demo</a>
		</td><td>
			<a href="https://github.com/atstp">atstp</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/domoritz/leaflet-locatecontrol">Cartographer.Locate</a>
		</td><td>
			A customizable locate control.
		</td><td>
			<a href="https://github.com/domoritz">Dominik Moritz</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/stefanocudini/leaflet-compass">Cartographer Control Compass</a>
		</td><td>
			A leaflet control plugin to build a simple rotating compass
		</td><td>
			<a href="http://labs.easyblog.it/">Stefano Cudini</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/M165437/Cartographer.AccuratePosition">Cartographer.AccuratePosition</a>
		</td><td>
			Cartographer.AccuratePosition aims to provide a desired device location accuracy.
		</td><td>
			<a href="https://github.com/M165437">Michael Schmidt-Voigt</a>
		</td>
	</tr>
</table>





## Miscellaneous



### Geoprocessing

The following plugins perform several sorts of geoprocessing (mathematical and topological operations on points, lines and polygons).

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/kartena/Proj4Cartographer">Proj4Cartographer</a>
		</td><td>
			<a href="http://trac.osgeo.org/proj4js/">Proj4js</a> integration plugin, allowing you to use all kinds of weird projections in Cartographer.
		</td><td>
			<a href="http://www.kartena.se/">Kartena</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/springmeyer/arc.js">arc.js</a>
		</td><td>
			A JS library for drawing great circle routes that can be used with Cartographer.
		</td><td>
			<a href="https://github.com/springmeyer">Dane Springmeyer</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/tmcw/leaflet-pip">Cartographer-pip</a>
		</td><td>
			Simple point in polygon calculation using <a href="https://github.com/substack/point-in-polygon">point-in-polygon</a>.
		</td><td>
			<a href="https://github.com/tmcw">Tom MacWright</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.GeometryUtil">Cartographer.GeometryUtil</a>
		</td><td>
			A collection of utilities for Cartographer geometries (linear referencing, etc.)
		</td><td>
			<a href="https://github.com/bbecquet">Benjamin Becquet</a>, <a href="https://github.com/leplatrem">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/w8r/GreinerHormann">Greiner-Hormann</a>
		</td>
		<td>
			Greiner-Hormann algorithm for polygon clipping and binary operations, adapted for use with Cartographer.
		</td>
		<td>
			<a href="https://github.com/w8r">Alexander Milevski</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/henrythasler/Cartographer.Geodesic">Cartographer.Geodesic</a>
		</td><td>
			Draw geodesic (poly)lines. A geodesic line is the shortest path between two given positions on the earth surface. and You can also calculate the exact distance between two given points on the map.
		</td><td>
			<a href="https://github.com/henrythasler">Henry Thasler</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/skeate/Cartographer.buffer">Cartographer.buffer</a>
		</td><td>
			Enables buffering of shapes drawn with Cartographer.draw.
		</td><td>
			<a href="https://github.com/skeate">Jonathan Skeate</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/makinacorpus/Cartographer.LayerIndex">Cartographer.LayerIndex</a>
		</td><td>
			An efficient spatial index for features and layers, using <a href="https://github.com/imbcmdth/RTree">RTree.js</a>.
		</td><td>
			<a href="https://github.com/leplatrem">Mathieu Leplatre</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mapzen/leaflet-spatial-prefix-tree">leaflet-spatial-prefix-tree</a>
		</td><td>
			Cartographer plugin for visualizing spatial prefix trees, quadtree and geohash. See <a href="http://mapzen.github.io/leaflet-spatial-prefix-tree/">demo</a>
		</td><td>
			<a href="http://mapzen.com/">Mapzen</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/jjimenezshaw/Cartographer.UTM">Cartographer.UTM</a>
		</td><td>
			A simple way to convert L.LatLng into UTM (WGS84) and vice versa. UTM string format easily configurable. It does not depend on any other plugin or 3rd party. See <a href="https://jjimenezshaw.github.io/Cartographer.UTM/examples/input.html">demo</a>
		</td><td>
			<a href="https://github.com/jjimenezshaw/">Javier Jimenez Shaw</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/briannaAndCo/Cartographer.Antimeridian">Cartographer.Antimeridian</a>
		</td><td>
			A plugin to allow polygons and polylines to naturally draw across the Antimeridian (or the Internation Date Line) instead of always wrapping across the Greenwich meridian. (<a href="https://briannaandco.github.io/Cartographer.Antimeridian/">Demo</a>)
		</td><td>
			<a href="https://github.com/briannaAndCo">Brianna Landon</a>
		</td>
	</tr>
</table>



### Routing

The following plugins use external services to calculate driving or walking routes.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="http://www.liedman.net/leaflet-routing-machine/">Cartographer Routing Machine</a>
		</td><td>
			Control for route search with via points, displaying itinerary and alternative routes. Uses
			<a href="http://project-osrm.org/">OSRM</a> by default, but also supports
			<a href="https://graphhopper.com/">GraphHopper</a>,
			<a href="https://www.mapbox.com/developers/api/directions/">Mapbox Directions API</a> and more.
		</td><td>
			<a href="https://github.com/perliedman">Per Liedman</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Turistforeningen/leaflet-routing">Cartographer.Routing</a>
		</td><td>
			Cartographer controller and interface for routing paths between waypoints using any user provided routing service.
		</td><td>
			<a href="https://github.com/turistforeningen">Norwegian Trekking Association</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/route360/r360-js">Route360°</a>
		</td><td>
			Route360° visualizes the area which is reachable from a set of starting points in a given time and gives detailed routing information (walk, bike, car and <b>public transportation</b>) to targets.
		</td><td>
			<a href="http://www.motionintelligence.net/">Motion Intelligence GmbH</a>
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://github.com/StephanGeorg/leaflet-routeboxer">Cartographer RouteBoxer</a>
		</td><td>
			This is a Cartographer implementation of the RouteBoxer Class from Google. The Cartographer 		RouteBoxer class generates a set of L.LatLngBounds objects that are guaranteed to cover every point within a specified distance of a path.
		</td><td>
			<a href="http://www.nearest.place/">Nearest!</a>
		</td>
	</tr>

	<tr>
    		<td>
    			<a href="https://github.com/BKGiser/Cartographer.Routing.Amap">Cartographer.Routing.Amap</a>
    		</td><td>
		Control for route search using <a href="http://www.amap.com/">AMap(高德地图)</a> as a backend. Supports the Chinese BD09 and GCJ02 coordinate systems, colourful lines, and turn-by-turn popups.
    		</td><td>
    			<a href="https://github.com/BKGiser">Jack Good</a>
    		</td>
    	</tr>
    <tr>
    	<td>
    		<a href="https://github.com/skedgo/leaflet.tripgo.routing">Cartographer TripGo routing</a>
    	</td>
    	<td>
    		The <b>TripGo</b> mobility platform let’s you create apps providing seamless and personalised door-to-door trips using any public, private or commercial mode of transport.
    		TripGo leaflet's plugin motivation is to provide an easy way to include it's functionality in an external platform.
    	</td>
    	<td>
    		<a href="http://skedgo.com/">SkedGo</a>
    	</td>
    </tr>
	<tr>
		<td>
			<a href="https://github.com/wwwouaiebe/leaflet.TravelNotes">leaflet.TravelNotes</a>
		</td>
		<td>
			Editable markers and routing engine for leaflet. The routing engine have plugins for Mapbox, GraphHopper and OSRM and can be used for car, bike or pedestrian route. <a href="https://wwwouaiebe.github.io/leaflet.TravelNotes/?lng=en">Demo</a>.
		</td>
		<td>
			<a href="https://github.com/wwwouaiebe">Christian Guyette</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/traffordDataLab/leaflet.reachability">Cartographer.Reachability</a>
		</td><td>
			Show areas of reachability based on time or distance for different modes of travel using the <a href="https://openrouteservice.org/documentation/#/reference/isochrones">openrouteservice isochrones API</a>.
		</td><td>
			<a href="https://github.com/traffordDataLab">Trafford Data Lab</a>
		</td>
	</tr>
</table>




### Geocoding

External services that transform an address or the name of a place into latitude and longitude (or vice versa).

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/smeijer/L.GeoSearch">Cartographer GeoSearch</a>
		</td><td>
			Small geocoding plugin that brings address searching/lookup (aka geosearching) to Cartographer.<br />
			Comes with support for Google, OpenStreetMap Nominatim, Bing, Esri and Nokia. Easily extensible.
		</td><td>
			<a href="https://github.com/smeijer">Stephan Meijer</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/k4r573n/leaflet-control-osm-geocoder">Cartographer Control OSM Geocoder</a>
		</td><td>
			A simple geocoder that uses OpenstreetMap Nominatim to locate places by address.
		</td><td>
			<a href="https://github.com/k4r573n">Karsten Hinz</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/sa3m/leaflet-control-bing-geocoder">Cartographer Control Bing Geocoder</a>
		</td><td>
			A simple geocoder control that uses Bing to locate places.
		</td><td>
			<a href="https://github.com/sa3m">Samuel Piquet</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/perliedman/leaflet-control-geocoder">Cartographer Control Geocoder</a>
		</td><td>
			A clean and extensible control for both geocoding and reverse geocoding. Builtin support for
			Nominatim, Bing, MapQuest, Mapbox, What3Words, Google and Photon. Easy to extend to other providers.
		</td><td>
			<a href="https://github.com/perliedman">Per Liedman</a>
		</td>
	</tr>
    	<tr>
		<td>
			<a href="https://github.com/jakubdostal/leaflet-geoip">Cartographer GeoIP Locator</a>
		</td><td>
			A simple plugin that allows finding the approximate location of IP addresses and map centering on said location.
		</td><td>
			<a href="https://github.com/jakubdostal">Jakub Dostal</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Esri/esri-leaflet-geocoder">Esri Cartographer Geocoder</a>
		</td><td>
			A geocoding control with suggestions powered by the ArcGIS Online geocoder.
		</td><td>
			<a href="https://github.com/patrickarlt/">Patrick Arlt</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/lokku/leaflet-opencage-search">Cartographer.OpenCage.Search</a>
		</td>
		<td>
			A search plugin plugin that uses <a href="http://geocoder.opencagedata.com/">OpenCage Data's geocoding API</a>.
		</td>
		<td>
			The <a href="https://github.com/opencagedata">OpenCage</a> team
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/consbio/Cartographer.Geonames">Cartographer.Geonames</a>
		</td>
		<td>
			A lightweight geocoding control powered by <a href="http://www.geonames.org/">GeoNames</a>.  <a href="https://consbio.github.io/Cartographer.Geonames">Demo</a>
		</td>
		<td>
			<a href="https://github.com/brendan-ward">Brendan Ward</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mapzen/leaflet-geocoder">Mapzen Search Cartographer Geocoder</a>
		</td>
		<td>
			A geocoding control using <a href="https://mapzen.com/projects/search">Mapzen Search</a> or any hosted service powered by the <a href="https://github.com/pelias/api">Pelias Geocoder API</a>.  <a href="https://mapzen.github.io/leaflet-geocoder/">Demo</a>
		</td>
		<td>
			<a href="https://github.com/louh">Lou Huang</a>
		</td>
	</tr>
</table>



### Plugin collections

Sets of plugins that span several categories.

Plugin developers: please keep future plugins in individual repositories.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/shramov/leaflet-plugins">Plugins by Pavel Shramov</a>
		</td><td>
			A set of plugins for: GPX, KML, TOPOJSON layers; Bing tile layer; Yandex layers (implemented with their APIs), and permalink control.
		</td><td>
			<a href="https://github.com/shramov">Pavel Shramov</a>, <a href="https://github.com/brunob">Bruno B</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Estimap/Spectrum4Cartographer">Spectrum4Cartographer</a>
		</td><td>
			Tools for using Spectrum Spatial Server services with leaflet. This plugin supports: map service, tile service, feature service. It has layers, legend and feature controls.
		</td><td>
			<a href="https://github.com/SVoyt">SVoyt</a>, <a href="https://github.com/Estimap">ESTI MAP</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://mapbbcode.org/leaflet.html">MapBBCode-related leaflet plugins</a>
		</td><td>
			Seven plugins for various features, independent of the MapBBCode library.
			From circular and popup icons to buttons, layer switcher, better search and attribution.
		</td><td>
			<a href="https://github.com/zverik">Ilya Zverev</a>
		</td>
	</tr>
</table>



## Integration

### Frameworks & build systems

Ease your development integrating Cartographer into a development framework or automating some of the javascript/CSS work for complex applications.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/ghybs/leaflet-defaulticon-compatibility">leaflet-defaulticon-compatibility</a>
		</td><td>
			Retrieve all Cartographer Default Icon options from CSS, in particular all icon images URL's, to improve compatibility with bundlers and frameworks that modify URL's in CSS. In particular for webpack (with style-, css-, file- and url-loader's), Rails Asset Pipeline and Django pipeline. Should solve all use cases linked to <a href="https://github.com/IntelligentMap/Cartographer/issues/4968">issue IntelligentMap/Cartographer #4968</a>. <a href="https://ghybs.github.io/leaflet-defaulticon-compatibility/webpack-demo.html">Demo with webpack</a> (and <a href="https://ghybs.github.io/leaflet-defaulticon-compatibility/webpack-demo.html?demo=no-plugin">without this plugin</a>).
		</td><td>
			<a href="https://github.com/ghybs">ghybs</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/moklick/generator-leaflet">Cartographer Yeoman Generator</a>
		</td><td>
			Yeoman generator that scaffolds out a basic Cartographer map application.
		</td><td>
			<a href="https://github.com/moklick">Moritz Klack</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/PaulLeCam/react-leaflet">react-leaflet</a>
		</td><td>
			<a href="https://facebook.github.io/react/">React</a> components for Cartographer maps.
		</td><td>
			<a href="http://paullecam.github.io/">Paul Le Cam</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/leaflet-extras/leaflet.css">Cartographer.CSS</a>
		</td><td>
			Add the main Cartographer CSS files (or any css) from within JavaScript, be gone conditional comments.
		</td><td>
			<a href="https://github.com/calvinmetcalf">Calvin Metcalf</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Norkart/Cartographer-LayerConfig">Cartographer LayerConfig</a>
		</td><td>
			Provide a json file or service response with a configuration of layers and markers to automatically set up a Cartographer client.
		</td><td>
			<a href="https://github.com/alexanno">Alexander Nossum</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/yohanboniface/Cartographer.i18n">Cartographer.i18n</a>
		</td><td>
			Internationalization for Cartographer plugins.
		</td><td>
			<a href="http://yohanboniface.me">Yohan Boniface</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/dagjomar/Cartographer.ZoomCSS">Cartographer ZoomLevel CSS Class</a>
		</td><td>
			Add zoom level css class to map element for easy style updates based on zoom levels
		</td><td>
			<a href="https://github.com/dagjomar">Dag Jomar Mersland</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/IjzerenHein/famous-map">famous-map</a>
		</td><td>
			Integrate Cartographer in applications made with the <a href='http://famo.us'>famo.us</a> web framework.
		</td><td>
			<a href="http://www.gloey.nl">Hein Rutjes</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/Asymmetrik/ngx-leaflet">ngx-leaflet</a>
		</td><td>
			Cartographer components and extensions for <a href="https://angular.io/">Angular.io</a>.
		</td><td>
			<a href="https://asymmetrik.com/">Asymmetrik, Ltd.</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/tombatossals/angular-leaflet-directive">Angular Cartographer directive</a>
		</td><td>
			Integrate Cartographer in applications made with the <a href='http://angularjs.org/'>AngularJS</a> web framework.
		</td><td>
			<a href="https://github.com/tombatossals">David Rubert</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/CleverMaps/tiny-leaflet-directive">Tiny Cartographer Directive</a>
		</td><td>
			Tiny CartographerJS map directive for your AngularJS apps.
		</td><td>
			<a href="https://github.com/mattesCZ">Martin Tesař</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/grantHarris/leaflet-popup-angular">Cartographer Popup Angular</a>
		</td><td>
			Use AngularJS in your Cartographer popups. Extends the built-in L.popup.
		</td><td>
			<a href="https://github.com/grantHarris">Grant Harris</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/grantHarris/leaflet-control-angular">Cartographer Control Angular</a>
		</td><td>
			Insert and use Angularized HTML code in your Cartographer map as a Cartographer control.
		</td><td>
			<a href="https://github.com/grantHarris">Grant Harris</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/yagajs/leaflet-ng2">YAGA leaflet-ng2</a>
		</td><td>
			Granular integration into Angular2/4. <a href="https://leaflet-ng2.yagajs.org/latest/examples"> demo </a>.
		</td><td>
			<a href="https://github.com/yagajs">YAGA Development Team</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/leaflet-extras/leaflet-map">&lt;leaflet-map&gt;</a>
		</td><td>
			Integrate Cartographer in applications made with the <a href='https://www.polymer-project.org/'>Polymer &gt;= 1.0</a> web component framework.
		</td><td>
			<a href="https://github.com/nhnb">Hendrik Brummermann</a>,
			<a href="https://github.com/prtksxna">Prateek Saxena</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/prtksxna/leaflet-map-component">Cartographer map component</a>
		</td><td>
			Integrate Cartographer in applications made with the <a href='https://www.polymer-project.org/0.5/'>Polymer 0.5</a> web framework.
		</td><td>
			<a href="https://github.com/prtksxna">Prateek Saxena</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://bitbucket.org/terrayazilim/leaflet.jsf">Cartographer.jsf</a>
		</td><td>
			Comprehensive Java Server Faces(JSF) Component/Wrapper for Cartographer.
		</td><td>
			<a href="http://terrayazilim.com.tr">Terra SI LLC.</a>
			<a href="https://bitbucket.org/terrayazilim">M.Çağrı Tepebaşılı</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/themrleon/JSF2Leaf">JSF2Leaf</a>
		</td><td>
			A JavaServer Faces wrapper for Cartographer.
		</td><td>
			<a href="https://github.com/themrleon">Leonardo Ciocari</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://www.ember-leaflet.com/">ember-leaflet</a>
		</td><td>
			Easy and declarative mapping for <a href="http://emberjs.com/">Ember.js</a> using Cartographer.
		</td><td>
			<a href="https://github.com/miguelcobain">Miguel Andrade</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/bevanhunt/meteor-leaflet">meteor-leaflet</a>
		</td><td>
			Provides a Meteor package to quickly build real-time cross-platform map apps.
		</td><td>
			<a href="https://github.com/bevanhunt">Bevan Hunt</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gregallensworth/L.Control.BootstrapModal">L.Control.BootstrapModal</a>
		</td><td>
			Trigger a Bootstrap modal using an on-map control.
		</td><td>
			<a href="https://github.com/gregallensworth">Greg Allensworth</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gregallensworth/L.Control.jQueryDialog">L.Control.jQueryDialog</a>
		</td><td>
			Trigger a jQuery UI dialog/modal using an on-map control.
		</td><td>
			<a href="https://github.com/gregallensworth">Greg Allensworth</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/mstahv/v-leaflet">V-Cartographer</a>
		</td><td>
			Use Cartographer as a component for the <a href='https://vaadin.com/home'>Vaadin</a> Java/HTML framework.
		</td><td>
			<a href="https://github.com/mstahv">Matti Tahvonen</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/gwidgets/gwty-leaflet">gwty-leaflet</a>
		</td><td>
			A Java/GWT JsInterop wrapper for Cartographer. It allows using Cartographer in Java the same way as from a javascript script.
		</td><td>
			<a href="https://github.com/zak905">Zakaria Amine</a>
		</td>
	</tr>
        <tr>
		<td>
			<a href="https://github.com/gherardovarando/leaflet-map-builder">Cartographer Map Builder</a>
		</td><td>
			It populates a leaflet map from a configuration object, can also creates zoom, layers, attribution and           draw controls. <a href="https://gherardovarando.github.io/leaflet-map-builder/"> demo </a>.
		</td><td>
			<a href="https://github.com/gherardovarando">Gherardo Varando</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://github.com/KoRiGaN/Vue2Cartographer">Vue2Cartographer</a>
		</td><td>
			<a href="https://github.com/KoRiGaN/Vue2Cartographer">Vue2Cartographer</a> is a JavaScript library for the <a href="https://vuejs.org/">Vue.js</a> framework that wraps Cartographer, making it easy to create reactive maps.
		</td><td>
			<a href="https://github.com/KoRiGaN">Mickaël KoRiGaN</a>
		</td>
	</tr>
</table>


### 3<sup>rd</sup> party integration

The following plugins integrate Cartographer into third party services or websites.

<table class="plugins"><tr><th>Plugin</th><th>Description</th><th>Maintainer</th></tr>
	<tr>
		<td>
			<a href="https://github.com/yohanboniface/Cartographer.EditInOSM">Cartographer.EditInOSM</a>
		</td><td>
			Add a control with links to open the current map view on main OSM editors.
		</td><td>
			<a href="http://yohanboniface.me">Yohan Boniface</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://www.mapsmarker.com/">Maps Marker Pro</a>
		</td><td>
			A WordPress plugin that enables users to pin, organize and share their favorite places and tracks through their WordPress powered site.
		</td><td>
			<a href="http://www.harm.co.at/">Robert Harm</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://wordpress.org/plugins/leaflet-map/">WordPress Cartographer Map</a>
		</td><td>
			Interactive and flexible shortcode to create multiple maps in posts and pages,
			and to add multiple markers on those maps.
		</td><td>
			<a href="https://twitter.com/bozdoz">Benjamin J DeLong</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://maptiks.com">Maptiks</a>
		</td>
		<td>
			Analytics platform for web maps. Track map activities, layer load times, marker clicks, and more!
		</td>
		<td>
			<a href="http://www.sparkgeo.com/">Sparkgeo</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="http://drupal.org/project/leaflet">Cartographer for Drupal</a>
		</td><td>
			A Drupal (7.x and 8.x) module to integrate Cartographer maps in your Drupal site. Contains a field formatter to show a map for fields containing geospatial data, Views integration to plot data on a map, and a lightweight and easy to use API. Currently used by over 10.000 sites.
		</td><td>
			<a href="http://marzeelabs.org">Marzee Labs</a>, and more maintainers listed at <a href="http://drupal.org/project/leaflet">drupal.org</a>
		</td>
	</tr>
	<tr>
		<td>
			<a href="https://lapizistik.github.io/leaflet-easymap/">Cartographer Easymap</a>
		</td><td>
			Include a map in your HTML page without one line of programming. A data-driven Javascript module.
		</td><td>
			<a href="https://github.com/Lapizistik">Klaus Stein</a>
		</td>
	</tr>
</table>



## Develop your own

Cartographer keeps it simple. If you can think of a feature that is not required by all Cartographer users, and you can write the JavaScript code in a reusable way, you've got yourself a Cartographer plugin already.

There are no hard requirements on how to create your own plugin, but all developers are encouraged to read the recommendations in the [plugin guide](https://github.com/IntelligentMap/Cartographer/blob/master/PLUGIN-GUIDE.md).

Once your plugin is ready, you can submit it to this list: just send a pull request with the addition to [/docs/plugins.md](https://github.com/IntelligentMap/Cartographer/blob/master/docs/plugins.md) to our GitHub repository.
