import React, { FunctionComponent } from 'react';

export interface CragProps {
  name: string;
  lat: number;
  lon: number;
}

const Crag: FunctionComponent<CragProps> = ({name, lat, lon}) => {
  return <p>{name} - {lat} - {lon}</p>;
};

export default Crag;