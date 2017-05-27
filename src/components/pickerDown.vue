<template id="scope-elem" v-if="a">
    <transition name="el-fade-in" @after-leave="doDestroy">
        <ul class="scp-select-wrap" v-show="showPopper">
            <template v-for="i in colors">
                <li class="scp-select-view" :style="{'background':i}" :bxx="i" @click="setColor(i)" :color="i"></li>
            </template>
        </ul>
    </transition>
</template>
<script>
    import Popper from 'element-ui/lib/utils/vue-popper';

    export default {
        data() {
            return {
                pos: {},
                parentPos: {}
            }
        },
        mixins: [Popper],
        props: ['colors', 'curColor'],
        methods: {
            setColor(color) {
                console.log(1, color);
                this.$emit('changeColor', color);
            }
        },
        mounted() {
            this.$parent.popperElm = this.popperElm = this.$el;
            this.referenceElm = this.$parent.$el;
            // todo : 考虑边缘位置的情况，考虑调整窗口
            // var {offsetHeight, offsetWidth, offsetTop, offsetLeft} = this.$parent.$el;
            // this.$parent.popperElm = this.$el;
            // this.parentPos = {offsetHeight, offsetWidth, offsetTop, offsetLeft};
            // this.pos = {top:(eval(offsetTop + offsetHeight) + 'px'), left: (eval(offsetLeft + 10) + 'px')};
            // window.onresize = (e)=> {
                
            // }
        },
        watch: {
            // showPopper: function(val) {
                // v-model传入的showPicker即为this.value，vue-popper中watch了this.value，且this.showPopper = this.value
                // if (val) {
                //     this.style = this.pos;
                //     document.body.appendChild(this.$el);
                // }
            // }
        }
    }
</script>