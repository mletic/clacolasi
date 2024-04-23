import {FC, useEffect, useMemo, useRef, useState} from 'react';
import {createMap, MapApi} from '@unfolded/map-sdk';
import {SampleDataItem, fetchSampleData} from './sample-data';
import { mapConfig } from './map-config';

export const App: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<MapApi | null>(null);
  const [sampleData, setSampleData] = useState<[SampleDataItem] | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setSampleData(await fetchSampleData());
    };

    const initMap = async () => {
      const map = await createMap({
        container: containerRef.current!
      });
      setMap(map);
    };

    initMap();
    loadData();
  }, []);

  useEffect(() => {
    if (map && sampleData && sampleData.length > 0) {
      
      map.addDataset(sampleData[0], {autoCreateLayers: false});
      map.addLayer({
        type: 'grid',
        label: 'Try Inf Data',
        dataId: 'data-try-inf',
        fields: {
          lat: 'mesto_latitude',
          lng: 'mesto_longitude'
        },
        isVisible: true,
        config: {
          "visConfig": {
            "opacity": 0.8,
            "worldUnitSize": 9.7403,
            "colorRange": {
              "name": "Global Warming",
              "type": "sequential",
              "category": "Uber",
              "colors": [
                "#FFC300",
                "#EF9100",
                "#D6610A",
                "#B72F15",
                "#880030",
                "#4C0035"
              ],
              "reversed": true
            },
            "coverage": 1,
            "sizeRange": [
              0,
              850.88
            ],
            "percentile": [
              0,
              100
            ],
            "elevationPercentile": [
              0,
              100
            ],
            "elevationScale": 6.5,
            "enableElevationZoomFactor": true,
            "fixedHeight": false,
            "colorAggregation": "average",
            "sizeAggregation": "average",
            "enable3d": true
          },
          "visualChannels": {
            "colorField": {
              "type": "integer",
              "name": "judgment"
            },
            "colorScale": "quantile",
            "sizeField": {
              "type": "integer",
              "name": "judgment"
            },
            "sizeScale": "linear"
          }
        }
      });
      map.setMapConfig({
        "mapState": {
          "bearing": -7.213235294117645,
          "dragRotate": true,
          "latitude": 44.0572155,
          "longitude": 18.0231654,
          "pitch": 42.450331125827816,
          "zoom": 6.811646295006886,
          "isSplit": true,
          "isViewportSynced": true,
          "isZoomLocked": false,
          "splitMapViewports": [],
          "mapViewMode": "MODE_3D",
          "mapSplitMode": "SWIPE_COMPARE",
          "globe": {
            "enabled": false,
            "config": {
              "atmosphere": true,
              "azimuth": false,
              "azimuthAngle": 45,
              "terminator": true,
              "terminatorOpacity": 0.35,
              "basemap": true,
              "labels": false,
              "labelsColor": [
                132,
                138,
                138
              ],
              "adminLines": true,
              "adminLinesColor": [
                203,
                205,
                207
              ],
              "water": true,
              "waterColor": [
                219,
                226,
                230
              ],
              "surface": true,
              "surfaceColor": [
                235,
                240,
                240
              ]
            }
          }
        },
        "mapStyle": {
          "styleType": "light",
          "topLayerGroups": {},
          "visibleLayerGroups": {
            "label": false,
            "road": true,
            "border": true,
            "building": true,
            "water": true,
            "land": true,
            "3d building": false
          },
          "threeDBuildingColor": [
            218.82023004728688,
            223.47597962276103,
            223.47597962276103
          ],
          "backgroundColor": [
            255,
            255,
            255
          ],
          "mapStyles": {}
        },
      });
      map.setView({
        latitude: 36.7045671093519,
        longitude: -122.47582941779496,
        zoom: 5.920306814575524
      });
    }
  }, [map, sampleData]);

  const handlers = useMemo(() => {
    if (!sampleData) {
      console.log('Data not yet loaded.');
      return null;
    }

    if (!map) {
      console.log('Map not yet initialized.');
      return null;
    }

    return {
      addEffectLightShadow: () => {
        map.addEffect({
          type: 'light-and-shadow',
          parameters: {
            timeMode: 'pick',
            timestamp: 1695250260000
          }
        });
      },
      addEffectHexagonalPixelate: () => {
        map.addEffect({
          type: 'hexagonal-pixelate',
          parameters: {
            scale: 8.5
          }
        });
      },
      addEffectHueSaturation: () => {
        map.addEffect({
          type: 'hue-saturation',
          parameters: {
            hue: 0.6,
            saturation: 0.4
          }
        });
      }
    };
  }, [map, sampleData]);

  return (
    <>
      <div id="map-container" ref={containerRef}></div>
      {!!handlers && (
        <div className="controls">
          {/* Buttons for various effect operations */}
          <button onClick={handlers.addEffectLightShadow}>Light and Shadow</button>
          <button onClick={handlers.addEffectHexagonalPixelate}>Hexagonal Pixelate</button>
          <button onClick={handlers.addEffectHueSaturation}>Hue and Saturation</button>
        </div>
      )}
    </>
  );
};
