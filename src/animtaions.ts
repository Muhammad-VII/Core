import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(500)]),
]);

export const fadeDelay = trigger('fadeDelay', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(1100)]),
]);
