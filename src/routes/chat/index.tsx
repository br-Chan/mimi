import { createFileRoute } from "@tanstack/react-router";
import { RealtimeChat } from "@/components/realtime-chat";

type ChatSearch = {
	room: string;
	username: string;
};

export const Route = createFileRoute("/chat/")({
	component: Chat,
	validateSearch: (search: Record<string, unknown>): ChatSearch => {
		return {
			room: (search.room as string) ?? undefined,
			username: (search.username as string) ?? undefined,
		};
	},
});

function Chat() {
	const { room, username } = Route.useSearch();
	return <RealtimeChat roomName={room} username={username} />;
}
