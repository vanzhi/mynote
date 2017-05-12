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
                    <i class="el-icon-plus btn-plus"></i>
                    <!--
                    <i class="el-icon-minus btn-minus"></i>
                    -->
                </div>
                <div class="note-box">
                    <div class="note-form">
                        <el-color-picker class="f-l"></el-color-picker>
                        <el-button type="primary" class="btn-add">add</el-button>
                        <el-input class="mg-t-10" placeholder="title..."></el-input>
                        <el-input class="mg-t-10" placeholder="content..." type="textarea" :rows="4"></el-input>
                    </div>
                </div>
                <div class="note-content-wrap">
                    <ul>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-check"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-close"></i>
                                </div> 
                            </div>
                        </li>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-check"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-close"></i>
                                </div> 
                            </div>
                        </li>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-check"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-close"></i>
                                </div> 
                            </div>
                        </li>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-check"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-close"></i>
                                </div> 
                            </div>
                        </li>
                        <li >
                            <div class="note-memo">
                                <div class="memo-bar">
                                    <el-color-picker class="f-l"></el-color-picker>
                                    <i class="el-icon-check"></i>
                                    <i class="el-icon-edit"></i>
                                    <i class="el-icon-close"></i>
                                </div> 
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>