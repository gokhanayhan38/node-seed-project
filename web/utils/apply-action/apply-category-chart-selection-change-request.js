"use strict";

function applyCategoryChartSelectionChangeRequest(action /*: ActionDef */, appState /*: AppState */) /*: AppState */ {
    const {categoryChartName /*: string */, newSelection /*: Array<string> */} = action,
        visibleViewState = appState.getVisibleViewState(),
        categoryChartState = visibleViewState.getCategoryChartState(categoryChartName),
        categoryFieldName = categoryChartState.getCategoryFieldName();

    const selectedCategoryChartStates = visibleViewState.getCategoryChartStates().filter(categoryChartState => {
        return categoryChartState.getCategoryFieldName() == categoryFieldName;
    });

    const newSelectedCategoryChartStates = selectedCategoryChartStates.map(ccs => {
        return ccs.setSelection(newSelection);
    });

    const newVisibleViewState = newSelectedCategoryChartStates.reduce((memo, ccs) => {
        return memo.setCategoryChartState(ccs.getName(), ccs);
    }, visibleViewState);

    return appState.setViewState(visibleViewState.getName(), newVisibleViewState);
}

module.exports = applyCategoryChartSelectionChangeRequest;
