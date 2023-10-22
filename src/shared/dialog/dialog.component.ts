import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {title: string, message: string },
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  public closeDialog(result: boolean = true): void {
    this.dialogRef.close(result);
  }
}
