import Logo from "@/custom/ui/Logo";
import { Button, Avatar } from "@heroui/react";

const Header = () => {
  return (
    <header className="h-16 border-b border-divider bg-background/70 backdrop-blur-md sticky top-0 z-40 w-full px-6 flex justify-between items-center">
      <Logo />

      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Button
              size="sm"
              variant="primary"
              // color="danger"
              className="font-medium"
            >
              Log out
            </Button>
          </li>

          <div className="flex items-center gap-3 border-l pl-4 border-divider">
            <div className=" flex-col items-end hidden sm:flex">
              <span className="text-tiny font-bold">Ahmed Raaft</span>
              <span className="text-[10px] text-default-400">Developer</span>
            </div>
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
