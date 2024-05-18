/* eslint-disable react/display-name */
import { useRouter } from "next/router";

const { useEffect } = require("react");
const { default: useStore } = require("../store");

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { user, isAuthenticated } = useStore((state) => ({
      user: state.user,
      isAuthenticated: state.isAuthenticated,
    }));

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("./login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;