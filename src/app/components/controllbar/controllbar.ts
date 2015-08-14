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
	selector: 'controllbar'
})

@View({
	encapsulation: isNativeShadowDOMSupported ? ViewEncapsulation.NATIVE : ViewEncapsulation.EMULATED, // EMULATED (default), NATIVE, NONE
	templateUrl: 'app/components/controllbar/controllbar.html',
	styleUrls: [
		'app/components/controllbar/controllbar.css'
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

export class Controllbar {
	form: ControlGroup;
	constructor() {}
}
