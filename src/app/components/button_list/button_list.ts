import {
	Inject,
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
import { Icon } from '../icon/icon';

@Component({
	selector: 'button-list'
})

@View({
	encapsulation: isNativeShadowDOMSupported ? ViewEncapsulation.NATIVE : ViewEncapsulation.EMULATED, // EMULATED (default), NATIVE, NONE
	templateUrl: 'app/components/button_list/button_list.html',
	styleUrls: [
		'app/components/button_list/button_list.css'
	],
	directives: [
		NgIf,
		DefaultValueAccessor,
		NgControlName,
		NgForm,
		NgFormModel,
		Icon
	]
})

export class ButtonList {
	form: ControlGroup;
	constructor() {}
}
