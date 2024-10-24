import ApplicationLayout from "./app-layout";

export const metadata = {
  title: "Pibicy",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ApplicationLayout>{children}</ApplicationLayout>
    </html>
  );
}
