import { Component, OnInit } from '@angular/core';
import * as OpenSeadragon from 'openseadragon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  viewer: OpenSeadragon.Viewer;
  slide = {
    mpp: 0.5,
    name: null,
    source: {
     Image: {
      Format: 'jpeg',
      Overlap: 1,
      Size: {
       Height: 38432,
       Width: 36832
      },
      TileSize: 510,
      Url: 'https://openslide-demo.s3.dualstack.us-east-1.amazonaws.com/leica/leica-1/slide_files/',
      // Url: '/assets/leica-1.scn',
      xmlns: 'http://schemas.microsoft.com/deepzoom/2008'
     }
    }
   }
  ngOnInit(): void {
    this.viewer = OpenSeadragon({
      id: 'openseadragon1',
      prefixUrl: '/assets/images/',
      animationTime: 0.5,
      blendTime: 0.1,
      constrainDuringPan: true,
      maxZoomPixelRatio: 2,
      minZoomLevel: 1,
      visibilityRatio: 1,
      zoomPerScroll: 2
    });
    this.viewer.open(this.slide.source);
  }
}
