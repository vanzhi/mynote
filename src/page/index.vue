<template>
	<div>
		<el-row>
            <el-col :span="24">
                <header class="note-header">
                    <span class="note-logo">my note</span>
                    <!-- todo 此处增加搜索 -->
                </header>
            </el-col>
        </el-row>
		<el-row>
            <el-col :span="18" :offset="3">
                <div class="note-title">
                    <span>what do you want to todo：</span>
                    <i class="el-icon-plus btn-plus" :class="{'open' : opened}" @click="open"></i>
                    <!--
                    <i class="el-icon-minus btn-minus"></i>
                    -->
                </div>
                <div class="note-box" :class="{'open' : opened}">
                    <div class="note-form">
                        <simple-picker v-model="mycolor" @change="colorChage"></simple-picker>
                        <el-button type="primary" class="btn-add">add</el-button>
                        <el-input class="mg-t-10" placeholder="title..."></el-input>
                        <el-input class="mg-t-10" placeholder="content..." resize="none" type="textarea" :rows="4"></el-input>
                    </div>
                </div>
                <div class="note-content-wrap">
                    <ul>
                        <li v-for="item in infos">
                            <note-pad :model="item"></note-pad>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
	</div>
</template>
<script type="text/javascript">
    import notePad from '../components/notePad/notePad.vue';
    import simplePicker from '../components/simplePicker/simplePicker.vue';

    export default {
        data() {
            return {
                infos:[{
                    id: '1_xxxxxxxxxxxxx',
                    title: '第一份',
                    content: '内容内容内容内容内容内容',
                    date: '2016-10-12 09:18:32',
                    color: ''
                }],
                listName: '',
                mycolor: '',
                lists: [],
                opened: false,
                test: 111,
            }
        },
        created() {
            // 组件创建完成后执行
            
        },
        methods: {
            resetElemColor(c) {
                console.log(arguments)
            },
            colorChage: function(color) {
                console.log(color);
            },
            open: function(e) {
                this.opened = !this.opened;
            },
            get_data: function(params) {
                var v = this;
                if (!params) params = {};
                v.$api.get('topics', params, function(r) {
                    v.lists = r.data;
                })
            }
        },
        components: {
            notePad,
            simplePicker
        }
    }
</script>