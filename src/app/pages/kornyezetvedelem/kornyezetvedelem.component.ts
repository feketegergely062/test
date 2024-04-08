import { Component } from '@angular/core';
import { trigger, transition, style,animate } from '@angular/animations';


@Component({
  selector: 'app-kornyezetvedelem',
  templateUrl: './kornyezetvedelem.component.html',
  styleUrls: ['./kornyezetvedelem.component.css'],
})


export class KornyezetvedelemComponent {
}

export const fadIn = trigger('fadeIn',[
  transition(':enter',[
    style({opacity:0}),
    animate('300ms',style({opacity:1})),
  ]),
]);


