import React from "react";
import { useParams } from "react-router";

export default function Booking() {
  const { bookingId } = useParams();
  return <div>This is booking number {bookingId}</div>;
}
