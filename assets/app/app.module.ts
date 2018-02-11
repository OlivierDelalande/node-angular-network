import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from "./app.component";
import {MessageComponent} from './messages/message.component';
import {MessageListComponent} from './messages/message-list.component';
import {MessageInputComponent} from './messages/message-input.components';
import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';
import {HeaderComponent} from './header.component';
import {routing} from './app.routing';
import {LogoutComponent} from './auth/logout.component';
import {SigninComponent} from './auth/signin.component';
import {SignupComponent} from './auth/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}