import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.less',
})
export class HeaderComponent {
    @Output()
    public menuClick: EventEmitter<void> = new EventEmitter();

    public onMenuClick() {
        this.menuClick.emit();
    }
}
