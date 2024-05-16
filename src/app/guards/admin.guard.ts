import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('tipo')=='1'){
    return true;
  }else{
    return false;
  }
};
