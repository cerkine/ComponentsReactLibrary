import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/molecules/Card/Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title:{
      control: 'text'
    },
    subtitle:{
      control: 'text'
    },
    content:{
      control: 'text'
    },
    image:{
      control: 'text'
    },
    footer:{
      control: 'text'
    }
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardCustom: Story = {
  args: {
    title: "Test",
    image: "Image test",
    subtitle: "test subtitulo",
    content: "Content test",
    footer: "footer test"
  },
};
