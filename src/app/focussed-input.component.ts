import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'focussed-input',
	template: `
		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input #inputField id="input-{{label}}" type="text" [(ngModel)]="value" class="mdl-textfield__input {{classes}}" mdl (keyup.enter)="submit()" (blur)="submit()" />
			<label class="mdl-textfield__label" for="input-{{label}}">{{label}}</label>
		</div>
	`
})
export class FocussedInputComponent implements AfterViewInit {

	@Input('value')
	value: any;
	@Input('label')
	label: string;
	@Input('classes')
	classes: string;
	@Output() 
	onEntered = new EventEmitter<string>();
	@Output() 
	onBlur = new EventEmitter<string>();
	@ViewChild('inputField')
	inputField : ElementRef;

	constructor() {}

	ngAfterViewInit() : void {
		console.log(this.inputField);
		this.inputField.nativeElement.focus();
	}

	submit(): void {
		this.onEntered.emit(this.value);
	}

}