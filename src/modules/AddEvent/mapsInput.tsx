import React, { createRef, useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Loader } from '@googlemaps/js-api-loader';
import { Button, List } from 'antd';
import Input from '../../components/input';

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <p>{'<Spinner />'}</p>;
    case Status.FAILURE:
      return <p>{'<ErrorComponent />'}</p>;
    case Status.SUCCESS:
      return <MyMapComponent center={{ lat: 1, lng: 2 }} zoom={1} />;
    default:
      return <MyMapComponent center={{ lat: 1, lng: 2 }} zoom={1} />;
  }
};

const MyMapComponent = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral
  zoom: number
}) => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    new window.google.maps.Map(ref.current!, { // eslint-disable-line no-new
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
};

const MapsInput = () => {
  const [autocompleteService,
    setAutocompleteService] = useState<google.maps.places.AutocompleteService>();
  const [locationService, setLocationService] = useState<google.maps.places.PlacesService>();
  const [place, setPlace] = useState('');
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>();
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyCV5zbKUfBZ-SwJ60oASNX-j2YiHMC0HG8',
      libraries: ['places'],
    });
    loader.loadCallback((e) => {
      if (e?.error !== undefined) {
        console.error(e);
      } else {
        const mapTemp = new window.google.maps.Map(mapRef.current!, {});
        mapTemp.setOptions({ zoom: 7 });
        setAutocompleteService(new window.google.maps.places.AutocompleteService());
        setMap(mapTemp);
        setLocationService(new google.maps.places.PlacesService(mapTemp));
      }
    });
  }, []);

  // console.log(autocomplete);
  useEffect(() => {
    if (autocompleteService !== undefined) {
      autocompleteService.getPlacePredictions({ input: place })
        .then((ew) => {
          console.log(ew.predictions.filter((item) => item.description === place).length);
          const exactMatch = ew.predictions.filter((item) => item.description === place);
          if (exactMatch.length) {
            setPredictions([]);
            locationService?.getDetails(
              { placeId: exactMatch[0].place_id },
              (plc, status) => {
                const locatin = plc!.geometry!.location!;
                map?.setCenter(locatin);
                setMarker(new google.maps.Marker({
                  position: locatin,
                  map: map,
                }));
              }
            );
            // map?.setCenter(exactMatch[0].place_id);
            return;
          }
          setPredictions(ew.predictions);
          // if (ew.predictions.filter(item => item.description == place)) {
          // }
        })
        .catch(() => {});
    }
  }, [place]);

  console.log(predictions);

  return (
    <>
      <Input type="text" value={place} onInput={(e) => setPlace(e.currentTarget.value)} />
      {predictions?.length ?
          (
            <List
              dataSource={predictions.filter((item) => item.description !== place)}
              renderItem={(item) => (
                <Button type="link" onClick={() => setPlace(item.description)}>
                  {item.description.slice(0, 40)}
                  {item.description.length > 40 ? '...' : ''}
                </Button>
              )}
              size="small"
              // bordered
            />
          )
        : null}
      <div className="mapDisplay">
        <div ref={mapRef} className="mt-2" style={{ height: place && !predictions?.length ? '10em' : 0 }} />
      </div>
    </>
  );
};

export default MapsInput;
