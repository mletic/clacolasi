import {FC, useEffect, useMemo, useRef, useState} from 'react';
import {createMap, MapApi} from '@unfolded/map-sdk';

import {SampleDataItem, fetchSampleData} from './sample-data';
import {Menu} from './Menu';
import {getLayerConfig} from './layer-config';

export const App: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<MapApi | null>(null);
  const [sampleDataLeft, setSampleDataLeft] = useState<[SampleDataItem] | null>(null);
  const [sampleDataRight, setSampleDataRight] = useState<[SampleDataItem] | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setSampleDataLeft(await fetchSampleData('data-try-inf'));
      setSampleDataRight(await fetchSampleData('data-try-dpc'));
    };

    const initMap = async () => {
      const map = await createMap({
        container: containerRef.current!,
        basemaps: {
          initialMapStyleId: 'light'
        }
      });
      setMap(map);
    };

    initMap();
    loadData();
  }, []);

  useEffect(() => {
    if (
      map &&
      sampleDataLeft &&
      sampleDataRight &&
      sampleDataLeft.length > 0 &&
      sampleDataRight.length > 0
    ) {
      map.addDataset(sampleDataLeft[0], {autoCreateLayers: false});
      map.addDataset(sampleDataRight[0], {autoCreateLayers: false});

      map.setView({
        latitude: 44.0572155,
        longitude: 18.0231654,
        pitch: 42.450331125827816,
        zoom: 6.811646295006886,
        bearing: -7.213235294117645
      });

      map.setViewMode('3d');

      //map.setMapConfig(mapConfig);
    }
  }, [map, sampleDataLeft, sampleDataRight]);

  const handlers = useMemo(() => {
    if (!sampleDataLeft && !sampleDataRight) {
      console.log('Data not yet loaded.');
      return null;
    }

    if (!map) {
      console.log('Map not yet initialized.');
      return null;
    }

    return {
      loadData: (files: string[]) => {
        console.log(files);
        for (const file of files) {
          const layerConfig = getLayerConfig(file, file);
          console.log(layerConfig);
          map.addLayer(layerConfig);
        }
        const layers = map.getLayers();
        console.log('layers', layers);

        const currentMapConfig = map.getMapConfig();
        console.log(currentMapConfig);

        map.setSplitMode('swipe', {
          layers: [[layers[0].id], [layers[1].id]],
          isViewSynced: true,
          isZoomSynced: true
        });

        // map.setMapConfig({
        //   ...(currentMapConfig as any).config,
        //   visState: {
        //     ...(currentMapConfig as any).config.visState,
        //     layers: [
        //       {
        //         ...layers[0],
        //         isVisible: true
        //       },
        //       {
        //         ...layers[1],
        //         isVisible: true
        //       }
        //     ],
        //     splitMaps: [
        //       {
        //         layers: {
        //           [layers[0].id]: true,
        //           [layers[1].id]: false
        //         }
        //       },
        //       {
        //         layers: {
        //           [layers[0].id]: false,
        //           [layers[1].id]: true
        //         }
        //       }
        //     ]
        //   }
        // });

        // console.log(map.getMapConfig());
      }
    };
  }, [map, sampleDataLeft, sampleDataRight]);

  return (
    <>
      <div id="map-container" ref={containerRef}></div>
      {!!handlers && <Menu onButtonClick={handlers.loadData} />}
      {/* {!!handlers && (
        <div className="controls">
          <button onClick={handlers.addEffectLightShadow}>Light and Shadow</button>
          <button onClick={handlers.addEffectHexagonalPixelate}>Hexagonal Pixelate</button>
          <button onClick={handlers.addEffectHueSaturation}>Hue and Saturation</button>
        </div>
      )} */}
    </>
  );
};
