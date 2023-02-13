import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() image: string = '';
  @Input() size: IconSize = IconSize.medium;
  @Input() isRemovable: boolean = false;
  @Output() itemClicked = new EventEmitter<string>();

  inputSrc = '';

  constructor() {}

  ngOnInit(): void {
    this.inputSrc = `../../../../assets/svg/${this.image}.svg`;
  }

  removeIcon(elem: any) {
    this.itemClicked.emit(elem);
  }

  addIcon(elem: any) {
    this.itemClicked.emit(elem);
  }
}

enum IconSize {
  small = 's',
  medium = 'm',
  large = 'l',
}
