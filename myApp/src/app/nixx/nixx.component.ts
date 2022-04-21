import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; 
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface NameGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
}

@Component({
  selector: 'app-nixx',
  templateUrl: './nixx.component.html',
  styleUrls: ['./nixx.component.css']
})
export class NixxComponent implements OnInit {

  // formControl = new FormControl();
  // autoFilter!: Observable<string[]>;
  // Items: string[] = ['BoJack Horseman', 'Stranger Things', 'Ozark', 'Big Mouth'];
  myForm : FormGroup = this.formBuilder.group({
    namesGroup: '',
  })
  
  nameGroups: NameGroup[] = [{
    letter: 'A',
    names: ['Amelia', 'Alfie', 'Ava', 'Archie']
  }, 
  {
    letter: 'B',
    names: ['Brooke', 'Bethany', 'Beatrice']
  },
  {
    letter: 'C',
    names: ['Christopher', 'Caleb', 'Cameron', 'Charles']
  }, {
    letter: 'D',
    names: ['Daniel', 'Daisy']
  }, {
    letter: 'F',
    names: ['Freya', 'Florence', 'Francesca']
  }, {
    letter: 'G',
    names: ['Greyson', 'George']
  }, {
    letter: 'H',
    names: ['Harry', 'Harrison', 'Hannah']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }];

  dataGroupOptions!: Observable<NameGroup[]>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.autoFilter = this.formControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this.mat_filter(value))
    // );
    this.dataGroupOptions = this.myForm.get('namesGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    )
  }

  // private mat_filter(value:string):string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.Items.filter(Option => Option.toLowerCase().indexOf(filterValue) === 0);
  // }

  // private mat_filter(value: string): string[] {
  //   const filterVal = this.mat_normalizeValue(value);
  //   return this.Items.filter(street => this.mat_normalizeValue(street).includes(filterVal));
  // }
  // private mat_normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }  

  private _filterGroup(value: string): NameGroup[] {
    if(value) {
      return this.nameGroups
      // .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
      .map(group => ({letter: '', names: _filter(group.names, value)}))
      .filter(group => group.names.length > 0);
    }

    return [];
  }

}
