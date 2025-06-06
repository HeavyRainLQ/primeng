import { Code } from '@/domain/code';
import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'images-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Sample image gallery implementation using paginator.</p>
        </app-docsectiontext>
        <div class="card flex flex-col gap-4 justify-center items-center">
            <p-paginator [first]="first" [rows]="1" [totalRecords]="120" (onPageChange)="onPageChange($event)" [showJumpToPageDropdown]="true" [showPageLinks]="false"></p-paginator>
            <img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature{{ (first + 1) % 10 }}.jpg" class="max-w-full" />
        </div>
        <app-code [code]="code" selector="paginator-images-demo"></app-code>
    `
})
export class ImagesDoc {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }

    code: Code = {
        basic: `<p-paginator [first]="first" [rows]="1" [totalRecords]="120" (onPageChange)="onPageChange($event)" [showJumpToPageDropdown]="true" [showPageLinks]="false"></p-paginator>
<img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature{{ (first + 1) % 10 }}.jpg" class="max-w-full" />`,

        html: `
<div class="card flex flex-col gap-4 justify-center items-center">
    <p-paginator [first]="first" [rows]="1" [totalRecords]="120" (onPageChange)="onPageChange($event)" [showJumpToPageDropdown]="true" [showPageLinks]="false"></p-paginator>
    <img src="https://primefaces.org/cdn/primeng/images/demo/nature/nature{{ (first + 1) % 10 }}.jpg" class="max-w-full" />
</div>`,

        typescript: `
import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'paginator-images-demo',
    templateUrl: './paginator-images-demo.html'
})
export class PaginatorImagesDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }
}`
    };
}
