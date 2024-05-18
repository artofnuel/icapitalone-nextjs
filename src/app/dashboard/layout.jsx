import SideBar from "./components/SideBar";

export default function Layout({ children }) {
  return (
    <main className="w-full min-h-screen flex">
      <SideBar />
      <div className="w-full min-h-screen bg-background p-5">{children}</div>
    </main>
  );
}
