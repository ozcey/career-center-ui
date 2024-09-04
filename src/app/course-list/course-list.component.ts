import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const course_list = [
  {
    "name": "AWS Cloud Practitioner",
    "description": "Learn the basics of AWS Cloud.",
    "category": ["Cloud"],
    "certifications": ["AWS Certified Cloud Practitioner"],
    "partners": ["Amazon"],
    "venues": ["Remote"],
    "start_date": "2024-09-01"
  },
  {
    "name": "CISCO IT Essentials",
    "description": "Introduction to IT and networking.",
    "category": ["Systems Support"],
    "certifications": ["CISCO IT Essentials"],
    "partners": ["Cisco"],
    "venues": ["In-Person"],
    "start_date": "2024-09-15"
  },
  {
    "name": "CompTIA CySA+",
    "description": "Cybersecurity Analyst certification.",
    "category": ["Cybersecurity"],
    "certifications": ["CompTIA CySA+"],
    "partners": ["CompTIA"],
    "venues": ["Hybrid"],
    "start_date": "2024-10-01"
  },
  {
    "name": "Google IT Support",
    "description": "Professional Certificate in IT Support.",
    "category": ["Systems Support"],
    "certifications": ["Google IT Support Professional Certificate"],
    "partners": ["Google"],
    "venues": ["Remote"],
    "start_date": "2024-10-15"
  },
  {
    "name": "CISCO Network Essentials",
    "description": "Basics of networking.",
    "category": ["Systems Support"],
    "certifications": ["CISCO Network Essentials"],
    "partners": ["Cisco"],
    "venues": ["In-Person"],
    "start_date": "2024-11-01"
  },
  {
    "name": "Advanced AWS Solutions",
    "description": "Advanced concepts in AWS.",
    "category": ["Cloud"],
    "certifications": ["AWS Certified Cloud Practitioner"],
    "partners": ["Amazon"],
    "venues": ["Hybrid"],
    "start_date": "2024-11-15"
  },
  {
    "name": "Cybersecurity Fundamentals",
    "description": "Introduction to cybersecurity.",
    "category": ["Cybersecurity"],
    "certifications": ["CompTIA CySA+"],
    "partners": ["CompTIA"],
    "venues": ["Remote"],
    "start_date": "2024-12-01"
  },
  {
    "name": "Software Engineering Basics",
    "description": "Introduction to software engineering.",
    "category": ["Software Engineering"],
    "certifications": [],
    "partners": ["Microsoft"],
    "venues": ["In-Person"],
    "start_date": "2024-12-15"
  },
  {
    "name": "Cloud Security",
    "description": "Security in cloud environments.",
    "category": ["Cloud", "Cybersecurity"],
    "certifications": ["AWS Certified Cloud Practitioner"],
    "partners": ["Amazon"],
    "venues": ["Remote"],
    "start_date": "2025-01-01"
  },
  {
    "name": "IT Support Essentials",
    "description": "Basics of IT support.",
    "category": ["Systems Support"],
    "certifications": ["Google IT Support Professional Certificate"],
    "partners": ["Google"],
    "venues": ["Hybrid"],
    "start_date": "2025-01-15"
  },
  {
    "name": "Network Security",
    "description": "Fundamentals of network security.",
    "category": ["Cybersecurity"],
    "certifications": ["CISCO Network Essentials"],
    "partners": ["Cisco"],
    "venues": ["In-Person"],
    "start_date": "2025-02-01"
  },
  {
    "name": "Advanced Cybersecurity",
    "description": "Advanced concepts in cybersecurity.",
    "category": ["Cybersecurity"],
    "certifications": ["CompTIA CySA+"],
    "partners": ["CompTIA"],
    "venues": ["Remote"],
    "start_date": "2025-02-15"
  },
  {
    "name": "Software Development Lifecycle",
    "description": "Understanding the software development lifecycle.",
    "category": ["Software Engineering"],
    "certifications": [],
    "partners": ["Microsoft"],
    "venues": ["Hybrid"],
    "start_date": "2025-03-01"
  },
  {
    "name": "Cloud Architecture",
    "description": "Designing cloud architectures.",
    "category": ["Cloud"],
    "certifications": ["AWS Certified Cloud Practitioner"],
    "partners": ["Amazon"],
    "venues": ["Remote"],
    "start_date": "2025-03-15"
  },
  {
    "name": "IT Infrastructure",
    "description": "Basics of IT infrastructure.",
    "category": ["Systems Support"],
    "certifications": ["CISCO IT Essentials"],
    "partners": ["Cisco"],
    "venues": ["In-Person"],
    "start_date": "2025-04-01"
  },
  {
    "name": "Cybersecurity Threats",
    "description": "Understanding cybersecurity threats.",
    "category": ["Cybersecurity"],
    "certifications": ["CompTIA CySA+"],
    "partners": ["CompTIA"],
    "venues": ["Hybrid"],
    "start_date": "2025-04-15"
  },
  {
    "name": "Software Testing",
    "description": "Introduction to software testing.",
    "category": ["Software Engineering"],
    "certifications": [],
    "partners": ["Microsoft"],
    "venues": ["Remote"],
    "start_date": "2025-05-01"
  },
  {
    "name": "Cloud Migration",
    "description": "Migrating to the cloud.",
    "category": ["Cloud"],
    "certifications": ["AWS Certified Cloud Practitioner"],
    "partners": ["Amazon"],
    "venues": ["In-Person"],
    "start_date": "2025-05-15"
  },
  {
    "name": "IT Project Management",
    "description": "Managing IT projects.",
    "category": ["Systems Support"],
    "certifications": ["Google IT Support Professional Certificate"],
    "partners": ["Google"],
    "venues": ["Hybrid"],
    "start_date": "2025-06-01"
  },
  {
    "name": "Advanced Networking",
    "description": "Advanced networking concepts.",
    "category": ["Systems Support"],
    "certifications": ["CISCO Network Essentials"],
    "partners": ["Cisco"],
    "venues": ["Remote"],
    "start_date": "2025-06-15"
  }
];



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses = [];
  selectedVenues = [];
  selectedCategories = [];
  selectedCertifications = [];

  venues = ['In-Person', 'Remote', 'Hybrid'];
  categories = ['Cloud', 'Cybersecurity', 'Software Engineering', 'Systems Support'];
  certifications = [
    'AWS Certified Cloud Practitioner',
    'CISCO IT Essentials',
    'CISCO Network Essentials',
    'CompTIA CySA+',
    'Google IT Support Professional Certificate'
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.courses = course_list;
  }

  onCheckboxChange(event: any, type: string) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (type === 'venue') {
      this.updateSelectedArray(this.selectedVenues, value, checked);
    } else if (type === 'category') {
      this.updateSelectedArray(this.selectedCategories, value, checked);
    } else if (type === 'certification') {
      this.updateSelectedArray(this.selectedCertifications, value, checked);
    }
  }

  updateSelectedArray(array: string[], value: string, checked: boolean) {
    if (checked) {
      array.push(value);
    } else {
      const index = array.indexOf(value);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
  }

  filteredCourses() {
    return this.courses.filter(course => {
      return (this.selectedVenues.length === 0 || this.selectedVenues.some(venue => course.venues.includes(venue))) &&
             (this.selectedCategories.length === 0 || this.selectedCategories.some(category => course.category.includes(category))) &&
             (this.selectedCertifications.length === 0 || this.selectedCertifications.some(certification => course.certifications.includes(certification)));
    });
  }

  apply(){
    this.router.navigate(['/applicant/new']);
  }

}
