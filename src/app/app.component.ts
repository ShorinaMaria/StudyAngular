import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {
    public isOpened = false;

    public onMenuClick() {
        this.isOpened = !this.isOpened;
    }

    public toggleNavOpened(isOpened: boolean) {
        this.isOpened = isOpened;
    }
}
