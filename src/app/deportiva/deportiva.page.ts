import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportiva',
  templateUrl: './deportiva.page.html',
  styleUrls: ['./deportiva.page.scss'],
})
export class DeportivaPage implements OnInit {

  imagenes: string[] = [
    'assets/d.jpg', 
    'assets/c.jpg'  
  ];

  constructor() { }

  ngOnInit() {
  }

}
