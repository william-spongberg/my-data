import DragAndDrop from "../../islands/DragAndDrop.tsx";
import Platform from "../../islands/Platform.tsx";
import TikTokAnalytics from "../../islands/TikTokAnalytics.tsx";

export default function TikTok() {
  return (
    <Platform title={"TikTok Analytics"}>
      <TikTokAnalytics />
    </Platform>
  );
}
