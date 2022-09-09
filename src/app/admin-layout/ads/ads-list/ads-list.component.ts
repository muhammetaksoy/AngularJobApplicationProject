import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CreateOrUpdateFormComponent } from '../create-update-ads-form/create-update-ads-form.component';
import { Ads } from '../models/ads.model';
import { RemoveconfirmdialogComponent } from '../remove-confirm-dialog/removeconfirmdialog.component';
import { AdService } from '../services/ad.service';
@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {  
  ads:Ads[]=[];
  constructor(public dialog: MatDialog,private adService:AdService) { }

  ngOnInit(): void {
    this.getAds();
  }

  getAds():void{
    this.adService.getIlans().subscribe(response=>{
      if(response && response.length>0){
        this.ads=response;  
      }
    })
  }

  

  openDialogForRemove(event:any,enterAnimationDuration: string, exitAnimationDuration: string,willRemoveItem:Ads): void {
    let dialogRef = this.dialog.open(RemoveconfirmdialogComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:willRemoveItem
    });
  }



  openDialogForCreateAndUpdate(event:any,enterAnimationDuration: string, exitAnimationDuration: string,item?:Ads): void {
    const dialogRef = this.dialog.open(CreateOrUpdateFormComponent, {
      width: '25%',
      height:'100%',
      position: { right: '0'},
      enterAnimationDuration,
      exitAnimationDuration,
      data:item
    });
  }



}
