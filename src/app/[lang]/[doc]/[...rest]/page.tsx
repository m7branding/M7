import { notFound } from "next/navigation";

/** Vangt diepere onbekende paden op (bv. /iets/dat/niet/bestaat), zodat de M7-404 in de layout verschijnt. */
export default function Rest() {
  notFound();
}
