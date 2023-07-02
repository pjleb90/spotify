'use client';

import { useRouter } from "next/navigation";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className,
}) => {
  const router = useRouter();

  const handleLogout = () => {
    //  handle logout
  }
    return (
        <div>Header</div>
      );
}

export default Header;