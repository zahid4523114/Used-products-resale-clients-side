import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Components/Routes/Routes";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
