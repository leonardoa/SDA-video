<template>
    <div>
        <div id="frame">
            <div class="item item1">
                <video muted id="video1">
                    <source src="~/static/foce/foce1.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item2">
                <video muted id="video2">
                    <source src="~/static/foce/foce2.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item3">
                <video muted id="video3">
                    <source src="~/static/foce/foce5.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item4">
                <video muted id="video4">
                    <source src="~/static/foce/foce3.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item5">
                <video muted id="video5">
                    <source src="~/static/foce/foce4.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item6">
                <video muted id="video6">
                    <source src="~/static/foce/foce6.mp4" type="video/mp4">
                </video>
            </div>
            <div class="item item7">
                <video muted id="video7">
                    <source src="~/static/foce/foce1.mp4" type="video/mp4">
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

        let item5 = document.querySelectorAll('.item5')[0];
        let video5 = document.querySelector('#video5');

        let item6 = document.querySelectorAll('.item6')[0];
        let video6 = document.querySelector('#video6');

        let item7 = document.querySelectorAll('.item7')[0];
        let video7 = document.querySelector('#video7');

        //1
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

        //2
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

        //3
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

        //4
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

        //5
        //mostriamo il quinto video
        setTimeout(() => {
            video5.play();
            item5.classList.add("show");
        }, wait * 4 + delta)

        setTimeout(() => {
            item5.classList.add("press");
        }, wait * 5)

        setTimeout(() => {
            item5.classList.add("hide");
        }, wait * 5 + delta)

        //6
        //mostriamo il sesto video
        setTimeout(() => {
            video6.play();
            item6.classList.add("show");
        }, wait * 5 + delta)

        setTimeout(() => {
            item6.classList.add("press");
        }, wait * 6)

        setTimeout(() => {
            item6.classList.add("hide");
        }, wait * 6 + delta)

        //7
        //mostriamo il settimo video
        setTimeout(() => {
            video7.play();
            item7.classList.add("show");
        }, wait * 6 + delta)

        setTimeout(() => {
            item7.classList.add("press");
        }, wait * 7)

        setTimeout(() => {
            item7.classList.add("hide");
        }, wait * 7 + delta)



    }
}
</script>