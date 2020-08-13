import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

  private ui: any;
  private search: any;

  
  @ViewChild("map")
  public mapElement: ElementRef;

  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  private platform: any;
  private map: any;

  public constructor() { }

  public ngOnInit() {
      this.platform = new H.service.Platform({
          "app_id": this.appId,
          "app_code": this.appCode
      });
      this.search = new H.places.Search(this.platform.getPlacesService());
  }

  public ngAfterViewInit() {
      let defaultLayers = this.platform.createDefaultLayers();
      this.map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.normal.map,
          {
              zoom: 10,
              center: { lat: this.lat, lng: this.lng }
          }
      );
      let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
      this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
  }

  public places(query: string) {
    this.map.removeObjects(this.map.getObjects());
    this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, data => {
        for(let i = 0; i < data.results.items.length; i++) {
            this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);
        }
    }, error => {
        console.error(error);
    });
  }

  private dropMarker(coordinates: any, data: any) {
    let marker = new H.map.Marker(coordinates);
    marker.setData("<p>" + data.title + "<br>" + data.vicinity + "</p>");
    marker.addEventListener('tap', event => {
        let bubble =  new H.ui.InfoBubble(event.target.getPosition(), {
            content: event.target.getData()
        });
        this.ui.addBubble(bubble);
    }, false);
    this.map.addObject(marker);
  }

}
