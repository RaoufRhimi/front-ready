import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfrescoWorkComponent } from './alfresco-work.component';

describe('AlfrescoWorkComponent', () => {
  let component: AlfrescoWorkComponent;
  let fixture: ComponentFixture<AlfrescoWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfrescoWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfrescoWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
