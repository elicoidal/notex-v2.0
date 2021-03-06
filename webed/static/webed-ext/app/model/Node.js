Ext.define ('Webed.model.Node', {
    extend: 'Ext.data.Model',
    fields: [
        'uuid_path', 'name_path', 'root_uuid', 'uuid', 'name', 'mime', 'size'
    ],

    proxy: {
        type: 'rest', url: '/node', reader: {
            type: 'json', root: 'results'
        }
    },

    getTitle: function () {
        var mime = assert (this.get ('mime'));
        return assert (MIME.to_name (mime));
    }
});
