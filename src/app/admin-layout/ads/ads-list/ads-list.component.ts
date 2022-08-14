import { Component, OnInit } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { CreateAddFormComponent } from '../create-ads-form/create-ads-form.component';
import { RemoveconfirmdialogComponent } from '../remove-confirm-dialog/removeconfirmdialog.component';
@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogForCreate(event:any,enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(CreateAddFormComponent, {
      width: '25%',
      height:'100%',
      position: { right: '0'},
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogForUpdate(event:any,enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(CreateAddFormComponent, {
      width: '25%',
      height:'100%',
      position: { right: '0'},
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogForRemove(event:any,enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(RemoveconfirmdialogComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
