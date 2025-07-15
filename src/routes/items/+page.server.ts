import { ItemsStore } from '$houdini'
import fs from 'fs';
import path from 'path';
export const load = async(event) => {
    const store = new ItemsStore()
    const result = await store.fetch({event})
    const filePath = path.resolve('src/routes/items/items.gql');
	const query = fs.readFileSync(filePath, 'utf8');
    return {query,result}
}