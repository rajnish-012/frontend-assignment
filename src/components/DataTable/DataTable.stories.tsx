import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';

interface Person {
  name: string;
  age: number;
}

const meta: Meta<typeof DataTable<Person>> = {
  title: 'Components/DataTable',
  component: DataTable
};
export default meta;

type Story = StoryObj<typeof DataTable<Person>>;

const sampleData: Person[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const sampleColumns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' }
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns
  }
};