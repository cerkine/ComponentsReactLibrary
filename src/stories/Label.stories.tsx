import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../components/atoms/Label/Label';

const meta = {
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "text",
  }
};