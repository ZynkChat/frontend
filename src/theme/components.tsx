import {
  Button,
  Card,
  Checkbox,
  MultiSelect,
  Radio,
  Select,
  Text,
  Tooltip,
} from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

export const components = {
  Button: Button.extend({
    defaultProps: {
      fw: 500,
    },
  }),
  Card: Card.extend({
    defaultProps: {
      shadow: 'none',
      bd: '1px solid secondary.1',
    },
  }),
  Tooltip: Tooltip.extend({
    defaultProps: {
      color: '#141f2f',
      withArrow: true,
      multiline: true,
      maw: 250,
      styles: {
        tooltip: {
          fontSize: 'var(--mantine-font-size-xs)',
          padding: '12px',
          lineHeight: 1.2,
        },
      },
    },
  }),
  Checkbox: Checkbox.extend({
    defaultProps: {
      size: 'xs',
      styles: {
        label: {
          fontSize: 'var(--mantine-font-size-sm)',
          paddingLeft: '0.5rem',
        },
      },
    },
  }),
  Radio: Radio.extend({
    defaultProps: {
      size: 'xs',
      styles: {
        label: {
          fontSize: 'var(--mantine-font-size-sm)',
          paddingLeft: '0.5rem',
        },
      },
    },
  }),
  Text: Text.extend({
    defaultProps: {
      color: 'var(--mantine-color-secondary-9)',
    },
  }),
  Select: Select.extend({
    defaultProps: {
      rightSection: <IconChevronDown size={16} />,
      rightSectionPointerEvents: 'none',
    },
  }),
  MultiSelect: MultiSelect.extend({
    defaultProps: {
      rightSection: <IconChevronDown size={16} />,
      rightSectionPointerEvents: 'none',
    },
  }),
}
