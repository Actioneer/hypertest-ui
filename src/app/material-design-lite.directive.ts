import {Directive, ElementRef, AfterViewInit} from '@angular/core';
declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})    
export class MDL implements AfterViewInit {
	constructor(private el: ElementRef) {

	}

    ngAfterViewInit() {
    	this.updateFloatingInputLabels();

        componentHandler.upgradeAllRegistered();
    }

    updateFloatingInputLabels(): void {
    	let inputElements = document.getElementsByTagName("input");
    	for (var index = 0; index < inputElements.length; index++) {
    		let inputElement = inputElements[index];
    		if (inputElement.hasAttribute('ng-reflect-model') && !inputElement.value) {
    			let classNames = inputElement.parentElement.className;
    			if (!classNames.includes('is-dirty')) {
    				inputElement.parentElement.className += ' is-dirty';
    			}
    			
    		}
    	}
    	  	
    }
}