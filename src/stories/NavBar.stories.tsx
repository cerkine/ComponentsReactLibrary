import type { Meta, StoryObj } from '@storybook/react-vite';

import Navbar from '../components/molecules/NavBar/NavBar';

const meta = {
  component: Navbar,
  tags: ['autodocs'],
  includeStories: ['SimpleFill', 'Default'],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleFill: Story = {
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

export const Default: Story = {
  args: {
    links: [
      { to: '/home', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact', rounded: 'strong', shadow: 'strong', border: 'strong', labelColor: '#ff0303', backgroundColor: '#007bff', hoverBackgroundColor: '#0056b3', hoverColor: '#ffffff' },
    ],
    //change the color to match a good easy theme to read but beautiful
    genericStyle: {
      labelColor: '#000000',
      backgroundColor: '#ffffff',
      hoverBackgroundColor: '#f5f5f5',
      hoverColor: '#000000',
      hoverEffect: true,
      size: 'medium',
      rounded: 'none',
      shadow: 'none',
      border: 'default'
    },
  }
};

