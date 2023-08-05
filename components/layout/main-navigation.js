import Link from "next/link";
import { useSession } from "next-auth/react";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const { data: session, status } = useSession();

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {(status === "loading" || status === "unauthenticated") && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}

          {status === "authenticated" && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}

          {status === "authenticated" && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
