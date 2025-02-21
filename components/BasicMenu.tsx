import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

interface MenuItemType {
  label: string;
  link: string;
}

interface BasicMenuProps {
  buttonName: string;
  menuItems: MenuItemType[];
}

export default function BasicMenu({
  buttonName,
  menuItems,
}: BasicMenuProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="dynamic-button"
        aria-controls={open ? "dynamic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ fontSize: "18px", color: "#fd7800", fontWeight: "bold" }}
        // startIcon={<MenuIcon />}
      >
        {buttonName}
      </Button>
      <Menu
        id="dynamic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        MenuListProps={{
          "aria-labelledby": "dynamic-button",
        }}
      >
        {menuItems.map((item, index) => (
          <Link href={item.link} key={index}>
            <MenuItem onClick={handleClose}>
              {item.label}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
