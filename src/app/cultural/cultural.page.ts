import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.page.html',
  styleUrls: ['./cultural.page.scss'],
})
export class CulturalPage implements OnInit {

  imagenes: string[] = [
    'assets/d.jpg', 
    'assets/c.jpg'  
  ];


  constructor() { }

  ngOnInit() {
  }

}
