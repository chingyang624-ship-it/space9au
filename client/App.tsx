import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Promotions from "./pages/Promotions";
import Sponsor from "./pages/Sponsor";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import HowToWinMoreOnlineCasino from "./pages/blog/HowToWinMoreOnlineCasino";
import AustralianPokiesTips from "./pages/blog/AustralianPokiesTips";
import SportsBettingStrategies from "./pages/blog/SportsBettingStrategies";
import LiveCasinoWinningTips from "./pages/blog/LiveCasinoWinningTips";
import BankrollManagement from "./pages/blog/BankrollManagement";
import FreeSpinsStrategy from "./pages/blog/FreeSpinsStrategy";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/how-to-win-more-online-casino" element={<HowToWinMoreOnlineCasino />} />
          <Route path="/blog/australian-pokies-tips" element={<AustralianPokiesTips />} />
          <Route path="/blog/sports-betting-strategies" element={<SportsBettingStrategies />} />
          <Route path="/blog/live-casino-winning-tips" element={<LiveCasinoWinningTips />} />
          <Route path="/blog/bankroll-management" element={<BankrollManagement />} />
          <Route path="/blog/free-spins-strategy" element={<FreeSpinsStrategy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
