import Link from "next/link";
import { ListBox } from "@heroui/react";

interface MenuItems {
  key: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface RenderListBoxProps {
  items: MenuItems[];
  label: string;
  pathname: string;
}

const RenderListBox = ({ items, label, pathname }: RenderListBoxProps) => (
  <ListBox
    aria-label={label}
    className="p-0 gap-1"
    selectionMode="single"
    selectedKeys={[pathname]}
  >
    {items.map((item) => (
      <ListBox.Item
        key={item.href}
        id={item.href}
        textValue={item.label}
        className={`group  h-12 px-0 rounded-medium transition-slot ${
          pathname === item.href
            ? "bg-primary/10 text-primary"
            : "text-default-600"
        }`}
      >
        <Link href={item.href}>
          <div className="flex items-center gap-3 w-full h-full px-4">
            <span className="text-xl group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="font-medium">{item.label}</span>
          </div>
        </Link>

        {/* <Link href="/projects">projects</Link> */}
      </ListBox.Item>
    ))}
  </ListBox>
);

export default RenderListBox;
