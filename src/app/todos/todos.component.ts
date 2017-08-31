import {
  Component,
  OnInit
} from '@angular/core';

import { TodoComponent } from '.';
import { AppState } from '../app.service';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'todos'.
   */
  selector: 'todos',  // <todos></todos>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './todos.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Todos` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
