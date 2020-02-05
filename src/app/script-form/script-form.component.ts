import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-script-form',
  templateUrl: './script-form.component.html',
  styleUrls: ['./script-form.component.scss']
})
export class ScriptFormComponent implements OnInit {
  scriptForm: FormGroup;
  private loading = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.scriptForm = this.formBuilder.group({
      text: ['', Validators.required],
      searcher: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loading = true;
    if(this.scriptForm.get('searcher').value=='Google')
      window.location.href = 'https://www.google.com/search?q=' + this.scriptForm.get('text').value;
    if(this.scriptForm.get('searcher').value=='Ask')
      window.location.href = 'https://uk.ask.com/web?q=' + this.scriptForm.get('text').value;
    if(this.scriptForm.get('searcher').value=='Bing')
      window.location.href = 'https://www.bing.com/search?q=' + this.scriptForm.get('text').value;
    this.loading = false;
  }
}
