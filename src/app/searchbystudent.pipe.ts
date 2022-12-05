import { Pipe, PipeTransform } from '@angular/core';
import { SubmittedComponent } from './submitted/submitted.component';
import { subprojs } from './submitted/submitted.component';

@Pipe({
  name: 'searchbystudent'
})
export class SearchbystudentPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[]{
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
