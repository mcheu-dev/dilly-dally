import type { Meta, StoryObj } from '@storybook/react-vite';

import { CardHeader } from './card';

const meta = {
  component: CardHeader,
} satisfies Meta<typeof CardHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};