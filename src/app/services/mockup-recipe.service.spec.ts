import { TestBed, inject } from '@angular/core/testing';

import { MockupRecipeService } from './mockup-recipe.service';

describe('MockupRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockupRecipeService]
    });
  });

  it('should be created', inject([MockupRecipeService], (service: MockupRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
