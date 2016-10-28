import { Component } from '@angular/core';
import { SomeService } from '../services/some.service'

@Component({
    selector: 'large-c',
    templateUrl: 'app/components/large.component.html'
})
export class LargeComponent {

    constructor(private someService: SomeService) { }

    getSomeServiceInformation(): string
    {
        return this.someService.getSomeData();
    }
}