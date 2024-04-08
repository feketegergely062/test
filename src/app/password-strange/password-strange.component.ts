import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strange',
  templateUrl: './password-strange.component.html',
  styleUrls: ['./password-strange.component.css']
})
export class PasswordStrangeComponent {
  @Input() password: string = '';
  passwordStrenght: string = '';

  calculateStrenght(){
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%&*()_-+-={};:?]/;

    let uppercaseCount = 0;
    let numberCount = 0;
    let specialCharCount = 0;

    for(let char of this.password){
      if( uppercaseRegex.test(char)){
        uppercaseCount++;
      }
    }
    for(let char of this.password){
      if( numberRegex.test(char)){
        numberCount++;
      }
    }
    for(let char of this.password){
      if( specialCharRegex.test(char)){
        specialCharCount++;
      }
    }

    if(uppercaseCount >= 1 && numberCount >= 2 && specialCharCount >=1){
      this.passwordStrenght = ' String';
    }else{
      this.passwordStrenght = 'Weak';
    }

  }
}
