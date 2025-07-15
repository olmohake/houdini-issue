import { ItemsStore } from '$houdini'
export const load = async(event) => {
    const store = new ItemsStore()
    const result = await store.fetch({event})
	const query = `query Items{
    items{
        id
        quantity
    }
}`
    return {query,result}
}