import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  user: User = {
    id: 0,
    FirstName: '',
    MiddleName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Role: '',
    Address: '',
  };
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';
    if (this.id != 0) {
      this.user = this.userService.getUser(this.id);
    }
  }
  onCancel() {
    this.router.navigateByUrl('/home');
  }
  onSubmit(form: NgForm) {
    console.log('form', form);
    let user: User = {
      id: form.value.id,
      FirstName: form.value.FirstName,
      MiddleName: form.value.MiddleName,
      LastName: form.value.LastName,
      Email: form.value.email,
      PhoneNumber: form.value.PhoneNumber,
      Role: form.value.Role,
      Address: form.value.Address,
    };
    if (this.id === 0) {
      this.userService.onAdd(user);
    } else {
      this.userService.onUpdate(user);
    }
    this.router.navigateByUrl('/home');
  }
}
