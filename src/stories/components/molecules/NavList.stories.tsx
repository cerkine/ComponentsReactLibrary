import type { Meta, StoryObj } from '@storybook/react-vite';

import NavList from './NavList';

const meta = {
  component: NavList,
} satisfies Meta<typeof NavList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { to: '/home', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' }
    ]
  }
};