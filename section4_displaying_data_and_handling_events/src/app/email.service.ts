import { Injectable } from '@angular/core';

@Injectable({ //decorator would only be needed if have dependencies within the constructor
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
