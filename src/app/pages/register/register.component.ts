import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regModel:any={}
  password:any
  
  constructor(private auth:AuthService){}
  register(){
   
     this.auth.register(this.regModel)
   }
}
