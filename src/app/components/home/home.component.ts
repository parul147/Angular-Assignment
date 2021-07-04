import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[];
  @ViewChild('load') load: ElementRef;
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}
  goBack() {
    location.reload();
  }
  resetValue() {
    window.location.reload();
    this.load.nativeElement.style.marginTop = '0px';
  }
  ngOnInit(): void {
    this.users = this.userService.onGet();
  }
  onDelete(id: number) {
    this.userService.onDelete(id);
  }
}
