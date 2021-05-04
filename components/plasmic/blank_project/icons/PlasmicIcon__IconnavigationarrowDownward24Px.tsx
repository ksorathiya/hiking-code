// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconnavigationarrowDownward24PxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconnavigationarrowDownward24PxIcon(
  props: IconnavigationarrowDownward24PxIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M16 16l-1.41-1.41L9 20.17V0H7v20.17l-5.58-5.59L0 16l8 8 8-8z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconnavigationarrowDownward24PxIcon;
/* prettier-ignore-end */
