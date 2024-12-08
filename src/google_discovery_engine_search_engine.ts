import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDiscoveryEngineSearchEngineArgsCommonConfig {
  company_name?: string;
}

export interface GoogleDiscoveryEngineSearchEngineArgsSearchEngineConfig {
  search_add_ons?: string[];
  search_tier?: string;
}

export interface GoogleDiscoveryEngineSearchEngineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDiscoveryEngineSearchEngineArgs {
  collection_id: string;
  data_store_ids: string[];
  display_name: string;
  engine_id: string;
  industry_vertical?: string;
  location: string;
  common_config?: GoogleDiscoveryEngineSearchEngineArgsCommonConfig;
  search_engine_config: GoogleDiscoveryEngineSearchEngineArgsSearchEngineConfig;
  timeouts?: GoogleDiscoveryEngineSearchEngineArgsTimeouts;
}

export class google_discovery_engine_search_engine extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDiscoveryEngineSearchEngineArgs) {
    const meta = {common_config:{isBlock:true},search_engine_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_discovery_engine_search_engine", resourceName);
  }

  get collection_id(): string {
    return `${this.resourceType}.${this.resourceName}.collection_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get data_store_ids(): string {
    return `${this.resourceType}.${this.resourceName}.data_store_ids`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get engine_id(): string {
    return `${this.resourceType}.${this.resourceName}.engine_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
