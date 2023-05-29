import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = new User;
  username:string | undefined;
  constructor(private userService: UserService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.username=this.route.snapshot.params['username'];
    this.userService.getUserbyUsername(this.username as string).subscribe(data=>
      this.user=data
      )
  }
  onSubmit(){
    this.userService.creatUser(this.user).subscribe(data=>{
      console.log(data)
    })
  }
}
