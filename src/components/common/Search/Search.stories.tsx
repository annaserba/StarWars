import type { Meta } from '@storybook/react'
import Search from './Search'

const meta: Meta = {
  title: 'Common/Search',
  component: Search,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = typeof meta

export const Default: Story = {
  args: {
    onSearch: (searchText: string) => {
      console.log('Searching for:', searchText)
    },
    onClear: () => {
      console.log('Clearing search')
    },
    value: ''
  }
}
