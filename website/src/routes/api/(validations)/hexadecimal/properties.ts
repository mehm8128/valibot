import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TInput: {
    modifier: 'extends',
    type: 'string',
  },
  message: {
    type: {
      type: 'union',
      options: [
        {
          type: 'custom',
          name: 'ErrorMessage',
          href: '../ErrorMessage/',
        },
        'undefined',
      ],
    },
    default: {
      type: 'string',
      value: 'Invalid hexadecimal',
    },
  },
  validation: {
    type: {
      type: 'custom',
      name: 'HexadecimalValidation',
      href: '../HexadecimalValidation/',
    },
  },
};
