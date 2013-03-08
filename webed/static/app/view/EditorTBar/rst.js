Ext.define ('Webed.view.EditorTBar.rst', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.editor-tbar-rst',

    items: [{
        action: 'undo',
        defaults: {text: 'Undo'},
        iconCls: 'icon-arrow_undo-16',
        tooltip: 'Undo'
    },{
        action: 'redo',
        defaults: {text: 'Redo'},
        iconCls: 'icon-arrow_redo-16',
        tooltip: 'Redo'
    },'-',{
        action: 'cut',
        defaults: {text: 'Cut'},
        iconCls: 'icon-cut-16',
        tooltip: 'Cut Text'
    },{
        action: 'copy',
        defaults: {text: 'Copy'},
        iconCls: 'icon-page_white_copy-16',
        tooltip: 'Copy'
    },{
        action: 'paste',
        defaults: {text: 'Paste'},
        iconCls: 'icon-paste_plain-16',
        tooltip: 'Paste'
    }, '-', {
        action: 'apply-heading-0',
        iconCls: 'icon-text_heading_1-16',
        split: true,
        text: 'Heading',
        tooltip: 'Document Headers',

        menu: {
            items: [{
                action: 'apply-heading-1',
                iconCls: 'icon-text_heading_1-16',
                text: 'Parts'
            },{
                action: 'apply-heading-2',
                iconCls: 'icon-text_heading_2-16',
                text: 'Chapters'
            },{
                action: 'apply-heading-3',
                iconCls: 'icon-text_heading_3-16',
                text: 'Sections'
            },{
                action: 'apply-heading-4',
                iconCls: 'icon-text_heading_4-16',
                text: 'Subsections'
            },{
                action: 'apply-heading-5',
                iconCls: 'icon-text_heading_5-16',
                text: 'Sub-Subsections'
            },'-',{
                action: 'apply-heading-6',
                iconCls: 'icon-text_heading_6-16',
                text: 'Rubric'
            }]
        }
    },'-',{
        action: 'toggle-strong',
        iconCls: 'icon-text_bold-16',
        defaults: {text: 'Strong Emphasis'},
        tooltip: 'Strong Emphasis'
    },{
        action: 'toggle-italic',
        iconCls: 'icon-text_italic-16',
        defaults: {text: 'Emphasis'},
        tooltip: 'Emphasis'
    },{
        action: 'toggle-literal',
        iconCls: 'icon-text_allcaps-16',
        defaults: {text: 'Literal'},
        tooltip: 'Literal'
    },'-',{
        action: 'toggle-subscript',
        iconCls: 'icon-text_subscript-16',
        defaults: {text: 'Subscript'},
        tooltip: 'Subscript'
    },{
        action: 'toggle-supscript',
        iconCls: 'icon-text_superscript-16',
        defaults: {text: 'Superscript'},
        tooltip: 'Superscript'
    },'-',{
        action: 'lower-case',
        iconCls: 'icon-text_lowercase-16',
        defaults: {text: 'Lower Case'},
        tooltip: 'Lower Case'
    },{
        action: 'upper-case',
        iconCls: 'icon-text_uppercase-16',
        defaults: {text: 'Upper Case'},
        tooltip: 'Upper Case'
    },'-',{
        action: 'toggle-bullet-list',
        iconCls: 'icon-text_list_bullets-16',
        defaults: {text: 'Bullet List'},
        tooltip: 'Bullet List'
    },{
        action: 'toggle-number-list',
        iconCls: 'icon-text_list_numbers-16',
        defaults: {text: 'Number List'},
        tooltip: 'Number List'
    },'-',{
        action: 'decrease-indent',
        iconCls: 'icon-text_indent_remove-16',
        defaults: {text: 'Decrease Indent'},
        tooltip: 'Decrease Indent'
    },{
        action: 'increase-indent',
        iconCls: 'icon-text_indent-16',
        defaults: {text: 'Increase Indent-16'},
        tooltip: 'Increase Indent'
    },'-',{
        action: 'insert-figure',
        iconCls: 'icon-picture-16',
        defaults: {text: 'Figure'},
        tooltip: 'Figure'
    },{
        action: 'insert-image',
        iconCls: 'icon-image-16',
        defaults: {text: 'Image'},
        tooltip: 'Image'
    },{
        action: 'insert-hyperlink',
        iconCls: 'icon-link-16',
        defaults: {text: 'Hyperlink'},
        tooltip: 'Hyperlink'
    },{
        action: 'insert-footnote',
        iconCls: 'icon-text_horizontalrule-16',
        defaults: {text: 'Footnote'},
        tooltip: 'Footnote'
    },{
        action: 'insert-horizontal-line',
        iconCls: 'icon-hrule-16',
        defaults: {text: 'Horizontal Line'},
        tooltip: 'Horizontal Line'
    },'-',{
        action: 'find',
        iconCls: 'icon-find-16',
        defaults: {text: 'Find'},
        tooltip: 'Find'
    },{
        action: 'find-next',
        iconCls: 'icon-document_page_next-16',
        defaults: {text: 'Find Next'},
        tooltip: 'Find Next'
    },{
        action: 'find-previous',
        iconCls: 'icon-document_page_previous-16',
        defaults: {text: 'Find Previous'},
        tooltip: 'Find Previous'
    },{
        action: 'replace-all',
        iconCls: 'icon-text_replace-16',
        defaults: {text: 'Replace All'},
        tooltip: 'Replace All'
    }]
});
