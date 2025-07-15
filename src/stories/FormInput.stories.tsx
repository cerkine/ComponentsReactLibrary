import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormInput } from '../components/molecules/FormInput/FormInput';

const meta = {
  component: FormInput,
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Text Label",
    type: "text",
    placeholder: "Enter text here",
  },
};