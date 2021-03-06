import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { FormComponent } from './form/form.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { EquipmentDetailComponent } from './equipment/equipment-detail/equipment-detail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EquipmentComponent,
    FormComponent,
    DocumentationComponent,
    HomeComponent,
    EquipmentListComponent,
    EquipmentDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
