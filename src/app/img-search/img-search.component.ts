import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-img-search',
  templateUrl: './img-search.component.html',
  styleUrls: ['./img-search.component.css'],
})
export class ImgSearchComponent implements OnInit {
  images = [];
  p: number = 1;
  keyword: string;

  constructor(private flickrService: FlickrService) {
    for (let i = 1; i < this.images.length; i++) {
      this.images.push(`item ${i}`);
    }
  }

  ngOnInit(): void {}

  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService
        .search_keyword(this.keyword)
        .toPromise()
        .then((res) => {
          this.images = res;
        });
    }
  }

  onScroll() {
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService
        .search_keyword(this.keyword)
        .toPromise()
        .then((res) => {
          this.images = this.images.concat(res);
        });
    }
  }
}
