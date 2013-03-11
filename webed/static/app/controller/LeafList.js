///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

Ext.define ('Webed.controller.LeafList', {
    extend: 'Ext.app.Controller',

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    models: ['Leaf'],
    stores: ['Leafs'],

    refs: [{
        selector: 'leaf-list', ref: 'leafList'
    }],

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    init: function () {
        this.control ({
            'leaf-list tool[action=leaf-list:refresh]': {
                click: this.refresh
            },
            'leaf-list': {
                afterrender: this.afterrender,
                itemclick: this.itemclick,
                expand: this.expand
            }
        });

        this.application.on ({
            select_leaf: this.select_leaf, scope: this
        });

        this.application.on ({
            reload_leaf: this.reload_leaf, scope: this
        });
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    refresh: function (self) {
        assert (this.getLeafsStore ()).load ();
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    afterrender: function (self) {
        this.keyMap = Ext.create ('Webed.controller.LeafList.KeyMap', {
            controller: this
        });
    },

    itemclick: function (self, record) {
        this.application.fireEvent ('create_tab', this, {record: record});
        this.application.fireEvent ('select_node', this, {record: record});
    },

    expand: function (self) {
        var store = assert (this.getLeafsStore ());
        var total = assert (store.getTotalCount ());
        if (total == 0) store.load ();
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    select_leaf: function (source, args) {
        if (source == this) return;
        assert (args && args.record);
        this.set_selection (args.record);
    },

    reload_leaf: function (source, args) {
        if (source == this) return;
        assert (args && args.record);

        var uuid = assert (args.record.get ('uuid'));
        var view = assert (this.getLeafList ());
        var store = assert (this.getLeafsStore ());

        var collection = store.queryBy (function (leaf) {
            return leaf.get ('uuid') == uuid;
        });

        if (collection && collection.length > 0) {
            store.reload ({scope: this, callback: function () {
                this.select_leaf (source, args);
            }});
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    get_selection: function () {
        var view = assert (this.getLeafList ());
        var semo = assert (view.getSelectionModel ());

        return semo.getLastSelected ();
    },

    set_selection: function (record) {
        assert (record);

        var uuid = assert (record.get ('uuid'));
        var view = assert (this.getLeafList ());
        var store = assert (this.getLeafsStore ());

        var collection = store.queryBy (function (leaf) {
            return leaf.get ('uuid') == uuid;
        });

        if (collection && collection.length > 0) {
            var leaf = assert (collection.items[0]);
            var table = assert (view.getView ());
            table.select (leaf);
        }
    }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

Ext.define ('Webed.controller.LeafList.KeyMap', {
    extend: 'Ext.util.KeyMap',

    config: {
        target: Ext.getDoc (),
        controller: null
    },

    constructor: function () {
        this.callParent (arguments);
        assert (this.target);
        assert (this.controller);
    },

    binding: [{
        key: Ext.EventObject.F10,
        defaultEventAction: 'stopEvent',
        handler: function (key, event) {
            var controller = assert (this.getController ());
            var view = assert (controller.getLeafList ());

            function focus () {
                assert (view.down ('triggerfield')).focus (25);
            }

            if (view.getCollapsed () == 'bottom') {
                function on_expand () {
                    focus (); view.un ('expand', on_expand);
                }

                view.on ('expand', on_expand);
                view.expand ();
            } else {
                focus ();
            }
        }
    }],

    getController: function () { return this.controller; }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
