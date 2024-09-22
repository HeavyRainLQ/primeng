import { Component } from '@angular/core';
import { ImportDoc } from '@doc/iconfield/importdoc';
import { BasicDoc } from '@doc/iconfield/basicdoc';
import { TemplateDoc } from '@doc/iconfield/templatedoc';
import { AccessibilityDoc } from '@doc/iconfield/accessibilitydoc';
import { IconFieldDocModule } from '@doc/iconfield/iconfielddoc.module';

@Component({
    template: ` <app-doc
        docTitle="Angular IconField Component"
        header="IconField"
        description="IconField wraps an input and an icon."
        [docs]="docs"
        [apiDocs]="['IconField', 'InputIcon']"
        themeDocs="iconfield"
    ></app-doc>`,
    standalone: true,
    imports: [IconFieldDocModule],
})
export class IconFieldDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc,
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc,
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc,
        },

        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc,
        },
    ];
}
