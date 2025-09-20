# Svelte Headless Dropdown

A headless, accessible, typeahead-enabled dropdown component for Svelte 5.

## Features

- 🎯 **Headless** - No default styling, full control over appearance
- ♿ **Accessible** - Built with ARIA attributes and keyboard navigation
- ⌨️ **Keyboard Support** - Arrow keys, Enter, and Escape navigation
- 🎨 **Customizable** - Pass custom CSS classes for styling
- 📦 **TypeScript** - Full TypeScript support
- 🚀 **Svelte 5** - Built for Svelte 5 with modern syntax

## Installation

```bash
npm install svelte-headless-dropdown
```

## Usage

### Basic Example

```svelte
<script>
  import { Dropdown, DropdownItem } from 'svelte-headless-dropdown';

  let isOpen = $state(false);
  let selectedValue = $state('');

  const items = ['Option 1', 'Option 2', 'Option 3'];

  function handleSelect(value) {
    selectedValue = value;
    console.log('Selected:', value);
  }
</script>

<Dropdown
  {isOpen}
  onclick={(open) => isOpen = open}
  onSelect={handleSelect}
>
  <svelte:fragment slot="trigger">
    <button type="button">
      {selectedValue || 'Select an option'}
    </button>
  </svelte:fragment>

  <svelte:fragment slot="items">
    {#each items as item}
      <DropdownItem {value: item} />
    {/each}
  </svelte:fragment>
</Dropdown>
```

### With Objects

```svelte
<script>
  import { Dropdown, DropdownItem } from 'svelte-headless-dropdown';

  let isOpen = $state(false);
  let selectedUser = $state(null);

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];
</script>

<Dropdown
  {isOpen}
  onclick={(open) => (isOpen = open)}
  onSelect={(user) => (selectedUser = user)}>
  <svelte:fragment slot="trigger">
    <button type="button">
      {selectedUser?.name || 'Select a user'}
    </button>
  </svelte:fragment>

  <svelte:fragment slot="items">
    {#each users as user}
      <DropdownItem value={user} displayKey="name" />
    {/each}
  </svelte:fragment>
</Dropdown>
```

### Custom Styling

```svelte
<Dropdown
  {isOpen}
  onclick={(open) => (isOpen = open)}
  containerClass="my-dropdown"
  listClass="my-dropdown-list">
  <!-- content -->
</Dropdown>
```

## API

### Dropdown Props

| Prop             | Type                                | Default | Description                          |
| ---------------- | ----------------------------------- | ------- | ------------------------------------ |
| `open`           | `boolean`                           | -       | Whether the dropdown is open         |
| `onclick`        | `(open: boolean) => void`           | -       | Callback when dropdown state changes |
| `onSelect`       | `(value: string \| object) => void` | -       | Callback when an item is selected    |
| `containerClass` | `string`                            | `''`    | CSS class for the container          |
| `listClass`      | `string`                            | `''`    | CSS class for the dropdown list      |

### DropdownItem Props

| Prop         | Type               | Default | Description                            |
| ------------ | ------------------ | ------- | -------------------------------------- |
| `value`      | `string \| object` | -       | The value of the item                  |
| `displayKey` | `string`           | -       | Key to display when value is an object |
| `children`   | `any`              | -       | Custom content for the item            |

## Keyboard Navigation

- **Arrow Up/Down**: Navigate through items
- **Enter**: Select focused item
- **Escape**: Close dropdown

## Styling

The component comes with minimal default styles. You can customize the appearance using CSS classes:

```css
.my-dropdown {
  position: relative;
  display: inline-block;
}

.my-dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown-item:hover,
.dropdown-item.focused {
  background-color: #f0f0f0;
}
```

## License

MIT
