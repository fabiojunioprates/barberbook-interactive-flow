
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppointmentProvider } from "./context/AppointmentContext";
import Layout from "./components/Layout";

// Pages
import Index from "./pages/Index";
import BookingPage from "./pages/BookingPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import ProfilePage from "./pages/ProfilePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ServicesPage from "./pages/ServicesPage";
import BarbersPage from "./pages/BarbersPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppointmentProvider>
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <Layout>
                  <Index />
                </Layout>
              } 
            />
            <Route 
              path="/booking" 
              element={
                <Layout>
                  <BookingPage />
                </Layout>
              } 
            />
            <Route 
              path="/agendamentos" 
              element={
                <Layout>
                  <AppointmentsPage />
                </Layout>
              } 
            />
            <Route 
              path="/perfil" 
              element={
                <Layout>
                  <ProfilePage />
                </Layout>
              } 
            />
            <Route 
              path="/agendamento-confirmado" 
              element={
                <Layout>
                  <ConfirmationPage />
                </Layout>
              } 
            />
            <Route 
              path="/servicos" 
              element={
                <Layout>
                  <ServicesPage />
                </Layout>
              } 
            />
            <Route 
              path="/barbeiros" 
              element={
                <Layout>
                  <BarbersPage />
                </Layout>
              } 
            />
            <Route 
              path="/contato" 
              element={
                <Layout>
                  <ContactPage />
                </Layout>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppointmentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
