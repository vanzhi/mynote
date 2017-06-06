<template>
    <div class="note-memo" :class="isDone ? 'done' : ''" :style="style">
        <div class="memo-bar">
            <simple-picker v-model="color" @change="colorChage"></simple-picker>
            <i class="el-icon-close"></i>
            <i class="el-icon-edit" v-if="isDone" @click="isDone=!isDone"></i>
            <i class="el-icon-check" v-if="!isDone" @click="isDone=!isDone"></i>
        </div> 
        <div class="memo-title">
            <p :contenteditable="!isDone" @blur="changeTitle">
                {{model.title}}
            </p>
        </div>
        <div class="memo-content">
            <p :contenteditable="!isDone" @blur="changeContent">
                {{model.content}}
            </p>
        </div>
        <div class="memo-date">{{model.date}}</div>
    </div>
</template>
<script>
    import simplePicker from '../simplePicker/simplePicker.vue';
    import utils from '../../lib/utils.js';
    export default {
        data() {
            return {
                color: '',
                title: '',
                isDone: false,
                content: ''
            }
        },
        props: {
            model : {
                default() {
                    return {}
                },
                type: Object
            }
        },
        mounted() {
            this.title = this.model.title
        },
        methods: {
            colorChage(color) {
                if (this.isDone) {
                    return;
                }
            },
            changeTitle(e) {
                if (this.isDone) {
                    return;
                }
                var text = e.target.innerText;
                text = text.replace(/[\r\n]+/g, ' ').replace(/^\s*|\s*$/g, '');
                e.target.innerHTML = text;
                this.title = text;
            },
            changeContent(e) {
                if (this.isDone) {
                    return;
                }
                var text = e.target.innerHTML;
                this.content = text;
            },
            save() {
                
            }
        },
        computed: {
            fontColor() {
                var fontColor = this.color;
                var color = this.color;
                color = utils.colorToRGB(color);
                fontColor = color.R * 0.299 + color.G * 0.587 + color.B * 0.114;
                if (fontColor > 192) {
                    return '#666666';
                } else {
                    return '#ffffff';
                }
            },
            style() {
                var style = this.isDone ? {} : {
                    backgroundColor: this.color,
                    color : this.fontColor
                }

                return style;
            },
            mymodel() {
                var model = {
                    title: this.title,
                    content: this.content,
                    color: this.color,
                    isDone: this.isDone
                }
                this.save(model);
                return model;
            }
        },
        components: {
            simplePicker
        },
        watch: {
            
        }
    }
</script>