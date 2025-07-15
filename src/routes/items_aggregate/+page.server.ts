import { ItemAggregateStore } from '$houdini'

export const load = async(event) => {
    const query = new ItemAggregateStore()
    const result = await query.fetch({event})
    return result
}