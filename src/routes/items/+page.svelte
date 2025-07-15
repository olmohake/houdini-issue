<script lang="ts">
    import fs from 'fs';
    import path from 'path';
    let {data} = $props()
    let query = `query Items{
  items{
    id
    quantity
  }
}`
</script>
<h1>Query</h1>
{data.query}

<h1>Result</h1>
{JSON.stringify(data.result)}

