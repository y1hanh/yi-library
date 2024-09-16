import { memo, FC } from "react";
import Link from 'next/link';

const Welcome: FC = memo(() => {

  return (
    <div>
      <h1>Welcome</h1>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  );
});

export default Welcome;