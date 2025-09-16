<script lang="ts">
  import type { Snippet } from 'svelte';
  const {
    value,
    children,
    onSelect,
    displayKey,
  }: {
    value: string | { displayKey: string };
    children: Snippet;
    onSelect: (value: string | { displayKey: string }) => void;
    displayKey?: string;
  } = $props();

  function handleClick() {
    onSelect?.(value);
  }

  function getDisplayText() {
    if (displayKey && typeof value === 'object') {
      return value['displayKey'];
    }
    return value;
  }
</script>

<!-- <li>{children?.()}</li> -->
<li onclick={handleClick} class="dropdown-item">{getDisplayText()}</li>

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

  .dropdown-item:hover {
    background-color: lightblue;
  }
</style>
