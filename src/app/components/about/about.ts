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
	selector: 'about'
})

@View({
	encapsulation: isNativeShadowDOMSupported ? ViewEncapsulation.NATIVE : ViewEncapsulation.EMULATED, // EMULATED (default), NATIVE, NONE
	templateUrl: 'app/components/about/about.html',
	styleUrls: [
		'app/components/about/about.css'
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

export class About {
	form: ControlGroup;
	constructor() {
    this.version = '0.1.0';
    this.description = 'You already have the latest version';
  }
}
