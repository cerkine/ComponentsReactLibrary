import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavLink } from './NavLink';

const meta = {
  component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "to",
    label: "label"
  }
};