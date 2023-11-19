<script>

import LivewireComponent from "./LivewireComponent.vue";

export default {
    components: {
        LivewireComponent,
    },
    data() {
        return {
            livewire: [],
        }
    },
    created() {

        this.livewire = window.Livewire.all()

        const _this = this

        window.Livewire.hook('morph.updated', () => _this.updateLivewire())
    },

    methods: {
        updateLivewire() {
            this.livewire = window.Livewire.all()
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
            v-for="(item, index) in livewire"
            :id="item.id"
            :index="index"
            :name="item.name"
            :livewire-properties="item.ephemeral"
            @update-livewire-property="updateLivewireProperty"
            :key="item.id"
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