import dynamic from "next/dynamic";

const CanvasPage = dynamic(() => import("@/components/CanvasPage"), {
  ssr: false,
});

export default function Page() {
  return <CanvasPage />;
}
