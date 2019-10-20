export interface ColorVariable {
  property?: string;
  name?: string;
  value?: string;
  valueRgb?: string;
  contrast?: string;
  contrastRgb?: string;
  tint?: string;
  shade?: string;
}

export const COLOR_VARS: ColorVariable[] = [
  {
    name: 'Primary',
    property: '@primary'
  },
  {
    name: 'Secondary',
    property: '@secondary'
  },
  {
    name: 'Tertiary',
    property: '@tertiary'
  },
  {
    name: 'Success',
    property: '@success'
  },
  {
    name: 'Warning',
    property: '@warning'
  },
  {
    name: 'Danger',
    property: '@danger'
  },
  {
    name: 'Dark',
    property: '@dark'
  },
  {
    name: 'Medium',
    property: '@medium'
  },
  {
    name: 'Light',
    property: '@light'
  }
];
