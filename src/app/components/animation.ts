import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn = 
    trigger('fadeIn', [
    
        transition(':enter', [
            style({
                opacity:0,
                transform: 'translateY(-25%)'
            }),
            animate('300ms linear', 
            style({
                opacity:1,
                transform: 'translateY(0%)'
            }))
            
        ])
    ]);