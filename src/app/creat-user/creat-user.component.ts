
import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent {

  user: User = new User;

  constructor(private userService: UserService, private router:Router){

  }
  onSubmit(){
    this.userService.creatUser(this.user).subscribe(data=>{
     
    })
    this.router.navigate(['users'])
  }


}
