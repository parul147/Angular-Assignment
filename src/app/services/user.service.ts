import { Injectable } from '@angular/core';
import { User } from '../../app/models/user.model';
import { DATA } from '../user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = DATA;
  constructor() {}

  onGet() {
    return this.users;
  }
  onAdd(user: User) {
    this.users.push(user);
  }
  onDelete(id: number) {
    let user = this.users.find((x) => x.id === id);
    let index = this.users.indexOf(user, 0);
    this.users.splice(index, 1);
  }
  getUser(id: number) {
    return this.users.find((x) => x.id === id);
  }
  onUpdate(user: User) {
    let olduser = this.users.find((x) => x.id === user.id);
    olduser.id = user.id;
    olduser.FirstName = user.FirstName;
    olduser.MiddleName = user.MiddleName;
    olduser.LastName = user.LastName;
    olduser.Email = user.Email;
    olduser.PhoneNumber = user.PhoneNumber;
    olduser.Role = user.Role;
    olduser.Address = user.Address;
  }
}
