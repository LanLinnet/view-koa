(function() {

    var isHandling = false;
    window.hteditor_config.onTitleCreating = function(editor, params) {
        if (!isHandling) {
            isHandling = true;
            handleTitleCreating(editor, params);
            isHandling = false;
        }
    };

    function handleTitleCreating(editor, params) {
        var title = params.title;
        var oldTitle = params.oldTitle;
        var inspector = params.inspector;

        if (inspector.type === 'symbol' && oldTitle === 'TitleBasic') {
            addPropertiesToSymbol(inspector);
        }
        else if (inspector.type === 'display' && title === 'TitleGridsGuides') {
            inspector.addCustomProperty({
                property: 'json.background',
                name: 'JSON 背景',
                valueType: 'URL'
            });
        }
        else if (inspector.type === 'data' && title === 'TitleNodeLayout') {
            var axisInfo = {
                'right': { 'axisX.x': 100, 'axisX.y': -58, 'axisY.x': 0, 'axisY.y': 120},
                'left': { 'axisX.x': 100, 'axisX.y': 58, 'axisY.x': 0, 'axisY.y': 120},
                'rightTop': { 'axisX.x': 100, 'axisX.y': -58, 'axisY.x': 100, 'axisY.y': 60},
                'leftTop': { 'axisX.x': 100, 'axisX.y': 58, 'axisY.x': -100, 'axisY.y': 60},
            }
            var items = [];
            inspector.addLabelComboBox(items, '轴侧方向', function(data) {
                return data.__skewOrientation || 'right';
            }, function(data, value) {
                data.__skewOrientation = value;
                data.a(axisInfo[value]);
            }, ['right', 'left', 'rightTop', 'leftTop'], ['右', '左', '右上', '左上']);
            var row = inspector.addNameRow(items);
            row.visible = function(inspector) {
                var data = inspector.data;
                return data.getClassName() === 'ht.Node' && data.getImage() === 'symbols/basic/skew-image.json';
            }
        }
    }

    function addPropertiesToSymbol(inspector) {
        var S = hteditor.getString;
        var indent = hteditor.config.indent;

        inspector.addTitle('TitleTest');

        var items = [];
        items.push(S('Type'));
        var textField = new ht.widget.TextField();
        textField.setEditable(false);
        items.push(textField);

        var label = S('Pick');
        var toolTip = null;
        var icon = null;
        var onClicked = function() {
            var dataModel = new ht.DataModel();
            var tree = new ht.widget.TreeView(dataModel);
            for (var i = 0; i < 3; i++) {
                var parent = new ht.Data();
                parent.setName('Type-' + i);
                parent.setIcon('symbols/basic/ht.json');
                dataModel.add(parent);
                for (var j = 0; j < 3; j++) {
                    var child = new ht.Data();
                    child.setName('Type-' + i + '-' + j);
                    child.setParent(parent);
                    dataModel.add(child);
                }
            }
            tree.expandAll();
            dataModel.sm().setSelectionMode('single');

            var formPane = new ht.widget.FormPane();
            formPane.addRow([
                tree
            ], [0.1], 0.1);

            var dialog = new ht.widget.Dialog();
            var buttons = [];
            buttons.push(
                {
                     label: S('Cancel'),
                     action: function() {
                        dialog.hide();
                     }
                },
                {
                    label: S('OK'),
                    action: function() {
                        var data = dataModel.sm().ld();
                        var value = data ? data.getName() : undefined;
                        inspector.setPropertyValue('test.type', value);
                        dialog.hide();
                    }
                }
            );
            dialog.setConfig({
                title: S('PickType'),
                draggable: true,
                width: 200,
                height: 300,
                contentPadding: 0,
                content: formPane,
                buttons: buttons,
                buttonsAlign: 'right'
            });
            dialog.show();
        };
        var button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push(button);

        label = null;
        toolTip = 'HT for Web';
        icon = 'symbols/basic/red.json';
        onClicked = function() { setTimeout(function() {
            alert('HIGHTOPO is AWESOME!!!');
        }, 20)};
        button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push(button);

        inspector.addRow(items, [indent, 0.1, 40, 20]);

        inspector.addCustomProperty({
            property: 'test.name',
            name: 'Name',
            valueType: 'String'
        });

        inspector.addCustomProperty({
            property: 'test.description',
            name: 'Description',
            valueType: 'Multiline'
        });

        inspector.addUpdateHandler(function() {
            textField.setText(inspector.getPropertyValue('test.type') || '')
        });
    }
})();









