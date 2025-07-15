import { ItemAggregateStore } from '$houdini'
import fs from 'fs';
import path from 'path';
export const load = async(event) => {
    const store = new ItemAggregateStore()
    const result = await store.fetch({event})
    const filePath = path.resolve('src/routes/items_aggregate/itemsAggregate.gql');
	const query = fs.readFileSync(filePath, 'utf8');
    return {query,result}
}