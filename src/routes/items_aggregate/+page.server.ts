import { ItemAggregateStore } from '$houdini'
import fs from 'fs';
import path from 'path';
export const load = async(event) => {
    const store = new ItemAggregateStore()
    const result = await store.fetch({event})
    const query = `query ItemAggregate{
  itemsAggregate{
    _count
    quantity{
      sum
    }
  }
}`
    return {query,result}
}