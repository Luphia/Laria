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
import { Controllbar } from '../controllbar/controllbar';
import { Menu } from '../menu/menu';
import { Board } from '../board/board';

@Component({
	selector: 'pannel'
})

@View({
	encapsulation: isNativeShadowDOMSupported ? ViewEncapsulation.NATIVE : ViewEncapsulation.EMULATED, // EMULATED (default), NATIVE, NONE
	templateUrl: 'app/components/pannel/pannel.html',
	styleUrls: [
		'app/components/pannel/pannel.css'
	],
	directives: [
		NgIf,
		DefaultValueAccessor,
		NgControlName,
		NgForm,
		NgFormModel,
		Icon,
		Controllbar,
		Menu,
		Board
	]
})

export class Pannel implements OnActivate, OnDeactivate {
	form: ControlGroup;
	constructor() {}
}
