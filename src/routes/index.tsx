import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/")({ component: App });

function App() {
	const navigate = useNavigate({ from: "/" });

	const [newUsername, setNewUsername] = useState("");

	const handleJoinChat = (e: React.FormEvent) => {
		e.preventDefault();
		if (!newUsername.trim()) return;
		navigate({ to: "/chat", search: { room: "M1M1", username: newUsername } });
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
			<section className="relative py-20 px-6 min-h-screen text-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
				<div className="relative max-w-5xl mx-auto">
					<div className="flex items-center justify-center gap-6 mb-6">
						{/* <img
							src="/tanstack-circle-logo.png"
							alt="TanStack Logo"
							className="w-24 h-24 md:w-32 md:h-32"
						/> */}
						<h1 className="text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]">
							<span className="text-gray-300">This is</span>{" "}
							<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
								MIMI
							</span>
						</h1>
					</div>
					<p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
						~ Moderation In Messaging Interface ~
					</p>
					<p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
						Join the chat!
					</p>
					<form
						onSubmit={handleJoinChat}
						className="flex items-center justify-center gap-2 p-4"
					>
						<div className="text-2xl text-gray-300 mb-1">Your name:</div>
						<Input
							className="rounded-md text-center bg-background font-black md:text-3xl h-12 w-1/4 transition-all duration-300"
							type="text"
							value={newUsername}
							autoFocus
							onChange={(e) => setNewUsername(e.target.value)}
						/>
						<Button
							className="px-8 py-3 h-12 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
							type="submit"
							disabled={!newUsername.trim()}
						>
							ENTER
						</Button>
					</form>
				</div>
			</section>
		</div>
	);
}
