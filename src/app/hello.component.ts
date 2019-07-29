import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello1 {{name3}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name1: string;
  name3='sunder';
}
