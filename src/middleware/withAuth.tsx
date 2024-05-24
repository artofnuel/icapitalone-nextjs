// components/withAuth.tsx
/* eslint-disable react/display-name */
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMainStore } from "@/store";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    const { isAuthenticated, checkAuth } = useMainStore((state) => ({
      isAuthenticated: state.isAuthenticated,
      checkAuth: state.checkAuth,
    }));

    useEffect(() => {
      if (typeof window !== 'undefined') {
        checkAuth();
        if (!isAuthenticated) {
          router.push("/login");
        }
      }
    }, [isAuthenticated, checkAuth, router]);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
