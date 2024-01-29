import { useSearchParams } from "react-router-dom";

export function useURLPostion() {
  const [searchParamas] = useSearchParams();
  const lat = searchParamas.get("lat");
  const lng = searchParamas.get("lng");
  return [lat, lng];
}
