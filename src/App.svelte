<script lang="ts">
  import Dropdown from './lib/Dropdown.svelte';
  import DropdownItem from './lib/DropdownItem.svelte';

  let isOpen = $state(false);
  let selectedvalue = $state('');
  let data = ['Abhishek', 'Kumar', 'Pandey'];

  const handleSelect = (value: string | { displayKey: string }) => {
    if (typeof value === 'string') {
      selectedvalue = value;
    } else if (value && 'displayKey' in value) {
      selectedvalue = value.displayKey;
    }
  };
</script>

<Dropdown
  open={isOpen}
  onclick={(valueToBeSetWith: boolean) => (isOpen = valueToBeSetWith)}
  onSelect={handleSelect}>
  {#snippet trigger()}
    <button onclick={() => (isOpen = !isOpen)}>
      {selectedvalue ? selectedvalue : 'Please Select'}
    </button>
  {/snippet}
  {#snippet items()}
    {#each data as item}
      <DropdownItem value={item} displayKey="name">
        {item}
      </DropdownItem>
    {/each}
  {/snippet}
</Dropdown>
