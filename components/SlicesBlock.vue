<template>
    <section>
        <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'images_medium'">
                <SliceImagesMedium :slice="slice" />
            </template>
        </section>
    </section>
</template>
<script>
import SliceImagesMedium from '~/components/slices/SliceImagesMedium.vue'

export default {
    props: ['slices'],
    name: 'slices-block',
    components: {
        SliceImagesMedium
    },
    mounted() {}
}
</script>