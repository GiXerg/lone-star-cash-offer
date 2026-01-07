import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Resources from "./pages/Resources";
import InheritedHouse from "./pages/resources/InheritedHouse";
import Foreclosure from "./pages/resources/Foreclosure";
import AsIs from "./pages/resources/AsIs";
import CashBuyers from "./pages/resources/CashBuyers";
import Contact from "./pages/Contact";

function Router() {
  const [location] = useLocation();
  const showFloatingCTA = location !== "/";

  return (
    <>
      <Navigation />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/how-it-works"} component={HowItWorks} />
        <Route path={"/about"} component={About} />
        <Route path={"/resources"} component={Resources} />
        <Route path={"/resources/inherited"} component={InheritedHouse} />
        <Route path={"/resources/foreclosure"} component={Foreclosure} />
        <Route path={"/resources/as-is"} component={AsIs} />
        <Route path={"/resources/cash-buyers"} component={CashBuyers} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      {showFloatingCTA && <FloatingCTA />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
