import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../components/atoms/Input/Input';

const meta = {
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    label: 'telefono',
    placeholder: '606...',
  },
};

export const NoPlaceHolder: Story = {
  args: {
    type: 'text',
    label: 'telefono',
  },
}