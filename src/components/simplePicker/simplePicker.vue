<template id="base-elem">
    <!-- clickoutside指令 用了element的 -->
    <div class="simple-color-picker f-l" @click="showPicker=!showPicker" v-clickoutside="hide" :aaa="myccc">
        <span class="scp-preview" :style="{'background':curColor}" @changeColor="changeColor"></span>
        <span class="scp-icon"></span>
        <picker-down ref="dropdown" @changeColor="changeColor" :colors="colors" v-model="showPicker"></picker-down>
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
            value: {
                type: String
            },
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
                if (this.curColor != color) {
                    this.curColor = color;
                    this.$emit('input', color);
                    this.$emit('change', color);
                }
                this.hide();
            }
        },
        mounted: function() {
            this.popperElm = this.$refs.dropdown.$el;
        },
        directives: { Clickoutside },
        components: {
            pickerDown
        },
        computed: {
            myccc() {
                var val = this.curColor;
                // console.log('change')
                return '111';
            }
        },
        watch: {
            value(val) {
                // console.log('changeeeee', val);
            }
        }
    }
</script>