import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { ContributeComponent } from './screens/contribute/contribute.component';
import { MyContributesComponent } from './screens/my-contributes/my-contributes.component';
import { AllContributesComponent } from './screens/all-contributes/all-contributes.component';
import { AccountComponent } from './screens/account/account.component';
import { AccountEditComponent } from './screens/account-edit/account-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './screens/courses/courses.component';
import { ContributeDetailsComponent } from './screens/contribute-details/contribute-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributeComponent,
    MyContributesComponent,
    AllContributesComponent,
    AccountComponent,
    AccountEditComponent,
    HomeComponent,
    CoursesComponent,
    ContributeDetailsComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'all-contributes', component: AllContributesComponent },
      { path: 'my-contributes', component: MyContributesComponent },
      { path: 'contribute', component: ContributeComponent },
      { path: 'contribute-details', component: ContributeDetailsComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'account', component: AccountComponent },
      { path: 'account-edit', component: AccountEditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
