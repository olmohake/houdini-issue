/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "https://useful-pony-7128-053034adce.ddn.hasura.app/graphql"
    },
    "runtimeDir": ".houdini",
    "plugins": {
        "houdini-svelte": {}
    }
}

export default config
