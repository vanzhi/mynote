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
        props: ['colors'],
        methods: {
            setColor(color) {
                this.$emit('changeColor', color);
            }
        },
        mounted() {
            this.$parent.popperElm = this.popperElm = this.$el;
            this.referenceElm = this.$parent.$el;
        }
    }
</script>