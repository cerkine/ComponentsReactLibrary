import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "label",
    textColor: "#000000",
    backgroundColor: "#000000",
    hoverColor: "#000000",
    borderColor: "#000000"
  }
};