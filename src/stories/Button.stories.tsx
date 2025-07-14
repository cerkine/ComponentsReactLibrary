import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../components/atoms/Button/Button';

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

export const Verde: Story = {
  args: {
    label: "label",
    textColor: "#ffffff",
    backgroundColor: "#4CAF50",
    hoverColor: "#45a049",
    borderColor: "#4CAF50"
  }
};

