<template>
	<div>
		<el-row>
            <el-col :span="24">
                <header class="note-header">
                    <span class="note-logo">my note</span>
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
                        <div class="simple-color-picker f-l">
                            <span class="scp-preview"></span>
                            <span class="scp-icon"></span>
                            <ul class="scp-select-wrap">
                                <li class="scp-select-view" style="background:#ccc;"></li>
                                <li class="scp-select-view" style="background:#ccc;"></li>
                                <li class="scp-select-view" style="background:#ccc;"></li>
                                <li class="scp-select-view" style="background:#ccc;"></li>
                            </ul>
                        </div>
                        <el-button type="primary" class="btn-add">add</el-button>
                        <el-input class="mg-t-10" placeholder="title..."></el-input>
                        <el-input class="mg-t-10" placeholder="content..." resize="none" type="textarea" :rows="4"></el-input>
                    </div>
                </div>
                <div class="note-content-wrap">
                    <ul>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <div class="simple-color-picker f-l">
                                        <span class="scp-preview"></span>
                                        <span class="scp-icon"></span>
                                    </div>
                                    <i class="el-icon-close"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-check"></i>
                                </div> 
                                <div class="memo-title" contenteditable="true">
                                    <p>
                                        49版本以后跨域设置
                                    </p>
                                </div>
                                <div class="memo-content" contenteditable="true">
                                    <p>
                                        --disable-web-security --user-data-dir = C:\MyChromeDevUserData
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-close"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-check"></i>
                                </div> 
                                <div class="memo-title" contenteditable="true">
                                    <p>
                                        49版本以后跨域设置
                                    </p>
                                </div>
                                <div class="memo-content" contenteditable="true">
                                    <p>
                                        --disable-web-security --user-data-dir = C:\MyChromeDevUserData
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-close"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-check"></i>
                                </div> 
                            </div>
                        </li>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-close"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-check"></i>
                                </div> 
                            </div>
                        </li>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-close"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-check"></i>
                                </div> 
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
		<simple-picker></simple-picker>
	</div>
</template>
<script type="text/javascript">
	import exp from '../controller/index.js';
	export default exp
</script>