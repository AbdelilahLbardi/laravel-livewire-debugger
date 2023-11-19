<script>

import LivewireComponent from "./Component.vue";

export default {
    components: {
        LivewireComponent,
    },
    data() {
        return {
            livewire: null,
        }
    },
    created() {

        this.livewire = window.Livewire

        const _this = this

        window.Livewire.hook('morph.updated', () => _this.updateLivewire())

    },

    methods: {
        updateLivewire() {
            this.livewire = window.Livewire
        },

        updateLivewireProperty(event) {
            /**
             * FIXME: livewire model not getting updated
             */

            const _component = window.Livewire.all()[event.index]

            _component.$wire.set(event.property, event.value)
        }
    },
}
</script>

<template>
    <div class="wrapper">
        <LivewireComponent
            v-for="(component, componentIndex) in livewire.all()"
            :id="component.id"
            :index="componentIndex"
            :name="component.name"
            :livewire-properties="component.ephemeral"
            @update-livewire-property="updateLivewireProperty"
            :key="component.id"
        />
    </div>
</template>

<style scoped>
.wrapper {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    z-index: 99999;
}
</style>