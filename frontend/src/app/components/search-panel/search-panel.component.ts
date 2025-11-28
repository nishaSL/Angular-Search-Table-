import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  @Output() search = new EventEmitter<{ [key: string]: any }>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      position: ['']
    });
  }

  onSearch() {
    this.search.emit(this.form.value);
  }

  onReset() {
    this.form.reset();
    this.search.emit({});
  }
}
