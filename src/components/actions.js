export const SET_NAME='SET_NAME'
export function setName(name){
    return{
        type:SET_NAME,
        payloud:name
    }
}
export const SET_ITEMS_LIST='SET_ITEMS_LIST'
export function setItemsList(items){
    return{
        type:SET_ITEMS_LIST,
        payloud:items
    }
}