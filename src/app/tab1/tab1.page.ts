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
  datapath: "../data/",
  planets:  { show: true }
});

  }

}
