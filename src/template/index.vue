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
                <div class="note-title">what do you want to todo：</div>
                <div class="note-box">
                    <div class="note-form">
                        <el-input class="note-input" placeholder="tell something..."></el-input>
                        <el-button type="primary" class="note-add">add</el-button>
                    </div>
                    <ul>
                        <li>
                            <div class="note-memo">lalalsomething在这里写什么</div>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>