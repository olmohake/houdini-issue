<script lang="ts">
    let {data} = $props()
</script>
<h1>Query</h1>
{data.query}

<h1>Result</h1>
{JSON.stringify(data.result)}

