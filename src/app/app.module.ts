import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReimburstmentComponent } from './reimburstment/reimburstment.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ProfileComponent } from './profile/profile.component';
import { ReimburstmentPendingComponent } from './reimburstment_pending/reimburstment-pending.component';
import { ReimburstmentResolvedComponent } from './reimburstment_resolved/reimburstment-resolved.component';
import { ReimburstmentUpdateComponent } from './reimburstment_update/reimburstment-update.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    ReimburstmentComponent,
    EmployeeComponent,
    ManagerComponent,
    EditEmployeeComponent,
    ProfileComponent,
    ReimburstmentPendingComponent,
    ReimburstmentResolvedComponent,
    ReimburstmentUpdateComponent,
    ManagerViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
