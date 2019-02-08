import { TestBed } from '@angular/core/testing';

import { LoginResolverService } from './login-resolver.service';

describe('LoginResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginResolverService = TestBed.get(LoginResolverService);
    expect(service).toBeTruthy();
  });
});
