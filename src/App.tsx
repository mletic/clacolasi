import {FC, useCallback, useEffect, useRef, useState} from 'react';
import {createMap, Layer, MapApi} from '@foursquare/map-sdk';

import {SampleDataItem, fetchSampleData} from './sample-data';
import {Menu} from './Menu';
import {getLayerConfig} from './layer-config';
import {ChartContainer} from './charts/chart-container';

const FILE_NAMES = [
  'data-try-inf',
  'data-try-dpc',
  'data-decide-inf',
  'data-decide-dpc',
  'data-denotic-inf',
  'data-denotic-dpc',
  'data-epistemic-inf',
  'data-epistemic-dpc',
  'data-circumstantial-inf',
  'data-circumstantial-dpc',
  'data-begin-inf',
  'data-begin-dpc',
  'data-stop-inf',
  'data-stop-dpc'
];

export const App: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<MapApi | null>(null);
  const [loading, setLoading] = useState(false);
  const [sampleData, setSampleData] = useState<SampleDataItem[][]>([]);
  const [visibleLayers, setVisibleLayers] = useState<Layer[]>([]);

  useEffect(() => {
    const initMap = async () => {
      if (containerRef.current) {
        const map = await createMap({
          container: containerRef.current,
          basemaps: {initialMapStyleId: 'light'},
          apiKey: 'fsq3umOBhxg0pTMVWKOWTDonmgFPVSKPSE6LqzYBjP/9e6A='
        });
        setMap(map);
      }
    };

    initMap();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const dataResults = await Promise.all(FILE_NAMES.map(fetchSampleData));
        setSampleData(dataResults);
      } catch (error) {
        console.error('Failed to load data', error);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (map && sampleData.length > 0) {
      sampleData.forEach((data) => {
        map.addDataset(data[0], {autoCreateLayers: false});
      });

      map.setView({
        latitude: 44.0572,
        longitude: 18.0232,
        pitch: 42.45,
        zoom: 6.81,
        bearing: -7.21
      });
      map.setViewMode('3d');
    }
  }, [map, sampleData]);

  const handleLoadData = useCallback(
    (files: string[]) => {
      if (map) {
        // Remove existing layers
        visibleLayers.forEach((layer) => map.removeLayer(layer.id));
        const newLayers = files.map((file) => {
          const layerConfig = getLayerConfig(file, file);
          return map.addLayer(layerConfig);
        });
        setVisibleLayers(newLayers);
        if (newLayers.length > 1) {
          map.setSplitMode('swipe', {
            layers: [[newLayers[0].id], [newLayers[1].id]],
            isViewSynced: true,
            isZoomSynced: true
          });
        }
      }
    },
    [map, visibleLayers]
  );

  return (
    <>
      <div id="map-container" ref={containerRef} />
      {map && !loading && (
        <>
          <Menu onButtonClick={handleLoadData} />
          <ChartContainer />
        </>
      )}
    </>
  );
};
