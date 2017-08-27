import {ToastOptions} from 'ng2-toastr'

export class CustomOption extends ToastOptions {
  animate = 'fade';
  positionClass="toast-top-left";// you can override any options available
  newestOnTop = false;
  
}