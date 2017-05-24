<template id="base-elem">
    <!-- todo 创建clickoutside指令 -->
    <div class="simple-color-picker f-l" @click="show">
        <span class="scp-preview"></span>
        <span class="scp-icon"></span>
        <picker-down :showPopper="showPopper"></picker-down>
    </div>
</template>
<script>
    import pickerDown from './pickerDown.vue'
    export default {
        data() {
            return {
                showPopper : false
            }
        },
        methods: {
            show() {
                this.showPopper = true;
            },
            hide() {
                console.log(arguments)
            }
        },
        mounted: function() {
            
        },
        components: {
            pickerDown
        }
    }
</script>