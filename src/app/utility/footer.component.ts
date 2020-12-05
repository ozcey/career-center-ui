import { Component } from '@angular/core';


@Component({
    selector: 'app-footer',
    template: `
        <footer class="footer mt-auto py-3">
            <div class="container">
                <span class="text-muted">Smart Health Inc.</span>
            </div>
        </footer>
    `,
    styles: [`
        .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #f1f1f1;
            color: white;
            text-align: center;
}
    `]
})
export class FooterComponent { }
