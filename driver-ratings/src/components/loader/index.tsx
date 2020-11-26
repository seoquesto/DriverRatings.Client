import React, { FC, memo } from "react";

interface Props {
  type?: "primary" | "success" | "danger" | "warning" | "info";
}

const _Loader: FC<Props> = (props: Props = { type: "primary" }) => {
  return (
    <div className={`spinner-border text-${props.type}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const Loader = memo(_Loader);
