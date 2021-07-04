import {
  Component,
  OnInit,
  VERSION,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router, Route, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  header: string;
  currentRoute: string;
  @ViewChild('load') load: ElementRef;
  @ViewChild('refresh') refresh: ElementRef;
  OnValue() {
    console.log(this.load.nativeElement.value);
    if (this.load.nativeElement.style.display == 'block') {
      this.load.nativeElement.style.display = 'none';
      console.log('hide load button');
    }
  }
  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}
}
