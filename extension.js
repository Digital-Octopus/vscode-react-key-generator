const vscode = require('vscode'); // eslint-disable-line
const shortId = require('shortid'); // eslint-disable-line

function insertKey(withAttribute = false) {
  const activeEditor = vscode.window.activeTextEditor;

  if (activeEditor) {
    activeEditor.edit((editor) => {
      activeEditor.selections.forEach((selection) => {
        const key = withAttribute ? `key="${shortId.generate()}"` : shortId.generate();

        editor.delete(selection);
        editor.insert(selection.start, key);
      });
    });
  }
}

function activate(context) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.insertKey', insertKey));
  context.subscriptions.push(vscode.commands.registerCommand('extension.insertKeyWithAttribute', () => { insertKey(true); }));
}


exports.activate = activate;
