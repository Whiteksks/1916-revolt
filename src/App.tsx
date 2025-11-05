import { Routes, Route} from "react-router-dom"
import { ThemeProvider } from "@/components/theme/theme-provider"
import HomePage from "./pages/HomePage/home"
import SourcesPage from "./pages/sources/sources"
import AboutUs from "./pages/about/about"
import TimelinePage from "./pages/timeline/timeline"
import { GalleryPage } from "./pages/gallery/galleryPage"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  )
}
