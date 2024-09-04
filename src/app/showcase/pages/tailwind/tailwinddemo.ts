import { Component } from '@angular/core';
import { ImportDoc } from '@doc/tag/importdoc';
import { AnimationsDoc } from '@doc/tailwind/animationsdoc';
import { ColorPaletteDoc } from '@doc/tailwind/colorpalettedoc';
import { ExtensionsDoc } from '@doc/tailwind/extensionsdoc';
import { FormDoc } from '@doc/tailwind/formdoc';
import { HeadlessDoc } from '@doc/tailwind/headlessdoc';
import { OverrideDoc } from '@doc/tailwind/overridedoc';
import { OverviewDoc } from '@doc/tailwind/overviewdoc';
import { PluginDoc } from '@doc/tailwind/plugindoc';
import { PresetsDoc } from '@doc/tailwind/presetsdoc';

@Component({
    templateUrl: './tailwinddemo.html',
})
export class TailwindDemo {
    docs = [
        {
            id: 'overview',
            label: 'Overview',
            component: OverviewDoc,
        },
        {
            id: 'presets',
            label: 'Presets',
            component: PresetsDoc,
        },
        {
            id: 'plugin',
            label: 'Plugin',
            component: PluginDoc,
        },
        {
            id: 'extensions',
            label: 'Extensions',
            component: ExtensionsDoc,
        },
        {
            id: 'override',
            label: 'Override',
            component: OverrideDoc,
        },
        {
            id: 'samples',
            label: 'Samples',
            description: 'Example uses cases with PrimeNG and Tailwind CSS.',
            children: [
                {
                    id: 'color-palette',
                    label: 'Color Palette',
                    component: ColorPaletteDoc,
                },
                {
                    id: 'form',
                    label: 'Form',
                    component: FormDoc,
                },
                {
                    id: 'headless',
                    label: 'Headless',
                    component: HeadlessDoc,
                },
                {
                    id: 'animations',
                    label: 'Animations',
                    component: AnimationsDoc,
                },
               
            ],
        },
    ];
}
