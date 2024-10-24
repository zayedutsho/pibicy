import buildProviderTree from "./build-provider-tree";
import { ThemeProvider } from "./theme-provider";

const ProviderTree = buildProviderTree([[ThemeProvider]]);

const ContextProviders = ({ children }) => {
  return <ProviderTree>{children}</ProviderTree>;
};

export default ContextProviders;
