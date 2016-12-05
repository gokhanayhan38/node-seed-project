"use strict";

//TODO değiştir kendine göre zaten app stateim ve view state im tamamen boş durumda
function adjustAppState(appState /*: AppState */) {
    const visibleViewState = appState.getVisibleViewState(),
        timeGraphStates = visibleViewState.getTimeGraphStates(),
        newTimeGraphStates = timeGraphStates.map(tgs => {
            const [startIsoDate, endIsoDate] = tgs.getRangeSelection();

            if (startIsoDate !== endIsoDate) {
                const numOfSpannedMins = (new Date(endIsoDate).getTime() - new Date(startIsoDate).getTime()) / 60000,
                    numOfSpannedBins = Math.ceil(numOfSpannedMins / tgs.getBinToMin()),
                    newBucketToBin = Math.ceil(numOfSpannedBins / appState.getTimeGraphSvgWidth());

                return tgs.setBucketToBin(newBucketToBin);
            }
            else {
                return tgs;
            }
        }),
        geoMapStates = visibleViewState.getGeoMapStates(),
        newGeoMapStates = geoMapStates.map(gms => {
            return gms.setZoom(undefined).setCenter(undefined).setTiles([]);
        }),
        newVisibleViewState = visibleViewState.setTimeGraphStates(newTimeGraphStates).setGeoMapStates(newGeoMapStates);

    return appState.setViewState(visibleViewState.getName(), newVisibleViewState);
}

module.exports = adjustAppState;