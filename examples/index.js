var Vue = require('vue');
Vue.config.debug = true;
Vue.config.async = false;

new Vue({
    el: 'body',
    components: {
        'treeview': require('../treeview'),
        'file-treeview': require('./treeview/file-treeview.vue')
    },
    methods: {
        onTreeviewItemClick: function (e) {
            console.log('item-click', e);
        },
        onTreeviewItemToggle: function (e) {
            console.log('item-toggle', e);
        },
        onTreeviewItemExpand: function (e) {
            console.log('item-expand', e);
        },
        onTreeviewItemCollapse: function (e) {
            console.log('item-collapse', e);
        },
        collapseAll: function () {
            this.$refs.basicTreeview.collapseAll();
        },
        expandAll: function () {
            this.$refs.basicTreeview.expandAll();
        }
    },
    data: {
        tree: {
            name: 'root',
            children: [{
                name: 'parent 1',
                expanded: true,
                children: [{
                    name: 'child a',
                    children: [
                        {name: 'deep 1'},
                        {name: 'deep 2'}
                    ]
                }, {
                    name: 'child b',
                    expanded: true,
                    children: [
                        {name: 'deep 3'},
                        {name: 'deep 4'}
                    ]
                }]
            }, {
                name: 'parent 2',
                children: [
                    {name: 'child c'},
                    {name: 'child d'}
                ]
            }, {
                name: 'parent 3',
                children: [
                    {name: 'child e'},
                    {name: 'child f'}
                ]
            }, {
                name: 'parent 4',
                children: [
                    {name: 'child g'},
                    {name: 'child h'}
                ]
            }]
        },
        files: {
            children: [
                {
                    name: 'parent 1',
                    children: [
                        {
                            name: 'child a',
                            children: [{
                                name: 'deep 1'
                            }, {
                                name: 'deep 2'
                            }, {
                                name: 'deep 3'
                            }]
                        },
                        {name: 'child b'}
                    ]
                },
                {
                    name: 'parent 2',
                    children: [
                        {name: 'child c'},
                        {name: 'child d'}
                    ]
                },
                {
                    name: 'parent 3',
                    children: [
                        {name: 'child e'},
                        {name: 'child f'}
                    ]
                },
                {name: 'parent 4'}
            ]
        }
    }
});
