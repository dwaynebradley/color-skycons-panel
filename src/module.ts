import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { ColorSkyconsPanel } from './ColorSkyconsPanel';

export const plugin = new PanelPlugin<SimpleOptions>(ColorSkyconsPanel).setPanelOptions(builder => {
  return builder
    .addBooleanSwitch({
      path: 'monochrome',
      name: 'Monochrome?',
      defaultValue: false,
    })
    .addColorPicker({
      path: 'color',
      name: 'Monochrome color',
      defaultValue: '',
      settings: {
        allowUndefined: true,
      },
      showIf: config => config.monochrome,
    });
});
