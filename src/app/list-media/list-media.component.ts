import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  private images: any =[];
  private routes1: any = [];
  private stops: any = [];
  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getMedia().subscribe((res) => {
      this.images = res.json();
      console.log(this.images);
    }
    );

  this.mediaService.getRoutes('Gransinmäki').subscribe((res) =>{
    console.log(res);
    this.stops = res.data.stops;
  });
  }

}
