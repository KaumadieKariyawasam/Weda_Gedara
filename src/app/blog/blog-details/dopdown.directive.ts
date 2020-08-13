import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive ({    // make this file a directive
    selector: '[appDropDown]'
})

export class DropDownDirective {
@HostBinding('class.open') isOpen = false;

@HostListener('click') toggleopen() {
    this.isOpen = !this.isOpen;
 }
}
