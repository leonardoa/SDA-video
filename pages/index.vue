<template>
    <div>
        <div id="frame">
            <div class="item item1">
                <video muted id="video1">
                    <source src="~/static/howtowin6.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item2">
                <video muted id="video2">
                    <source src="~/static/howtowin5.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item3">
                <video muted id="video3">
                    <source src="~/static/howtowin4.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item4">
                <video muted id="video4">
                    <source src="~/static/howtowin6.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'home',
    data() {
        return {
            document: null,
        }
    },
    components: {},
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        const timer = 2000;
        const wait = 15000;
        const delta = 1000;

        let item1 = document.querySelectorAll('.item1')[0];
        let video1 = document.querySelector('#video1');

        let item2 = document.querySelectorAll('.item2')[0];
        let video2 = document.querySelector('#video2');

        let item3 = document.querySelectorAll('.item3')[0];
        let video3 = document.querySelector('#video3');

        let item4 = document.querySelectorAll('.item4')[0];
        let video4 = document.querySelector('#video4');

        //mostriamo il primo video
        setTimeout(() => {
            video1.play();
            item1.classList.add("show");
        }, timer * 1)

        setTimeout(() => {
            item1.classList.add("press");
        }, wait * 1)

        setTimeout(() => {
            item1.classList.add("hide");
        }, wait * 1 + delta)

        //mostriamo il secondo video
        setTimeout(() => {
            video2.play();
            item2.classList.add("show");
        }, wait * 1 + delta)

        setTimeout(() => {
            item2.classList.add("press");
        }, wait * 2)

        setTimeout(() => {
            item2.classList.add("hide");
        }, wait * 2 + delta)

        //mostriamo il terzo video
        setTimeout(() => {
            video3.play();
            item3.classList.add("show");
        }, wait * 2 + delta)

        setTimeout(() => {
            item3.classList.add("press");
        }, wait * 3)

        setTimeout(() => {
            item3.classList.add("hide");
        }, wait * 3 + delta)

        //mostriamo il quarto video
        setTimeout(() => {
            video4.play();
            item4.classList.add("show");
        }, wait * 3 + delta)

        setTimeout(() => {
            item4.classList.add("press");
        }, wait * 4)

        setTimeout(() => {
            item4.classList.add("hide");
        }, wait * 4 + delta)
    }
}
</script>