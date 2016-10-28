import { AppComponent } from './app.component'
import { LargeComponent } from './components/large.component'
import { SmallComponent } from './components/small.component'

import { SomeService } from './services/some.service'

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
    imports:
    [
        BrowserModule
    ],
    declarations:
    [
        AppComponent,
        LargeComponent,
        SmallComponent
    ],
    providers:
    [
        SomeService
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule { }