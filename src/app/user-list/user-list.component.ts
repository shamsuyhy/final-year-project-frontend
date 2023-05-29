import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] | undefined;
  constructor( private userService:UserService , private router:Router){

  }
  ngOnInit(): void {

      this.getUsers();
  }

  private getUsers(){
    this.userService.getUsers().subscribe((data)=>{
      this.users = data;
    })
  }
  editUser(username: any){
    this.router.navigate(['users',username]);
  }
  deleteUser(username: any){
    this.userService.deleteUser(username).subscribe(() => console.log("user deleted"));
    this.getUsers();
  }

}
