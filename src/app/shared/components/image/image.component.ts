import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rc-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() public src!: string;
  @Input() public alt!: string;
  @Input() public height!: number;

  public isLoading = true;

  constructor() {}

  ngOnInit(): void {}

  public handleImageLoading(): void {
    this.isLoading = false;
  }
}
