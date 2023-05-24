"use strict";
const vscode = require("vscode");
const { generateMessage } = require("./motivationMessages");

function activate(context) {
  const disposable = vscode.workspace.onDidSaveTextDocument(() => {
    if (!this._statusBarItem) {
      this._statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left
      );
      this._statusBarItem.text = generateMessage();
    } else {
      this._statusBarItem.text = generateMessage();
    }
    return this._statusBarItem.show();
  });

  context.subscriptions.push(disposable);
}
exports.activate = activate;
