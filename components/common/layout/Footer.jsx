import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="bg-[#F9F9F9] px-2">
        <div className="container py-16 mx-auto grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 px-2 lg:px-4">
          <div>
            <h2 className="text-lg font-semibold mb-4">
              <img src="/assets/images/header/logo.svg" />
            </h2>
            <p className="text-sm">
              DR process is complex, expensive, and unpredictable. Nimesa makes
              it simple, affordable, and highly secure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Nimesa – Cloud Edition</Link>
              </li>
              <li>
                <Link href="#">Nimesa for AWS</Link>
              </li>
              <li>
                <Link href="#">Free Trial</Link>
              </li>
              <li>
                <Link href="#">Request Demo</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">MSSQL Data protection</Link>
              </li>
              <li>
                <Link href="#">MySQL Data protection</Link>
              </li>
              <li>
                <Link href="#">PostgreSQL Data protection</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/why-nimesa"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Why NIMESA
                </Link>
              </li>
              <li>
                <Link
                  href="/whitepaper"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-full md:col-span-1">
            <h3 className="font-semibold mb-2">Contacts Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: sales@nimesa.io</li>
              <li className="flex flex-row gap-1">
                <span>Address:</span>
                <span>75 E. Santa Clara Street, San Jose, CA 95113 </span>
              </li>
              <li className="flex fle-row gap-2">
                <span> Address:</span>{" "}
                <span>
                  No. 1561 3rd Floor, NGR Arcade, 27th Main Road, Sector 2, HSR
                  Layout, Bangalore, Karnataka, India - 560102
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#F3F4F4] w-full">
          <div className="container m-auto flex flex-col w-full p-1.5 md:flex-row justify-between items-center text-sm text-[#212121]">
            <div className="md:flex items-center md:gap-7">
              <p>© 2024 Nimesa. All Rights Reserved.</p>
              <div className="flex space-x-7">
                <Link href="#">Terms of Services</Link>
                <Link href="#">Privacy Policy</Link>
              </div>
            </div>
            <div className="flex space-x-3 mt-2 md:mt-0">
              <Link href="#">
                <img src="/assets/images/footer/facebook.svg" alt="Facebook" />
              </Link>
              <Link href="#">
                <img src="/assets/images/footer/x.svg" alt="Twitter" />
              </Link>
              <Link href="#">
                <img src="/assets/images/footer/linkedin.svg" alt="LinkedIn" />
              </Link>
              <Link href="#">
                <img src="/assets/images/footer/youtube.svg" alt="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
