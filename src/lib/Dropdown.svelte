<script lang="ts">
  import clickOutside from './utils/clickOutside';

  const { trigger, open, items, onclick } = $props();

  const closeDropdownList = () => {
    console.log('im called');
    onclick(false);
  };
</script>

<div
  class="dropdown-container"
  use:clickOutside
  on:outsideclick={closeDropdownList}>
  {@render trigger?.()}

  {#if open}
    <ul class="dropdown-list">
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
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0;
    padding: 4px 0;
    z-index: 10;
  }
</style>
