import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-home',
  templateUrl: './volunteer-home.component.html',
  styleUrls: ['./volunteer-home.component.css']
})
export class VolunteerHomeComponent implements OnInit {
  opportunities = [
    {
      name: 'Mentor',
      description: 'The Mentorship Program is a 12-week commitment, meeting weekly or biweekly. We ask mentors and mentees to communicate with each other via email, phone, or video platform weekly or biweekly depending on availability and needs.',
      time_commitment: 'High'
    },
    {
      name: 'Language Coach',
      description: 'Volunteer language coaches work one-on-one with job seekers (in person or virtually) to help them boost their English language skills and confidence.',
      time_commitment: 'High'
    },
    {
      name: 'Informational Interviewer',
      description: 'An informational interviewer conducts informational interviews over the phone, computer, or in person to help job seekers understand the intricacies of pursuing a career within a given industry or company in the U.S.',
      time_commitment: 'Medium'
    },
    {
      name: 'Mock Interviewer',
      description: 'Mock interviewers conduct mock interviews with job seekers, either in on-site events or virtually, one-on-one.',
      time_commitment: 'Low'
    },
    {
      name: 'Networking Coach',
      description: 'A networking coach is someone who loves to network and feels comfortable further championing job seekers in their networking skills.',
      time_commitment: 'Low'
    },
    {
      name: 'Industry Expert',
      description: 'An industry expert is someone we can lean on for up-to-date insights in their field. They are willing to connect job seekers or staff to opportunities in their industry by sharing resources, pathways, and skills needed.',
      time_commitment: 'Low'
    },
    {
      name: 'Portfolio Reviewer',
      description: 'Based on industry and experience, we are looking for volunteers who can review job-seeker portfolios. This can be for any industry that often requires samples of professional work.',
      time_commitment: 'Low'
    },
    {
      name: 'LinkedIn Profile Reviewer',
      description: 'Profile reviewers are those who love LinkedIn and know how to use it to its full potential. They will work one-on-one with a job seeker to create a stellar LinkedIn profile, teach them how to optimize LinkedIn features, or show them how to search for the right job or connection.',
      time_commitment: 'Low'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
