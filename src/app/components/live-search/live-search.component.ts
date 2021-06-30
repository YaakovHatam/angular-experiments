import { Component, OnInit } from '@angular/core';
import { QuoteModel } from 'src/app/models/quote.model';

@Component({
   selector: 'app-live-search',
   templateUrl: './live-search.component.html',
   styleUrls: ['./live-search.component.less']
})
export class LiveSearchComponent implements OnInit {
   filterText: string = '';
   data: QuoteModel[] = [
      {
         "id": 1,
         "quote": "There are only two great tragedies in life: one is not getting what you want and the other is getting it.",
         "by": "Oscar Wilde",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 2,
         "quote": "Books say: She did this because. Life says: She did this. Books are where things are explained to you, life is where things aren’t. I’m not surprised some people prefer books.",
         "by": "Julian Barnes",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 3,
         "quote": "Together we can change the world, just one random act of kindness at a time.",
         "by": "Ron Hall",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 4,
         "quote": "Maybe life is random, but I doubt it.",
         "by": "Steven Tyler",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 5,
         "quote": "My life was a sort of series of random disasters.",
         "by": "Claire Tomalin",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 6,
         "quote": "I know not age, nor weariness nor defeat.",
         "by": "Rose Kennedy",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 7,
         "quote": "The absence of alternatives clears the mind marvelously.",
         "by": "Henry Kissinger",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 8,
         "quote": "There is no substitute for hard work. Never give up. Never stop believing. Never stop fighting.",
         "by": "Hope Hicks",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 9,
         "quote": "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
         "by": "A. P. J. Abdul Kalam",
         "rating": 0.0,
         "ratersCount": 0,
      },
      {
         "id": 10,
         "quote": "Do not wait, the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
         "by": "George Herbert",
         "rating": 0.0,
         "ratersCount": 0,
      }
   ];
   constructor() { }

   ngOnInit(): void {
   }

}
