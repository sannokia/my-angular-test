import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

// import 'rxjs/Rx';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id: number;
  constructor() { }

  ngOnInit() {
    // this.route.params
    //   .subscribe(
    //     (params:Params) =>{
    //       this.id = +params['id'];
    //     }
    //   );

    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: Number) => {
    //     console.log(number);
    //   }
    // );
  const myObservable = Observable.create((observer: Observer<string>) => {
  setTimeout(() => {
    observer.next('first package');
  },2000);

  setTimeout(() => {
    observer.next('second package');
  },5000);
  
  setTimeout(() => {
    observer.error('error');
  },7000);
  

  });
  
  myObservable.subscribe(
    (data : string) => {console.log(data)}
    (data : string) => {console.log(data)}
    (data : string) => {console.log(data)}

  )
  

  }

}
