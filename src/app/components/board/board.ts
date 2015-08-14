import {
	Inject,
	ElementRef,
	ViewEncapsulation,
	Component,
	View,
	NgIf,
	FormBuilder,
	DefaultValueAccessor,
	ControlGroup,
	NgControlName,
	NgForm,
	NgFormModel,
	Validators
} from 'angular2/angular2';
import { Instruction, OnActivate, OnDeactivate } from 'angular2/router';

import { isNativeShadowDOMSupported } from 'common/shadow_dom';
import { Animation, AnimationEndObserver } from 'common/animation';
import { Icon } from '../icon/icon';
import { Dashboard } from '../dashboard/dashboard';
import { Devices } from '../devices/devices';
import { Preference } from '../preference/preference';
import { About } from '../about/about';

@Component({
	selector: 'board'
})

@View({
	encapsulation: isNativeShadowDOMSupported ? ViewEncapsulation.NATIVE : ViewEncapsulation.EMULATED, // EMULATED (default), NATIVE, NONE
	templateUrl: 'app/components/board/board.html',
	styleUrls: [
		'app/components/board/board.css'
	],
	directives: [
		NgIf,
		DefaultValueAccessor,
		NgControlName,
		NgForm,
		NgFormModel,
		Icon,
		Dashboard,
		Devices,
		Preference,
		About
	]
})

export class Board {
	form: ControlGroup;

	constructor(private elementRef: ElementRef) {
		let page = location.hash.split("#/pannel/")[1];
		this.view(page);
	}
	view(page) {
		page = new String(page).toLowerCase();
		switch(page) {
			case 'dashboard':
				break;
			case 'devices':
				break;
			case 'preference':
				break;
			case 'about':
				break;
			default:
				page = 'about';
				break;
		}

		let el: HTMLElement = this.elementRef.nativeElement;
		let pre: HTMLElement = <HTMLElement>el.querySelector('* /deep/ .view');
		let nex: HTMLElement = <HTMLElement>el.querySelector('* /deep/ ' + page);
		if(pre) pre.classList.remove('view');
		if(nex) {
			setTimeout(
				(_) => {
					nex.classList.add('view');
				},
				200
			);
		}
	}
}
