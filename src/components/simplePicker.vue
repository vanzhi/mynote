<template id="base-elem" v-if="!a">
    <div class="simple-color-picker f-l">
        <span class="scp-preview"></span>
        <span class="scp-icon"></span>
        
    </div>
</template>
<!--
<template id="scope-elem" v-if="a">
    <ul class="scp-select-wrap">
        <li class="scp-select-view" style="background:#ccc;"></li>
        <li class="scp-select-view" style="background:#ccc;"></li>
        <li class="scp-select-view" style="background:#ccc;"></li>
        <li class="scp-select-view" style="background:#ccc;"></li>
    </ul>
</template>
-->
<script>
    export default {
        data() {
            return {
                a : false
            }
        }
    }
</script>