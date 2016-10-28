import { Component } from '@angular/core'
import { SomeService } from '../services/some.service'

@Component({
    selector: 'small-c',
    template: `
    <h2>Hello from small component.</h2>
    <p>And small component's service: {{getSomeServiceInformation()}}</p>
  `,
})
export class SmallComponent {
    constructor(private someService: SomeService) { }

    getSomeServiceInformation(): string {
        return this.someService.getSomeData();
    }
}

