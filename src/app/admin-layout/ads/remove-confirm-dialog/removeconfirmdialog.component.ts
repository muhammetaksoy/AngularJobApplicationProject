import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Ads } from '../models/ads.model';
import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-removeconfirmdialog',
  templateUrl: './removeconfirmdialog.component.html',
  styleUrls: ['./removeconfirmdialog.component.scss']
})
export class RemoveconfirmdialogComponent{

  constructor(
      private adService:AdService,
      public dialogRef: MatDialogRef<RemoveconfirmdialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Ads,
      private alertService:AlertService
  ){

  }

  removeAd():void{
    this.adService.removeAd(this.data.ilanId).subscribe(res=>{
      this.alertService.deleteMessage();
      this.dialogRef.close();
      this.adService.getIlans();
    });
   
  }

}
