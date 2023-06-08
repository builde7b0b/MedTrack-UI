import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleSubject = new BehaviorSubject<string>('Purchaser');
  role$ = this.roleSubject.asObservable();

  constructor() {}

  setRole(role: string) {
    this.roleSubject.next(role);
  }
}
