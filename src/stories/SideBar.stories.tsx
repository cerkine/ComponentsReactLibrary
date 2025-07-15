import type { Meta, StoryObj } from '@storybook/react-vite';

import SideBar from '../components/molecules/SideBar/SideBar';

const meta = {
  component: SideBar,
  tags: ['autodocs'],
} satisfies Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { to: '/home', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
    ],
    fill: true,
    gap: 'none',
    genericStyle: {
      backgroundColor: "#fcbcbc",
      border: "none",
      hoverBackgroundColor: "#ffffff", //TODO: not working
      hoverColor: "#000000", //TODO: not working
      hoverEffect: true,
      labelColor: "#000000",
      rounded: "strong",
      shadow: "none",
      size: "medium",
    },
    backgroundColor: "#ff5555",
  }
};