import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/utility/snackbar.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
 subscription: Subscription = new Subscription();
  displayedColumns = ['index', 'name', 'email', 'username', 'edit'];
  dataSource = new MatTableDataSource<User>();
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    // private userService: UserService,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.subscription.add(this.userService.usersChanged.subscribe((data) => {
    //   this.dataSource.data = data;
    // }));
    // this.userService.fetchUser();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id: number) {
    // const dialogRef = this.dialog.open(UserModalComponent, {
    //   height: '200px',
    //   width: '300px',
    //   data: this.dataSource.data.find(user => {
    //     const currentUser = user.id === id;
    //     return currentUser;
    //   })
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.subscription.add(this.userService.deleteUser(id).subscribe(data => {
    //       const users = this.dataSource.data.filter(user => user.id !== id);
    //       this.dataSource.data = users;
    //       this.snackbar.showSnackbar('User deleted successfully!', null, 5000, 'bottom');
    //     }, error => {
    //       console.log(error);
    //       this.snackbar.errorMessage();
    //     }));
    //   } else {
    //     return;
    //   }
    // });
  }

  OnCreateUser() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(id: number) {
    // this.userService.getUserById(id);
    // this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: User): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.email}`;
  // }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }




}
