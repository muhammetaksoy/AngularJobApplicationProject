import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:User[]=[];
  constructor(private userService:UserService,private alertService:AlertService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void{
    this.userService.getUsers().subscribe(response=>{
      if(response && response.length>0){
        this.users=response;  
      }
    })
  }

  onDeleteUser(id:number){
    if(confirm("Are you sure to delete")) {
      this.userService.removeUser(id).subscribe(res=>{
        this.alertService.deleteMessage();
        this.userService.getUsers();
      })
    }
  }

}
