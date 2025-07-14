import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '../components/Table/Table';
import { testData } from '../components/Table/testData';

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
    columnWidth: {
      name: 'Column Width',
      control: 'select',
      options: [["small", "small", "small"], ['medium', 'medium', 'medium'], ['large', 'large', 'large'], ['auto', 'auto', 'auto'], ['1fr', '1fr', '1fr'], ['200px', '200px', '200px'], ['25%', '25%', '25%']],
      description: 'Width to apply to all columns',
    },
    columnAlign: {
      name: 'Column Align',
      control: 'select',
      options: [["left", "left", "left"], ['center', 'center', 'center'], ['right', 'right', 'right']],
      description: 'Align to apply to all columns',
    },
    data:
    {
      table: {
        disable: true
      }
    }
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTable: Story = {
  args: {
    columns: 3,
    columnWidth: ["small", "small", "small"],
    data: testData,
  },
};
