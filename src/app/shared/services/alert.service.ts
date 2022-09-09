import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Message } from '../enums/message.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private _snackBar: MatSnackBar) { }

  openAlert(panelClass:any,message:string){
      this._snackBar.open(message,'',{
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
        panelClass:[panelClass],
        duration: 2000,
      });
  }

  successMessage():void{
    this.openAlert('alert-success',Message.Success);
  }

  errorMessage():void{
    this.openAlert('alert-error',Message.Error);
  }


}
