import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { VariableSelectorComponent } from './variable-selector/variable-selector.component';
import { SelectColorsComponent } from './select-colors/select-colors.component';
import { CssTextComponent } from './css-text/css-text.component';
import { ColorGeneratorComponent } from './color-generator/color-generator.component';
import { MyButtonComponent } from './my-button/my-button.component';

@NgModule({
  declarations: [
    AppComponent,
    VariableSelectorComponent,
    SelectColorsComponent,
    CssTextComponent,
    ColorGeneratorComponent,
    MyButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
