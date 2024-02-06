import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="footer mt-auto py-3">
            <div class="container">
                <span class="text-muted">Career Center {{currentYear}}</span>
            </div>
        </footer>
    `,
    styles: [`
        .footer {
            position: fixed;
            bottom: 0;
            height: 50px;
            width: 100%;
            background-color: #f1f1f1;
            color: white;
            text-align: center;
            margin-top: 20px;
}
    `]
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
 }
