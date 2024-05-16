import { CanActivateFn } from '@angular/router';

export const meseroGuard: CanActivateFn = (route, state) => {
 
  if(localStorage.getItem('tipo')=='2'){
    return true;
  }else{
    return false;
  }
};
