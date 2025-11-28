import {
	AppBar,
	Box,
	Drawer,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Link } from "@tanstack/react-router";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	return (
		<>
			<AppBar position="static" elevation={6}>
				<Toolbar sx={{ minHeight: 64, display: "flex", alignItems: "center" }}>
					<IconButton
						aria-label="Open menu"
						color="inherit"
						onClick={toggleDrawer(true)}
						sx={{
							p: 1,
							borderRadius: "0.5rem",
						}}
					>
						<Menu size={24} />
					</IconButton>

					<Box
						component="div"
						sx={{ ml: 2, display: "flex", alignItems: "center" }}
					>
						<Typography
							variant="h1"
							sx={{ fontWeight: 600, fontSize: "1.5rem" }}
						>
							<Link to="/">Mimi logo</Link>
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>

			<Drawer open={open} onClose={toggleDrawer(false)}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						px: 2,
						py: 1.5,
						borderBottom: "1px solid #374151", // tailwind border-gray-700
					}}
				>
					<Typography variant="h6" sx={{ fontWeight: 700 }}>
						Navigation
					</Typography>

					<IconButton
						onClick={toggleDrawer(false)}
						aria-label="Close menu"
						color="inherit"
						sx={{
							p: 1,
							borderRadius: "0.5rem",
							transition: "background-color 200ms",
						}}
					>
						<X size={24} />
					</IconButton>
				</Box>

				<Box component="nav" sx={{ flex: 1, p: 2, overflowY: "auto" }}>
					<List sx={{ p: 0 }}>
						<ListItemButton
							component={Link}
							to="/"
							onClick={toggleDrawer(false)}
							sx={{
								borderRadius: "0.5rem",
								mb: 1,
								px: 1.25,
								py: 1,
							}}
						>
							<ListItemIcon sx={{ minWidth: 36 }}>
								<Home size={20} />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItemButton>

						{/* Demo Links Start */}

						{/* Demo Links End */}
					</List>
				</Box>
			</Drawer>
		</>
	);
}
