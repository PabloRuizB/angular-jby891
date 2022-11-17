import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['styles.css'],
  template: `
        <div style="position: absolute; width: 100px; height: 60px; right: 0">
            <kendo-label class="k-form" text="Choose color">
                <kendo-colorpicker [value]="selected" (valueChange)="onChange($event)"> </kendo-colorpicker>
            </kendo-label>
        </div>
        <h4>{{ kendoTitle }}</h4>
        <div class="example" [ngStyle]="{ 'background-color': selected }">
            <div class="kendoka"></div>
        </div>
    `,
})
export class AppComponent {
  public selected = '#fe413b';

  public get kendoTitle(): string {
    const flavor = this.kendoColors[this.selected];
    return flavor ? flavor : 'Colorful Kendoka';
  }

  public kendoColors: { [Key: string]: string } = {
    '#fe413b': 'Kendo UI for Angular',
    '#4eaec5': 'KendoReact',
    '#ff5500': 'Kendo UI for jQuery',
    '#42b683': 'Kendo UI for Vue',
  };

  public onChange(color: string): void {
    this.selected = color;
  }
}
