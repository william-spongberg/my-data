import DragAndDrop from "../../islands/DragAndDrop.tsx";
import Platform from "../../islands/Platform.tsx";
import InstagramAnalytics from "../../islands/InstagramAnalytics.tsx";

export default function TikTok() {
  return (
    <Platform title={"Instagram Analytics"}>
      <DragAndDrop />
      <InstagramAnalytics />
    </Platform>
  );
}
