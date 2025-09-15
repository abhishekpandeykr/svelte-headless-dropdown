<script lang="ts">
import Dropdown from './lib/Dropdown.svelte';
  import DropdownItem from './lib/DropdownItem.svelte';

let isOpen = false;
let data = ["Abhishek", "Kumar", "Pandey"]
</script>

<h1>
  <Dropdown open={isOpen}>
    {#snippet trigger()}
    <button onclick={() => isOpen = !isOpen}>
      <!-- {selected ?? "Select an Option"} -->
       {isOpen ? 'you have selected':"Please select"}
    </button>
    {/snippet}
    {#snippet items()}
    {#each data as item}
      <DropdownItem value={item}>
        {item}
      </DropdownItem>
    {/each}
    {/snippet}
  </Dropdown>

</h1>