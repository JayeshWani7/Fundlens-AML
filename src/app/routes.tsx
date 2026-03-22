import { createBrowserRouter } from "react-router";
import InvestigationDashboard from "./pages/InvestigationDashboard";
import FundFlowGraph from "./pages/FundFlowGraph";
import STRGeneration from "./pages/STRGeneration";
import EntityProfile from "./pages/EntityProfile";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import MobileAlert from "./pages/MobileAlert";
import AdminConfig from "./pages/AdminConfig";
import BlockchainAudit from "./pages/BlockchainAudit";
import NLQuery from "./pages/NLQuery";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: InvestigationDashboard,
      },
      {
        path: "graph",
        Component: FundFlowGraph,
      },
      {
        path: "str-generation",
        Component: STRGeneration,
      },
      {
        path: "entity/:accountId",
        Component: EntityProfile,
      },
      {
        path: "analytics",
        Component: AnalyticsDashboard,
      },
      {
        path: "mobile",
        Component: MobileAlert,
      },
      {
        path: "admin",
        Component: AdminConfig,
      },
      {
        path: "blockchain",
        Component: BlockchainAudit,
      },
      {
        path: "query",
        Component: NLQuery,
      },
    ],
  },
]);