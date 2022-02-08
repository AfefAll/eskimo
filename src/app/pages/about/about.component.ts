import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data:any;
  constructor(private service:OrderDetailsService) {

    
   }

  ngOnInit(): void {
    this.service.adresseVente().subscribe((data)=>{
      this.data =data
      
     })
  }
}