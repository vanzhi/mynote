<template id="base-elem">
    <!-- todo 创建clickoutside指令 -->
    <div class="simple-color-picker f-l" @click="showPicker=!showPicker" v-clickoutside="hide">
        <span class="scp-preview" :style="{'background':curColor}" @changeColor="changeColor"></span>
        <span class="scp-icon"></span>
        <picker-down ref="dropdown" :colors="colors" v-model="showPicker"></picker-down>
    </div>
</template>
<script>
    import pickerDown from './pickerDown.vue';
    import Clickoutside from 'element-ui/lib/utils/clickoutside.js';
    export default {
        data() {
            return {
                curColor: this.colors[this.colors.length - 1],
                showPicker: false
            }
        },
        props: {
            colors: {
                type : Array,
                default: ['#ccc', '#ccc', '#ccc', '#ccc', '#ccc', '#ccc', '#ccc']
            }
        },
        methods: {
            hide() {
                this.showPicker = false;
            },
            changeColor: function(color) {
                console.log(2, color);
            }
        },
        mounted: function() {
            this.popperElm = this.$refs.dropdown.$el;
        },
        directives: { Clickoutside },
        components: {
            pickerDown
        }
    }
</script>