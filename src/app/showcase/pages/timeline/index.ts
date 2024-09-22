import { Component } from '@angular/core';
import { TemplateDoc } from '@doc/timeline/templatedoc';
import { AlignmentDoc } from '@doc/timeline/alignmentdoc';
import { BasicDoc } from '@doc/timeline/basicdoc';
import { ImportDoc } from '@doc/timeline/importdoc';
import { OppositeDoc } from '@doc/timeline/oppositedoc';
import { HorizontalDoc } from '@doc/timeline/horizontaldoc';
import { AccessibilityDoc } from '@doc/timeline/accessibilitydoc';
import { TimelineDocModule } from '@doc/timeline/timelinedoc.module';

@Component({
    template: `<app-doc
        docTitle="Angular Timeline Component"
        header="Timeline"
        description="Timeline visualizes a series of chained events."
        [docs]="docs"
        [apiDocs]="['Timeline']"
        themeDocs="timeline"
    ></app-doc>`,
    standalone: true,
    imports: [TimelineDocModule],
    styleUrl: './timelinedemo.scss',
})
export class TimelineDemo {
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
            id: 'alignment',
            label: 'Alignment',
            component: AlignmentDoc,
        },
        {
            id: 'opposite',
            label: 'Opposite',
            component: OppositeDoc,
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc,
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc,
        },

        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc,
        },
    ];
}
