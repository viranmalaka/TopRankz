import {AuthService} from "./auth.service";
import { inject } from '@angular/core/testing'

/**
 * Created by malaka on 4/6/17.
 */
describe('test postLogin service', () => {
  let service : AuthService;

  it('should return success true',
    inject([AuthService], (Http) => {
      service.postLogin({username : 'viranmalaka', 'password' : 'test123'})
        .subscribe(res => {
          expect(res.success).toBe(true);
        })
    }));
});
