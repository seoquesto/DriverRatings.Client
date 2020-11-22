import React from "react";
import { FC, memo } from "react";
import { useParams } from "react-router-dom";

const _LicensePlateProfile: FC = (props) => {
  let { plate } = useParams<{plate: string}>();
  return <div>{plate}</div>;
};

export const LicensePlateProfile = memo(_LicensePlateProfile);
