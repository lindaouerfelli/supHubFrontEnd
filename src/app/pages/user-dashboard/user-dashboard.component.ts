import {Component, OnInit} from '@angular/core';
import {LightInfoInput} from "../../components/light-info/light-info.component";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {


  accountInfoList : Array<LightInfoInput> = [];
  constructor() { }

//apres avoir exécuter l'application la premiere methode qui sexécute apres le constructeur cest le ngoninit

  ngOnInit(): void {

    this.initializeAccountInfo();

  }
    private initializeAccountInfo(){

    this.accountInfoList = [

      {
        title : 'Total Posts',
        nombre : 7,
        infoStyle: "bg-primary"
      }
    ];


    }
}
