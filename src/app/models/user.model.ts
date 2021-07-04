import { Data } from './taskInterface';

export class User implements Data {
  public id?: number;
  public FirstName: string | undefined;
  public MiddleName: string | undefined;
  public LastName: string | undefined;
  public Email: string | undefined;
  public PhoneNumber: string | undefined;
  public Role: string | undefined;
  public Address: string;
}
