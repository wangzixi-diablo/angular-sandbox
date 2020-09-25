import { Injectable } from '@angular/core';

@Injectable()
export class MasterService {
  constructor(private valueService: ValueService) { }
  getValue() { return this.valueService.getValue(); }
}

export class ValueService {
  getValue() { return 'Jerry'; }
}

