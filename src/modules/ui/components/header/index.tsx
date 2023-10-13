import Link from "next/link";

const Header = () => (
  <div className="flex justify-center mb-8 pt-16">
    <Link href="/">
      <img src="/livelink_logo_text.svg" alt="Logo" width={232} />
    </Link>
  </div>
);

export default Header;
