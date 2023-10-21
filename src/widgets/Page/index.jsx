import { memo } from "react";

const Page = memo(({ children }) => {
  return <main>{children}</main>;
});

export default Page;
