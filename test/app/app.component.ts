/**
 * Created by valentin.gushan on 26.01.2016.
 */
import {Component} from 'angular2/core';
import {AppService} from './app.service'
import {LoadingBar} from 'src/loading.bar';

@Component({
    selector: 'my-app',
    template: `
        <loading-bar></loading-bar>
        <h1>LoadingBar Test App</h1>
        <button (click)="refresh()">Refresh</button>
        {{ html }}

    `,
    directives: [LoadingBar]
})
export class AppComponent {
    public html:string;

    constructor(private _service:AppService) {
        this.refresh();
    }

    refresh() {
        this.html = 'loading ...';
        this._service.getSomeData().then((html:string) => {
            this.html = html;
        });
    }
}