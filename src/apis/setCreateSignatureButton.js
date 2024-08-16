import actions from 'actions';

/**
 * Sets the current active toolbar group.
 * @method UI.setCreateSignatureButton
 * @param {boolean} [signatureButton] If true, after setting the toolbar group, the last picked tool for the group will be set as the current tool. Defaults to true.
 * @example
WebViewer(...)
  .then(function(instance) {
    // Change the toolbar group to the `Shapes` group
    instance.UI.setToolbarGroup('toolbarGroup-Shapes');
 */

export default store => signatureButton => {
  store.dispatch(actions.setSignatureButton(signatureButton));
};
