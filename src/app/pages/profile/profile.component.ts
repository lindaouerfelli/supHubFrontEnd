import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from "../../services/services/users.service";
import {UserDto} from "../../services/models/user-dto";
import {ReservationDto} from "../../services/models/reservation-dto";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userdto: UserDto = {email: "", firstname: "", lastname: "", password: ""};
  userId : number | undefined ;
  message: string = ''; // Variable pour stocker le message



  constructor(
    private userService: UsersService,
    private route: Router,
    private helperService : HelperService
  ) { }

  ngOnInit(): void {

    this.userService.findById({
      "user-id" : this.helperService.UserId
    })
      .subscribe({
        next : (data) =>
        {
          this.userdto = data;
        }
      });

  }

  saveChanges(): void {
    this.userService.updateUserProfile({
      "user-id" : this.helperService.UserId,
      body : this.userdto

    }).subscribe(
      (response: UserDto) => {
        this.message = 'Profile updated successfully'; // Mettre à jour le message
        // Optionally, you can navigate to a different page or display a success message
      },
      (error) => {
        console.error('Error updating user profile:', error);
        this.message = 'Error updating profile'; // Mettre à jour le message en cas d'erreur
      }

    );
  }

  cancelUpdate(): void {
    this.route.navigate(['user/dashboard']);

  }
}
