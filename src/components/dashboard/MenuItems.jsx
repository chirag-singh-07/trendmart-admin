import { SidebarMenuItems } from "@/utils";
import { useNavigate } from "react-router-dom";

const MenuItems = ({ setOpen }) => {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {SidebarMenuItems.map((menuItem) => (
        <div
          className="flex text-lg font-semibold cursor-pointer items-center gap-2 rounded-md px-5 py-4 text-muted-foreground hover:bg-muted hover:text-foreground"
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
        >
          <menuItem.icon />
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default MenuItems;
