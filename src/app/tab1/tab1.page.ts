import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
declare var Celestial:any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}
  geoFindMe() {
  //const status = document.querySelector("#status");
  //const mapLink = document.querySelector("#map-link");

  //mapLink.href = "";
  //mapLink.textContent = "";

  function success(position:any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    //status.textContent = "";
    //mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    //mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    $("#lat").val(latitude);
    $("#lon").val(longitude);
  }

  function error() {
    //status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    //status.textContent = "Geolocation is not supported by your browser";
  } else {
    //status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}


  ngOnInit(){
	   function reload_js(src:any) {
        $('script[src="' + src + '"]').remove();
        $('<script>').attr("type","text/javascript").attr('src', src).appendTo('head');
    }
	   function reload_css(src:any) {
        $('link[href="' + src + '"]').remove();
        $('<link>').attr("rel","stylesheet").attr('href', src).appendTo('head');
    }
reload_js('/assets/lib/d4.min.js');
reload_js('/assets/lib/d3.geo.projection.min.js')
reload_js('/assets/lib/celestial.min.js')
reload_css('/assets/lib/celestial.css')

Celestial.display({
  location: true,
  projection: "airy",
  datapath: "../assets/data/",
  planets:  { show: true }
});
this.geoFindMe()

  }

}
