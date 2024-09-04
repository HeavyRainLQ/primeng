import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'override-doc',
    template: `
        <app-docsectiontext>
            <p>
                In styled mode, Tailwind utilities may not be able to override the default styling due to css specificity, there are two
                possible solutions.
            </p>
            <h3>Important</h3>
            <p>Use the <i>!</i> as a prefix to enforce the styling.</p>
            <app-code [code]="code1" selector="code1" [hideToggleCode]="true" [hideCodeSandbox]="true" [hideStackBlitz]="true"></app-code>

            <h3>CSS Layer</h3>
            <p>
                Enable PrimeVue CSS layer and configure the tailwind styles to have higher specificity with layering. This way,
                <i>!</i> prefix is not required.
            </p>
            <app-code [code]="code2" selector="code2" [hideToggleCode]="true" [hideCodeSandbox]="true" [hideStackBlitz]="true"></app-code>
            <app-code [code]="code3" selector="code3" [hideToggleCode]="true" [hideCodeSandbox]="true" [hideStackBlitz]="true"></app-code>
        </app-docsectiontext>
    `,
})
export class OverrideDoc {
    code1: Code = {
        basic: `<input type="text" pInputText placeholder="Overriden" class="!p-8" />`,
    };

    code2: Code = {
        basic: `import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
theme: {
preset: Aura,
options: {
    cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
    }
}
}
});`,
    };
    code3: Code = {
        basic: `@layer tailwind-base, primevue, tailwind-utilities;

@layer tailwind-base {
@tailwind base;
}

@layer tailwind-utilities {
@tailwind components;
@tailwind utilities;
}`,
    };
}
