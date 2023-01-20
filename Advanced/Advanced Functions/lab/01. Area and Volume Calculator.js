function areaVolumeCalc(area, vol, dataAsJSON) {

    const figures = JSON.parse(dataAsJSON);

    const result = figures.map(figure => ({

        area: Math.abs(area.call(figure)),

        volume: Math.abs(vol.apply(figure))

    }));

    return result;

}
