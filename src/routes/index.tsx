import { Box, Link, Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<Box
			component="header"
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				gap: 2,
				alignItems: "center",
				justifyContent: "center",
				fontSize: "calc(10px + 2vmin)",
				"& img": {
					height: "40vmin",
					pointerEvents: "none",
					animation: "spin 20s linear infinite",
				},
				"@keyframes spin": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			}}
		>
			<Box component="img" src={logo} alt="logo" />

			<Typography component="p">
				Edit <Box component="code">src/routes/index.tsx</Box> and save to
				reload.
			</Typography>

			<Box sx={{ display: "flex", gap: 2 }}>
				<Link
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					underline="hover"
					sx={{ color: "#61dafb" }}
				>
					Learn React
				</Link>

				<Link
					href="https://tanstack.com"
					target="_blank"
					rel="noopener noreferrer"
					underline="hover"
					sx={{ color: "#61dafb" }}
				>
					Learn TanStack
				</Link>
			</Box>
		</Box>
	);
}
