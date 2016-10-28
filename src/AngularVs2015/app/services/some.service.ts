import { Injectable } from '@angular/core';

@Injectable()
export class SomeService {

    private someData: string;

    constructor() {
        this.someData = "Some Data from Service"
    }

    getSomeData(): string
    {
        return this.someData;
    }
}