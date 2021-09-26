import { Component, OnInit } from '@angular/core';
import { default as CHARACTERSHEETDATA } from '../assets/TanwenExport.json';
import { Character, Ability } from './classes/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.populateSheet();
  }

  populateSheet() {
    let myCharData = CHARACTERSHEETDATA;
    let myChar = new Character();
    console.log(myChar);
    myChar.name = "Tanwen Moncrief";

    let myAbilities = Ability[6];

    console.log(myCharData);

    if (!!myCharData) {
      let str = new Ability();
      str = myCharData.abilities.str;
      myAbilities.push(str);

      let con = new Ability();
      con = myCharData.abilities.con;
      myAbilities.push(con);
    };
  }
}
