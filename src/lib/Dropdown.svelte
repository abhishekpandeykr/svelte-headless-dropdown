<script lang="ts">
  interface DropdownProps {
    trigger: () => any;
    open: boolean;
    items: () => any;
    onclick: (open: boolean) => void;
    containerClass?: string;
    listClass?: string;
    onSelect?: (value: string | { displayKey: string }) => void;
  }

  import { setContext } from 'svelte';
  import clickOutside from './utils/clickOutside';

  const {
    trigger,
    open,
    items,
    onclick,
    containerClass = '',
    listClass = '',
    onSelect = (value: string | { displayKey: string }) => {},
  }: DropdownProps = $props();
  let focusedIndex: number = $state(-1);
  let itemCount = $state(0);
  const registerItems = [] as (string | { displayKey: string })[];

  const closeDropdownList = () => {
    onclick(false);
  };

  function registerItem() {
    const index = itemCount;
    itemCount += 1;
    return index;
  }

  function getFocusedIndex() {
    return focusedIndex;
  }

  const currentSelectedItem = function (
    value: string | { displayKey: string },
  ) {
    onSelect(value);
  };

  const resetDropdown = () => {
    focusedIndex = -1;
    itemCount = 0;
  };

  const keyBoardEvent = (event: KeyboardEvent) => {
    if (!open) return;

    switch (event.key) {
      case 'Escape':
        closeDropdownList();
        resetDropdown();
        break;
      case 'ArrowUp':
        focusedIndex = focusedIndex > 0 ? focusedIndex - 1 : itemCount - 1;
        break;
      case 'ArrowDown':
        focusedIndex = focusedIndex < itemCount - 1 ? focusedIndex + 1 : 0;
        break;
      case 'Enter':
        currentSelectedItem(registerItems[focusedIndex]);
        resetDropdown();
        closeDropdownList();
        break;
    }
    event.preventDefault();
  };
  setContext('dropdown', {
    closeDropdownList,
    registerItem,
    currentSelectedItem,
    registerItems,
    focusedIndex: getFocusedIndex,
  });
</script>

<!-- svelte-ignore event_directive_deprecated -->
<div
  class="dropdown-container {containerClass}"
  on:keydown={keyBoardEvent}
  role="button"
  tabindex="0"
  use:clickOutside
  on:outsideclick={closeDropdownList}>
  {@render trigger?.()}

  {#if open}
    <ul class="dropdown-list {listClass}" role="listbox">
      {@render items?.()}
    </ul>
  {/if}
</div>

<style>
  .dropdown-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    z-index: 10;
    list-style: none;
  }
</style>
