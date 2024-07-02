import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/utility/snackbar.service';
import { UserModalComponent } from '../user-modal.component';
import { User } from '../user.model';
import { UserService } from '../user.service';

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
    private userService: UserService,
    private dialog: MatDialog,
    private snackbar: SnackbarService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription.add(this.userService.usersChanged.subscribe((data) => {
      this.dataSource.data = data;
    }));
    this.userService.findAllUsers();
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
        this.subscription.add(this.userService.deleteUser(id).subscribe(data => {
          const users = this.dataSource.data.filter(user => user.id !== id);
          this.dataSource.data = users;
          this.snackbar.showSnackbar('User deleted successfully!', 'Close', 5000, 'bottom');
        }, error => {
          console.log(error);
          this.snackbar.errorMessage();
        }));
      } else {
        return;
      }
    });
  }

  OnCreateUser() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(id: number) {
    this.userService.findUserById(id);
    this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
