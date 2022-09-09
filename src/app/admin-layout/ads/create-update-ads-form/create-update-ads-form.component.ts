import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Ads } from '../models/ads.model';
import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-create-update-ads-form',
  templateUrl: './create-update-ads-form.component.html',
  styleUrls: ['./create-update-ads-form.component.scss']
})
export class CreateOrUpdateFormComponent{
  addAdForm:FormGroup;
  isEdit:boolean;
  constructor(
    private fb:FormBuilder,
    private adService:AdService,
    private alertService:AlertService,
    public dialogRef: MatDialogRef<CreateOrUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ads,
    
    ) 
    { 
    this.addAdForm = this.fb.group({
      ilanId:[''],
      baslik: ['', Validators.required],
      aciklama: ['', Validators.required],
      bitisTarihi: ['', Validators.required],   
      sehir:[''],
      askerlikDurumu:[''],
      egitimSeviyesi:[''],
      nitelik1:[''],
      nitelik2:[''],
      nitelik3:[''],
      nitelik4:[''],
      nitelik5:[''],
      nitelik6:[''],
      nitelik7:[''],
      nitelik8:[''],
      nitelik9:[''],
      nitelik10:[''],
      departmanId:['',Validators.required]
    });  

    if(data){
      this.isEdit=true;
      this.addAdForm.patchValue(this.data);
    }
  }

  addOrUpdateAd():void{
    if(this.isEdit){
      this.adService.updateAd(this.addAdForm.value,this.data.ilanId).subscribe(res=>{
        this.alertService.successMessage();
        this.adService.getIlans();
        this.dialogRef.close();
      })
    }else{      
      const model:any={
        baslik:this.addAdForm.value.baslik,
        aciklama:this.addAdForm.value.aciklama,
        bitisTarihi:this.addAdForm.value.bitisTarihi,
        departmanId:this.addAdForm.value.departmanId
      }
      this.adService.createAd(model).subscribe(res=>{
        this.alertService.successMessage();
        this.adService.getIlans();
      })
    }

  }

}
