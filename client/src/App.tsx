import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Destinations from "@/pages/Destinations";
import DestinationDetail from "@/pages/DestinationDetail";
import Experiences from "@/pages/Experiences";
import ExperienceDetail from "@/pages/ExperienceDetail";
import Map from "@/pages/Map";
import Reviews from "@/pages/Reviews";
import About from "@/pages/About";
import Profile from "@/pages/Profile";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/destinations/:id" component={DestinationDetail} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/experiences/:id" component={ExperienceDetail} />
          <Route path="/map" component={Map} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
