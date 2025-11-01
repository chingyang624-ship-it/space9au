import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BK8 from "./pages/BK8";
import BK8Esports from "./pages/BK8Esports";
import BK8LiveCasino from "./pages/BK8LiveCasino";
import AboutUs from "./pages/AboutUs";
import Promotions from "./pages/Promotions";
import Sponsor from "./pages/Sponsor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bk8" element={<BK8 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/sponsor" element={<Sponsor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
