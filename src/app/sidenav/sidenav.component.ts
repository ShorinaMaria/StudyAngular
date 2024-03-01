import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.less',
})
export class SidenavComponent {
    @Input()
    public isOpened = false;

    @Output()
    public isOpenedChange: EventEmitter<boolean> = new EventEmitter();

    public changeIsOpened() {
        this.isOpenedChange.emit(!this.isOpened);
    }
}
