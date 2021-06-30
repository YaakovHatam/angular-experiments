import { Pipe, PipeTransform } from '@angular/core';
import { QuoteModel } from '../models/quote.model';

@Pipe({
   name: 'quote'
})
export class QuotePipe implements PipeTransform {

   transform(value: QuoteModel[], ...args: unknown[]): any {
      const searchTerm = (args[0] as string).toLowerCase();
      if (args[0] == '') {
         return value;
      }

      return value.filter(q => q.quote.toLowerCase().indexOf(searchTerm) > -1);
   }

}
