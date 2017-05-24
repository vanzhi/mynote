<template id="scope-elem" v-if="a">
    <ul class="scp-select-wrap" v-show="showPopper" style="style+'111'">
        <li class="scp-select-view" style="background:#111;"></li>
        <li class="scp-select-view" style="background:#ccc;"></li>
        <li class="scp-select-view" style="background:#ccc;"></li>
        <li class="scp-select-view" style="background:#ccc;"></li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                style: 'top:0;',
                pos: {},
                parentPos: {}
            }
        },
        props: ['showPopper'],
        methods: {
            
        },
        mounted() {
            var {offsetHeight, offsetWidth, offsetTop, offsetLeft} = this.$parent.$el;
            this.$parent.popperElm = this.$el;
            this.parentPos = {offsetHeight, offsetWidth, offsetTop, offsetLeft};
            this.pos = {top:(offsetTop + offsetHeight).toString(), left: (offsetLeft + 10).toString()};
        },
        watch: {
            showPopper: function(val) {
                if (val) {
            this.style = JSON.stringify(this.pos).replace(/\{|\}+/g, '').replace(/\,+/g, ';');
                    document.body.appendChild(this.$el);
                }
            }
        }
    }
</script>