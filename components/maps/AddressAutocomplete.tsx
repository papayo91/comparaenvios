"use client";

import { useEffect, useRef, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

export type AddressResult = {
  placeId: string;
  formattedAddress: string;
  lat: number;
  lng: number;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
};

type Props = {
  value?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onPlaceSelect?: (place: AddressResult) => void;
};

type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

export default function AddressAutocomplete({
  value = "",
  placeholder = "Buscar dirección",
  className = "w-full border rounded p-3",
  disabled = false,
  onPlaceSelect,
}: Props) {
  const places = useMapsLibrary("places");

  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const autocomplete = new places.Autocomplete(inputRef.current, {
      fields: [
        "name",
        "place_id",
        "formatted_address",
        "geometry",
        "address_components",
      ],
      componentRestrictions: {
        country: "co",
      },
    });

    // Priorizar Bucaramanga y área metropolitana
    autocomplete.setBounds({
      north: 7.25,
      south: 7.00,
      east: -73.00,
      west: -73.25,
    });

    autocomplete.setOptions({
      strictBounds: false,
    });

    const listener = autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (
        !place.place_id ||
        !place.formatted_address ||
        !place.geometry?.location
      ) {
        return;
      }

      const components = (place.address_components ??
        []) as AddressComponent[];

      const get = (type: string): string | undefined => {
        return components.find((component) =>
          component.types.includes(type)
        )?.long_name;
      };

      // Limpia el texto para que no salga tan largo
      const cleanAddress = place.formatted_address
        .replace(", Santander, Colombia", "")
        .replace(", Colombia", "");

      // Si el lugar tiene nombre (ej: Estadio Américo Montanini)
      // lo mostramos junto con la dirección.
      const displayAddress =
        place.name &&
        place.name.trim() !== "" &&
        place.name.toLowerCase() !== cleanAddress.toLowerCase()
          ? `${place.name} - ${cleanAddress}`
          : cleanAddress;

      const result: AddressResult = {
        placeId: place.place_id,
        formattedAddress: displayAddress,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        city: get("locality") ?? get("administrative_area_level_2"),
        state: get("administrative_area_level_1"),
        country: get("country"),
        postalCode: get("postal_code"),
      };

      setText(displayAddress);

      onPlaceSelect?.(result);
    });

    return () => {
      listener.remove();
    };
  }, [places, onPlaceSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete="off"
      className={className}
    />
  );
}