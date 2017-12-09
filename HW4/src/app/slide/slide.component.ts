import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {  animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'slide-panel',
  styleUrls: [ './slide.component.css' ],
  templateUrl: './slide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
  ])
  ]
})
export class SlidePanelComponent {
	@Input() activePane: PaneType = 'right';

}


type PaneType = 'left' | 'right';