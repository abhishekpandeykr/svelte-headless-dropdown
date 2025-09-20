<script lang="ts">
  type DropdownItemProps = {
    value: string | { displayKey: string };
    children?: any;
    displayKey?: string;
  };

  import { getContext, onMount, type Snippet } from 'svelte';
  const { value, children, displayKey }: DropdownItemProps = $props();
  const dropdown = getContext('dropdown') as any;
  let itemIndex = $state(0);
  let isRegistered = $state(false);

  onMount(() => {
    if (!isRegistered) {
      itemIndex = dropdown.registerItem();
      dropdown.registerItems.push(value);
      isRegistered = true;
    }
  });
  let isFocused = $derived(dropdown.focusedIndex() === itemIndex);

  function handleClick() {
    dropdown?.currentSelectedItem(value);
    dropdown?.closeDropdownList();
    itemIndex = 0;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && isFocused) {
      handleClick();
      event.stopPropagation();
    }
  }

  function getDisplayText() {
    if (displayKey && typeof value === 'object') {
      return value['displayKey'];
    }
    return value;
  }
</script>

<li
  class="dropdown-item"
  class:focused={isFocused}
  onclick={handleClick}
  onkeydown={handleKeydown}
  role="option"
  tabindex="-1"
  aria-selected={isFocused}>
  {getDisplayText()}
</li>

<style>
  .dropdown-item {
    list-style: none;
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    background: transparent;
    text-align: left;
    transition: background-color 0.15s ease;
  }

  .dropdown-item:hover,
  .dropdown-item.focused {
    background-color: lightblue;
  }
</style>
