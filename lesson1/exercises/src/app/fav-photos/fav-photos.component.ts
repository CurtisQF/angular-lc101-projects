import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos Section';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnSF1i6kr3SfCg150kXY6-7OVGg6D9ad9Bg&usqp=CAU';
  image3 = 'https://lh3.googleusercontent.com/proxy/rzQhIgJF00cz4hhLo2t3AJb2dMSQ7usOmQiB9BiJJhWCEUWkDc5qrzEmvXZvNG4zSp5C0Ui8N7XlGknC2um_iaFWQ8qNrfg';

  constructor() { }

  ngOnInit() {
  }

}