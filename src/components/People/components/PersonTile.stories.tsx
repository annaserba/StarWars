import type { Meta } from '@storybook/react'
import PersonTile from './PersonTile'

const meta: Meta = {
  title: 'Components/PersonTile',
  component: PersonTile,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = typeof meta

export const Default: Story = {
  args: {
    person: {
      name: 'John Doe',
      birth_year: '1990',
      gender: 'male'
    }
  }
}

export const Loading: Story = {
  args: {
    loading: true
  }
}
