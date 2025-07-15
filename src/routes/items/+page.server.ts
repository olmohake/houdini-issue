import { ItemsStore } from '$houdini'

export const load = async(event) => {
    const query = new ItemsStore()
    const {data} = await query.fetch({event})
    return data
}