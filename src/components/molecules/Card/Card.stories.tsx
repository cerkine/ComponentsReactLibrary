import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, type DataCardProps } from './Card';

const meta = {
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const data: DataCardProps[] =
  [
    {
      key: 'atk',
      value: '151'

    },
    {
      key: 'def',
      value: '151'

    },
    {
      key: 'vel',
      value: '151'

    }
  ]


export const Default: Story = {
  args: {
    type: "left",
    title: "title",
    data: data
  }
};