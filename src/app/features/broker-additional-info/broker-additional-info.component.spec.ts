import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerAdditionalInfoComponent } from './broker-additional-info.component';

describe('BrokerAdditionalInfoComponent', () => {
  let component: BrokerAdditionalInfoComponent;
  let fixture: ComponentFixture<BrokerAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerAdditionalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
