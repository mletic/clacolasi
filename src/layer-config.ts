import {LayerCreationProps} from '@unfolded/map-sdk';

export const getLayerConfig: LayerCreationProps = (label: string, dataId: string) => {
  return {
    type: 'grid',
    label: label,
    dataId: dataId,
    fields: {
      lat: 'mesto_latitude',
      lng: 'mesto_longitude'
    },
    isVisible: true,
    config: {
      visConfig: {
        opacity: 0.8,
        worldUnitSize: 9.7403,
        colorRange: {
          name: 'Global Warming',
          type: 'sequential',
          category: 'Uber',
          colors: ['#FFC300', '#EF9100', '#D6610A', '#B72F15', '#880030', '#4C0035'],
          reversed: true
        },
        coverage: 1,
        sizeRange: [0, 850.88],
        percentile: [0, 100],
        elevationPercentile: [0, 100],
        elevationScale: 6.5,
        enableElevationZoomFactor: true,
        fixedHeight: false,
        colorAggregation: 'average',
        sizeAggregation: 'average',
        enable3d: true
      },
      visualChannels: {
        colorField: {
          type: 'integer',
          name: 'judgment'
        },
        colorScale: 'quantile',
        sizeField: {
          type: 'integer',
          name: 'judgment'
        },
        sizeScale: 'linear'
      }
    }
  };
};
