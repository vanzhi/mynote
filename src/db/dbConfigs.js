var configs = {
    MY_NOTE: {
        _NAME: 'MY_NOTE',
        _TABLES: [{
            _NAME: 'NOTE_INFOS',
            _KEY: {
                _NAME: 'id',
                _AUTO: true
            },
            _COLUMNS: {
                'id' :{
                    type: Number
                },
                'title': {
                    type: String
                },
                'content': {
                    type: String
                },
                'color': {
                    type: String
                },
                'createtime': {
                    type: Date,
                    index: true
                },
                'short': {
                    type: Number
                }
            }
        }]
    }
}
export default configs;