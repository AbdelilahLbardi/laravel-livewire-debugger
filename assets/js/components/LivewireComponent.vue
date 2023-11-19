<script>

export default {
    name: "LivewireComponent",
    props: {
        name: {
            type: String
        },
        id: {
            type: String
        },
        index: {
            type: Number
        },
        livewireProperties: {
            type: Object
        }
    },
    watch: {
        properties: {
            handler(newVal, oldVal) {
                const _this = this
                Object.keys(newVal).forEach(
                    function (key) {
                        _this.$emit('update-livewire-property', {
                            index: _this.index,
                            property: key,
                            value: newVal[key]
                        })
                    }
                )
            }, deep: true
        }
    },
    data() {
        return {
            properties: {}
        }
    },
    created() {
        this.properties = this.livewireProperties;
    },
}
</script>

<template></template>

<style scoped></style>