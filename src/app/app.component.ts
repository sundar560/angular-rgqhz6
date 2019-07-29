import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  template:`
  <hello name1="{{ name2 }} "></hello>
<p>
  Start editing to see some magic happen :)
</p>
  `
})
export class AppComponent  {
  name2 = 'Angular';
}
