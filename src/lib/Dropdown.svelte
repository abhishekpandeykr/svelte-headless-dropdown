<script lang="ts">
const {trigger, open,items} = $props()
</script>

{@render trigger?.()}

{#if  open}
{@render items?.()}
{/if}

