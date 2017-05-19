import Vue from 'vue';

export default {
    data() {
        return {
            lists: [],
            opened: false,
            test: 111
        }
    },
    created() {
        // 组件创建完成后执行
    },
    methods: {
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
    }
}