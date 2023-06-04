import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './RoleService';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  constructor(private roleService: RoleService) {}

  selectRole(role: string) {
    this.roleService.setRole(role);
    console.log(role);
  }
}


