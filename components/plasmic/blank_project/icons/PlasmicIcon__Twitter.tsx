// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterIcon(props: TwitterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        d={
          "M22.46 6.012a8.58 8.58 0 01-2.466.676 4.305 4.305 0 001.887-2.374 8.591 8.591 0 01-2.725 1.041 4.292 4.292 0 00-7.313 3.914 12.184 12.184 0 01-8.846-4.483 4.271 4.271 0 00-.581 2.157 4.29 4.29 0 001.91 3.572 4.276 4.276 0 01-1.945-.537v.054c0 2.08 1.48 3.814 3.443 4.209a4.296 4.296 0 01-1.939.073 4.296 4.296 0 004.01 2.98 8.61 8.61 0 01-5.33 1.838c-.347 0-.688-.02-1.024-.06A12.147 12.147 0 008.12 21c7.893 0 12.21-6.54 12.21-12.21 0-.187-.004-.372-.012-.556a8.719 8.719 0 002.141-2.222z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterIcon;
/* prettier-ignore-end */
