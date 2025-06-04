import { Outlet } from "react-router"
import Footer from "./components/footer/footer"
import Header from "./components/header/Header"

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
