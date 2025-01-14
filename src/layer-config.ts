import {LayerCreationProps} from '@foursquare/map-sdk';

export const getLayerConfig = (label: string, dataId: string): LayerCreationProps => {
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
          name: 'RdYlGn',
          type: 'diverging',
          category: 'ColorBrewer',
          colors: ['#A50026', '#F16E43', '#FEDD8D', '#D7EE8E', '#64BC61', '#006837'],
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
