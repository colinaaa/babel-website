export type BabelPresets = Array<string | Array<string | any>>;
export type BabelPlugins = Array<string>;
export type BabelPlugin = {
  name: string;
  version: string;
};

export type PresetsOptions = {
  decoratorsVersion: "2021-12" | "2018-09" | "legacy";
  decoratorsBeforeExport: boolean;
  pipelineProposal: "minimal" | "fsharp" | "hack";
  reactRuntime: "classic" | "automatic";
};

export type EnvConfig = {
  browsers: string;
  electron: string | undefined | null;
  isBugfixesEnabled: boolean;
  isEnvPresetEnabled: boolean;
  isElectronEnabled: boolean;
  isBuiltInsEnabled: boolean;
  isNodeEnabled: boolean;
  isSpecEnabled: boolean;
  isLooseEnabled: boolean;
  builtIns: string | false;
  corejs: string | false;
  forceAllTransforms: boolean;
  shippedProposals: boolean;
  version?: any;
  node: string | undefined | null;
  assumptions?: any;
};

export type EnvFeatures = {
  [feature: string]: Array<number>;
};

export type LoadScriptCallback = (success: boolean) => void;

export type PluginConfig = {
  baseUrl?: string;
  isPreLoaded?: boolean;
  label: string;
  package: string;
  version?: any;
  url?: string;
  instanceName?: string;
  files?: Array<string>;
};

export type MultiPackagesConfig = PluginConfig & {
  packages: Array<PluginConfig>;
};

export type PluginConfigs = Array<PluginConfig>;

export type LazyLoadedState = {
  didError: boolean;
  isLoaded: boolean;
  isLoading: boolean;
  config: any;
};

export type BabelState = LazyLoadedState & {
  availablePresets: Array<any>;
  build: any;
  errorMessage?: string;
  circleciRepo: string;
  config: PluginConfig;
  version: any;
};

export type EnvState = LazyLoadedState & {
  availablePresets: Array<any>;
  build: number;
  errorMessage?: string;
  circleciRepo: string;
  config: PluginConfig;
  version: any;
  isEnabled: boolean;
};

export type ShippedProposalsState = LazyLoadedState & {
  errorMessage?: string;
  config: MultiPackagesConfig;
  isEnabled: boolean;
};

export type PluginState = LazyLoadedState & {
  config: PluginConfig;
  isEnabled: boolean;
  plugin: any;
};

export type PluginStateMap = {
  [name: string]: PluginState;
};

export type SourceType = "script" | "module" | "unambiguous";

export type CompileConfig = {
  debugEnvPreset: boolean;
  envConfig: EnvConfig | undefined | null;
  presetsOptions: PresetsOptions;
  evaluate: boolean;
  presets: BabelPresets;
  plugins: BabelPlugins;
  prettify: boolean;
  sourceMap: boolean;
  sourceType: SourceType;
  getTransitions: boolean;
};

export type ReplState = {
  browsers: string;
  bugfixes: boolean;
  build: string;
  builtIns: string | false;
  corejs?: string | false;
  spec: boolean;
  loose: boolean;
  circleciRepo: string;
  code: string;
  debug: boolean;
  evaluate: boolean;
  fileSize: boolean;
  timeTravel: boolean;
  sourceType: SourceType;
  forceAllTransforms: boolean;
  shippedProposals: boolean;
  lineWrap: boolean;
  presets: string | undefined | null;
  prettier: boolean;
  showSidebar: boolean;
  targets: string;
  version: any;
  decoratorsVersion: "2021-12" | "2018-09" | "legacy";
  decoratorsLegacy?: boolean; // deprecated since 7.17
  decoratorsBeforeExport: boolean;
  pipelineProposal: "minimal" | "fsharp" | "hack";
  reactRuntime: "classic" | "automatic";
  externalPlugins: string | undefined | null;
  assumptions?: any;

  electron?: string;
  isEnvPresetTabExpanded?: boolean;
  isPluginsExpanded?: boolean;
  isPresetsTabExpanded?: boolean;
  isSettingsTabExpanded?: boolean;
  meta?: { compiledSize: number; rawSize: number };
};

export type SidebarTabSection =
  | "env"
  | "plugins"
  | "presets"
  | "settings"
  | "assumptions";

export type Transition = {
  code: string;
  pluginAlias: string;
  visitorType: string;
  currentNode?: string;
  size?: number;
};

export type SupportedFileExtension = ".js" | ".jsx" | ".ts" | ".tsx";
