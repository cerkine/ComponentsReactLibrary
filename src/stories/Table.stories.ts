import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './components/Table/Table';

const meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
    columns: {
      control: { type: 'number', min: 1 },
    },
    data: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTable: Story = {
  args: {
    columns: 4,
    data: [
      ["Nombre", "Edad", "País"],
      ["Ana", "28", "España"],
      ["Luis", "32", "México"],
      ["Sara", "24", "Argentina"]
    ],
  },
};
