<script lang="ts">
  import Dropdown from './lib/Dropdown.svelte';
  import DropdownItem from './lib/DropdownItem.svelte';

  let isOpen = false;
  let data = ['Abhishek', 'Kumar', 'Pandey'];

  const handleSelect = (value: string | { displayKey: string }) => {
    console.log('value', value);
  };
</script>

<Dropdown
  open={isOpen}
  onclick={(valueToBeSetWith: boolean) => (isOpen = valueToBeSetWith)}>
  {#snippet trigger()}
    <button onclick={() => (isOpen = !isOpen)}>
      {isOpen ? 'you have selected' : 'Please select'}
    </button>
  {/snippet}
  {#snippet items()}
    {#each data as item}
      <DropdownItem
        value={item}
        displayKey="name"
        onSelect={(value: string | { displayKey: string }) =>
          handleSelect(value)}>
        {item}
      </DropdownItem>
    {/each}
  {/snippet}
</Dropdown>
