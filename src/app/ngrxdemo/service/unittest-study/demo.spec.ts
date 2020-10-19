import { MasterService, ValueService } from './master.service';
import { TestBed } from '@angular/core/testing';


function setup() {
    const valueServiceSpy =
      jasmine.createSpyObj('ValueService', ['getValue']);
    const stubValue = 'stub value';
    const masterService = new MasterService(valueServiceSpy);
    valueServiceSpy.getValue.and.returnValue(stubValue);
    return { masterService, stubValue, valueServiceSpy };
  }


describe('MasterService without Angular testing support', () => {
    let masterService: MasterService;
    it('#getValue should return real value from the real service', () => {
      masterService = new MasterService(new ValueService());
      expect(masterService.getValue()).toBe('Jerry');
    }); // end of it function

    it('#getValue should return faked value from a fake object', () => {
        const fake =  { getValue: () => 'fake value' };
        masterService = new MasterService(fake as ValueService);
        expect(masterService.getValue()).toBe('fake value');
      });
});

describe('Jerry for Spartacus unit test', () => {

  it('#getValue unit test here!', () => {
    const valueService = new ValueService();
    expect(valueService.getValue()).toEqual('Jerry');
  });
});
/*
describe('MasterService with Angular testing support', () => {
    let masterService: MasterService;
    it('#getValue should return stubbed value from a spy', () => {
        // create `getValue` spy on an object representing the ValueService
        const valueServiceSpy =
          jasmine.createSpyObj('ValueService', ['getValue']);
        // set the value to return when the `getValue` spy is called.
        const stubValue = 'stub value';
        valueServiceSpy.getValue.and.returnValue(stubValue);
        masterService = new MasterService(valueServiceSpy);
        expect(masterService.getValue())
          .toBe(stubValue, 'service returned stub value');
        expect(valueServiceSpy.getValue.calls.count())
          .toBe(1, 'spy method was called once');
        expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
          .toBe(stubValue);
      });
});

describe('MasterService with Angular TestBed', () => {
    let service: ValueService;
    let masterService: MasterService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [ValueService] });
    });

    it('should use ValueService', () => {
        service = TestBed.inject(ValueService);
        masterService = new MasterService(service);
        expect(masterService.getValue()).toBe('Jerry');
      });
});

describe('MasterService with Angular jasmine.createSpyObj', () => {
    let masterService: MasterService;
    let valueServiceSpy: jasmine.SpyObj<ValueService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('ValueService', ['getValue']);

        TestBed.configureTestingModule({
    // Provide both the service-to-test and its (spy) dependency
        providers: [ MasterService, { provide: ValueService, useValue: spy }]
    });

    // Inject both the service-to-test and its (spy) dependency
        masterService = TestBed.inject(MasterService);
        valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
    });

    it('#getValue should return stubbed value from a spy', () => {
        const stubValue = 'stub value';
        valueServiceSpy.getValue.and.returnValue(stubValue);
        expect(masterService.getValue())
          .toBe(stubValue, 'service returned stub value');
        expect(valueServiceSpy.getValue.calls.count())
          .toBe(1, 'spy method was called once');
        expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
          .toBe(stubValue);
      });
});


describe('MasterService using setup Instead of beforeEach', () => {
    it('#getValue should return stubbed value from a spy', () => {
        const { masterService, stubValue, valueServiceSpy } = setup();
        expect(masterService.getValue())
          .toBe(stubValue, 'service returned stub value');
        expect(valueServiceSpy.getValue.calls.count())
          .toBe(1, 'spy method was called once');
        expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
          .toBe(stubValue);
      });
});
*/
