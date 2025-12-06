import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AppFeatures from "./pages/AppFeatures";
import Events from "./pages/Events";
import News from "./pages/News";
import NewsPost from "@/pages/NewsPost";
import MobileApp from "@/pages/MobileApp";
import Ambassadors from "@/pages/Ambassadors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/app-features"} component={AppFeatures} />
      <Route path={"/events"} component={Events} />
      <Route path={"/news"} component={News} />
      <Route path={"/news/:slug"} component={NewsPost} />
      <Route path={"/mobile-app"} component={MobileApp} />
      <Route path={"/ambassadors"} component={Ambassadors} />
      <Route path={"/404"} component={NotFound} />
      {/* Logo background transparency fixed */}
      {/* Sanity CMS integration complete */}
      {/* Events and Social Feed routes added */}
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
