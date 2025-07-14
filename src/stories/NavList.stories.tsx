import type { Meta, StoryObj } from '@storybook/react-vite';

import NavList from '../components/molecules/NavList/NavList';

const meta = {
  component: NavList,
  tags: ['autodocs'],
  includeStories: [ 'SimpleFill', 'Default'],
} satisfies Meta<typeof NavList>;

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
  },
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

