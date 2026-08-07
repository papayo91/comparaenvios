"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GoogleMapsProvider({ children }: Props) {
  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={["places"]}
    >
      {children}
    </APIProvider>
  );
}