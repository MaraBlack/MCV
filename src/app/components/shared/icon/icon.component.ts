import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() image: string = '';
  @Input() size: IconSize = IconSize.medium;
  @Input() isRemovable: boolean = false;

  inputSrc = '';

  constructor() {}

  ngOnInit(): void {
    this.inputSrc = `../../../../assets/svg/${this.image}.svg`;
    console.log(this.inputSrc);
  }

  ngOnChanges() {
    this.inputSrc = `../../../../assets/svg/${this.image}.svg`;
    console.log(this.inputSrc);
  }
  removeIcon(elem: any) {
    console.log(elem);
  }

  addIcon(elem: any) {
    console.log(elem);
  }
}

enum IconSize {
  small = 's',
  medium = 'm',
  large = 'l',
}
