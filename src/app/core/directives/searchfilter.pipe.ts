import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
  standalone: true
})

export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: string, fields: any[] = []): any[] {
    if (!value || !searchTerm) {
      return value;
    }
    // return value.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return value.filter(item => {
      return fields.some(field => {
        console.log(field);

        const fieldValue = item[field];
        return fieldValue && String(fieldValue).toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }

}


