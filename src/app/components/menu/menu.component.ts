import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  fullname : string = this.helperService.UserFullname;

  @Input() isAdmin = false;
  role = 'user';

  constructor(


    private router : Router,
    private helperService : HelperService
  ) { }

  ngOnInit(): void {
    if (this.isAdmin) {
      this.role = 'admin';
    }
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);


  }
}
