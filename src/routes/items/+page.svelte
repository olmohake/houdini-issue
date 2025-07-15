<script lang="ts">
    let {data} = $props()
</script>
<h1>Items</h1>
{#each data.items as item}
    <div>
        {item.id} | {item.quantity}
    </div>
{/each}