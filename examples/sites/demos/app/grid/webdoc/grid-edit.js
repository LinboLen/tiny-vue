export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'tiny-first-menu-row-editing',
      'name': { 'zh-CN': '行编辑', 'en-US': 'Line Edit' },
      'desc': {
        'zh-CN':
          "<p>表格属性设置 <code>edit-config</code> 开启编辑模式，然后在该属性对象内设置 <code>mode: 'row'</code> 开启行编辑，即：<code>:edit-config=&quot;{ mode: 'row' }&quot;</code>。</p>\n",
        'en-US':
          "<p>Table attribute setting <code>edit-config</code>Enable the editing mode, and then set <code>mode:'row'</code> in the attribute object to enable row editing, that is, <code>:edit-config=&quot;{mode:'row'}&; </code>. </p>\n"
      },
      'codeFiles': ['tiny-first-menu/row-editing.vue']
    },
    {
      'demoId': 'edit-revertData',
      'name': { 'zh-CN': '还原更改', 'en-US': 'Restore Changes' },
      'desc': {
        'zh-CN':
          '<p>调用方法 <code>revertData(rows, field)</code> 可以还原指定行 row 或者整个表格的数据。rows 为对象则还原一行数据，为数组则还原多行数据，field 可不指定。不指定任何参数时则还原整个表格数据。</p>\n',
        'en-US':
          '<p>Invoke the <code>revertData(rows, field)</code> method to restore the data of a specified row or the entire table. If rows is an object, one row of data is restored. If rows is an array, multiple rows of data are restored. The field is optional. If no parameter is specified, the entire table data is restored. </p>\n'
      },
      'codeFiles': ['edit/revertData.vue']
    },
    {
      'demoId': 'edit-hasRowChange',
      'name': { 'zh-CN': '检查数据是否改变', 'en-US': 'Check whether data is changed.' },
      'desc': {
        'zh-CN': '<p><code>hasRowChange(row, field)</code> 检查行或列数据是否发生改变，field 可不指定。</p>\n',
        'en-US':
          '<p><code>hasRowChange(row, field)</code> Checks whether the row or column data is changed. The field is optional. </p>\n'
      },
      'codeFiles': ['edit/hasRowChange.vue']
    },
    {
      'demoId': 'tiny-first-menu-cell-editing',
      'name': { 'zh-CN': '单元格编辑', 'en-US': 'Cell Edit' },
      'desc': {
        'zh-CN':
          "<p>表格属性设置 <code>edit-config</code> 开启编辑模式，然后在该属性对象内设置 <code>mode: 'cell'</code> 开启行编辑，即：<code>:edit-config=&quot;{ mode: 'cell' }&quot;</code>。\n表格列属性设置 <code>show-icon</code> 设置列头是否显示编辑图标，在编辑时有效。</p>\n",
        'en-US':
          "<p>Table attribute setting <code>edit-config</code>Enable the editing mode, and then set <code>mode:'cell'</code> in the attribute object to enable line editing, that is, <code>:edit-config=&quot;{mode: 'cell'}&; </code>. \nTable Column Attribute Settings<code>show-icon</code> Sets whether to display the editing icon in the column header. This parameter is valid during editing. </p>\n"
      },
      'codeFiles': ['tiny-first-menu/cell-editing.vue']
    },
    {
      'demoId': 'methods-set-active-cell',
      'name': { 'zh-CN': '手动激活编辑', 'en-US': 'Manually Activate Edit' },
      'desc': {
        'zh-CN':
          '<p><code>setActiveCell(row, field)</code> 方法可激活指定单元格编辑。<code>setActiveRow(row)</code> 方法激活行编辑，如果是 mode=cell 则默认激活第一个单元格。</p>\n',
        'en-US':
          'The <p><code>setActiveCell(row, field)</code> method activates editing of the specified cell. The <code>setActiveRow(row)</code> method activates row editing. If mode=cell is used, the first cell is activated by default. </p>\n'
      },
      'codeFiles': ['methods/set-active-cell.vue']
    },
    {
      'demoId': 'tiny-first-menu-format-value',
      'name': { 'zh-CN': '单元格格式化', 'en-US': 'Format Cell' },
      'desc': {
        'zh-CN': '<p>表格列属性 <code>format-value</code> 格式化单元格编辑器组件的传入值。</p>\n',
        'en-US':
          '<p>Table Column Properties <code>format-value</code> Format the input value of the Cell Editor component. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/format-value.vue']
    },
    {
      'demoId': 'tiny-first-menu-custom-editing',
      'name': { 'zh-CN': '自定义编辑规则', 'en-US': 'Custom Editing Rule' },
      'desc': {
        'zh-CN':
          '<p>表格属性设置 <code>edit-config</code> 开启编辑模式，然后在该属性对象内设置 <code>activeMethod</code> 自定义编辑规则。</p>\n',
        'en-US':
          '<p>Table attribute setting<code>edit-config</code>Enable the editing mode, and then set <code>activeMethod</code> custom editing rules in the attribute object. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/custom-editing.vue']
    },
    {
      'demoId': 'tiny-first-menu-editor-is-salid-always',
      'name': { 'zh-CN': '自定义编辑校验规则', 'en-US': 'Customized Editing Verification Rule' },
      'desc': {
        'zh-CN':
          '<p>表格属性设置 <code>edit-config</code> 开启编辑模式，并配置 <code>edit-rules</code> 对象来设置校验对象和校验规则，然后在 <code>editor</code> 对象中设置 <code>isValidAlways</code> 开启编辑实时校验。</p>\n',
        'en-US':
          '<p>Table attribute setting<code>edit-config</code>Enable the editing mode and configure the <code>edit-rules</code> object to set the validation object and validation rule. Set <code>isValidAlways</code> in the <code>editor</code> object to enable real-time editing verification. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/editor-is-salid-always.vue']
    },
    {
      'demoId': 'tiny-first-menu-status-of-editing',
      'name': { 'zh-CN': '开启编辑状态', 'en-US': 'Enable editing' },
      'desc': {
        'zh-CN':
          '<p>表格属性设置 <code>edit-config</code> 开启编辑模式，然后在该属性对象内设置 <code>showStatus</code> 开启或关闭单元格更新状态（单元格左上角倒三角形更新标识)，默认值为 <code>true</code> 开启状态。</p>\n',
        'en-US':
          '<p>Table attribute settings<code>edit-config</code>Enable the editing mode, Set <code>showStatus</code> in the attribute object to enable or disable the cell update status (inverted triangle update flag in the upper left corner of the cell). The default value is <code>true</code>. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/status-of-editing.vue']
    },
    {
      'demoId': 'tiny-first-menu-status-of-noediting',
      'name': { 'zh-CN': '关闭编辑状态', 'en-US': 'Disable editing' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tiny-first-menu/status-of-noediting.vue']
    },
    {
      'demoId': 'tiny-first-menu-trigger-mode-for-editing',
      'name': { 'zh-CN': '点击触发编辑', 'en-US': 'Click to trigger editing' },
      'desc': {
        'zh-CN':
          '<p>表格属性设置 <code>edit-config</code> 开启编辑模式，然后在该属性对象内设置 <code>trigger</code> 修改触发方式。可选值有 <code>点击触发（click）/ 双击触发（dblclick）/ 手动触发（manual）</code>，默认值为 <code>click 点击触发</code>。</p>\n',
        'en-US':
          '<p>Table attribute setting<code>edit-config</code>Enable the editing mode, and then set <code>trigger</code> in the attribute object to modify the triggering mode. The options are as follows: <code>click trigger (click), double-click trigger (dblclick), and manual trigger (manual)</code>. The default value is <code>click trigger</code>. </p>\n'
      },
      'codeFiles': ['tiny-first-menu/trigger-mode-for-editing.vue']
    },
    {
      'demoId': 'tiny-first-menu-trigger-mode-db-editing',
      'name': { 'zh-CN': '双击触发编辑', 'en-US': 'Double-click to trigger editing' },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['tiny-first-menu/trigger-mode-db-editing.vue']
    },
    {
      'demoId': 'tiny-first-menu-trigger-mode-hm-editing',
      'name': { 'zh-CN': '手动触发编辑', 'en-US': 'Manually triggered editing' },
      'desc': {
        'zh-CN':
          '在点击其他行或表格外部时，编辑器会自动关闭。设置 <code>editConfig.autoClear</code> 为 <code>false</code> 可以防止编辑器自动关闭',
        'en-US': 'For details, see the following example.'
      },
      'codeFiles': ['tiny-first-menu/trigger-mode-hm-editing.vue']
    }
  ],
  apis: [{ 'name': 'grid-edit', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
