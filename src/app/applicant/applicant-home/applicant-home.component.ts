import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-applicant-home',
  templateUrl: './applicant-home.component.html',
  styleUrls: ['./applicant-home.component.css']
})
export class ApplicantHomeComponent implements OnInit, OnDestroy {
  offerings = [
    {
      name: 'Employer Networking & Training Access',
      description: 'Career Center partners with leading U.S. companies to offer professional networking, interview preparation, and skill building opportunities.Through these partnerships and resources, Job Seekers build their networks and advance their skills to be more competitive in the U.S. job search.'
    },
    {
      name: '1:1 Career Coaching',
      description: 'Using proven job search and career planning resources, coaches work with job seekers one-on-one to offer individualized guidance that will help you be competitive in a U.S. job search.'
    },
    {
      name: 'Industry-Specific Career Services',
      description: 'We offer specialized opportunities for networking, skill-building, and peer-to-peer learning for job seekers with professional experience and interest in high-demand industries'
    },
    {
      name: 'U.S. Job Readiness Training',
      description: 'Before you are matched with a career coach, we offer a 4.5-hour online course to give you a solid understanding of the U.S. job search process and the expectations of U.S. recruiters.'
    }
  ]
  subscription = new Subscription();
  isAuth: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription.add(this.authService.authChange.subscribe(auth => {
      this.isAuth = auth;
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
