import { chatGPTSignOutPath, requireChatGPTUser } from "../chatgpt-auth";
import TurnUpApp from "./turn-up-app";

export const dynamic = "force-dynamic";

export default async function AppPage() {
  const user = await requireChatGPTUser("/app");

  return <TurnUpApp user={user} signOutPath={chatGPTSignOutPath("/")} />;
}
