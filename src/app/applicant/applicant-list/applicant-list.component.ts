import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModalComponent } from 'src/app/user/user-modal.component';
import { SnackbarService } from 'src/app/utility/snackbar.service';
import { Applicant } from '../applicant.model';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  displayedColumns = ['index', 'name', 'email', 'phone', 'age', 'edit'];
  dataSource = new MatTableDataSource<Applicant>();
  selection = new SelectionModel<Applicant>(true, []);

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private applicantService: ApplicantService,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription.add(this.applicantService.applicantsChanged.subscribe((data) => {
      this.dataSource.data = data;
    }));
    this.applicantService.findAllApplicants();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(UserModalComponent, {
      height: '200px',
      width: '300px',
      data: this.dataSource.data.find(user => {
        const currentUser = user.id === id;
        return currentUser;
      })
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subscription.add(this.applicantService.deleteApplicant(id).subscribe(data => {
          const users = this.dataSource.data.filter(user => user.id !== id);
          this.dataSource.data = users;
          this.snackbar.showSnackbar('User deleted successfully!', null, 5000, 'bottom');
        }, error => {
          console.log(error);
          this.snackbar.errorMessage();
        }));
      } else {
        return;
      }
    });
  }

  OnGoBack() {
    this.router.navigate(['applicant']);
  }

  onEdit(id: number) {
    this.applicantService.findApplicantById(id);
    this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
