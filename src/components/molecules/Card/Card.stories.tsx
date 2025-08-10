import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, type DataInputProps } from './Card';

const meta = {
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

const data: DataInputProps[] =
  [
    {type: 'text', label: 'aa'},
    {type: 'text', label: 'telf', placeholder: '6666...'},
    {type: 'text', label: 'casa', placeholder: 'Calle sant...'}
  ];


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: data
  }
};