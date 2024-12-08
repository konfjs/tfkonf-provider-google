import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig {
  chunk_size?: number;
  include_ancestor_headings?: boolean;
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigChunkingConfig {
  layout_based_chunking_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig {
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig {
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig {
  use_native_text?: boolean;
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigDefaultParsingConfig {
  digital_parsing_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig;
  layout_parsing_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig;
  ocr_parsing_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig;
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig {
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig {
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig {
  use_native_text?: boolean;
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigParsingConfigOverrides {
  file_type: string;
  digital_parsing_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig;
  layout_parsing_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig;
  ocr_parsing_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig;
}

export interface GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfig {
  chunking_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigChunkingConfig;
  default_parsing_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigDefaultParsingConfig;
  parsing_config_overrides?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfigParsingConfigOverrides[];
}

export interface GoogleDiscoveryEngineDataStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDiscoveryEngineDataStoreArgs {
  content_config: string;
  create_advanced_site_search?: boolean;
  data_store_id: string;
  display_name: string;
  industry_vertical: string;
  location: string;
  skip_default_schema_creation?: boolean;
  solution_types?: string[];
  document_processing_config?: GoogleDiscoveryEngineDataStoreArgsDocumentProcessingConfig;
  timeouts?: GoogleDiscoveryEngineDataStoreArgsTimeouts;
}

export class google_discovery_engine_data_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDiscoveryEngineDataStoreArgs) {
    const meta = {document_processing_config:{isBlock:true,chunking_config:{isBlock:true,layout_based_chunking_config:{isBlock:true}},default_parsing_config:{isBlock:true,digital_parsing_config:{isBlock:true},layout_parsing_config:{isBlock:true},ocr_parsing_config:{isBlock:true}},parsing_config_overrides:{isBlock:true,digital_parsing_config:{isBlock:true},layout_parsing_config:{isBlock:true},ocr_parsing_config:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_discovery_engine_data_store", resourceName);
  }

  get content_config(): string {
    return `${this.resourceType}.${this.resourceName}.content_config`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get data_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_store_id`;
  }

  get default_schema_id(): string {
    return `${this.resourceType}.${this.resourceName}.default_schema_id`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get industry_vertical(): string {
    return `${this.resourceType}.${this.resourceName}.industry_vertical`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
