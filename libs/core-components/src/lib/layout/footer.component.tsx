import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img src="/assets/logo/logo.png" alt="Logo" />
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="/">Landing</Link>
            </li>
            <li>
              <Link href="/bio">Bio</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/posts">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p className="copyright">
            Made with 💙 and ☕ by <span>Shoaib Akhtar</span>
          </p>Shoaib Akhtar
        </div>
      </div>
    </footer>
  );
};
