<template>
    <div>
        <div v-for="(item, index) in slice.items" :key="'slice-' + index">
            <!-- <nuxt-img v-if="item.image.url" :src="item.image.url" sizes="sm:100vw md:50vw lg:400px" loading="lazy"/> -->
             <nuxt-picture :src="item.image.url" sizes="sm:200px md:300px lg:1500px, xl:4500px" />
        </div>
    </div>
</template>
<script>
export default {
    props: ['slice'],
    name: 'SliceImagesMedium'
}
</script>

