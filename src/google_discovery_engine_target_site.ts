import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDiscoveryEngineTargetSiteArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleDiscoveryEngineTargetSiteArgs {
  data_store_id: string;
  exact_match?: boolean;
  location: string;
  provided_uri_pattern: string;
  type?: string;
  timeouts?: GoogleDiscoveryEngineTargetSiteArgsTimeouts;
}

export class google_discovery_engine_target_site extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDiscoveryEngineTargetSiteArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_discovery_engine_target_site", resourceName);
  }

  get data_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_store_id`;
  }

  get failure_reason(): string {
    return `${this.resourceType}.${this.resourceName}.failure_reason`;
  }

  get generated_uri_pattern(): string {
    return `${this.resourceType}.${this.resourceName}.generated_uri_pattern`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get indexing_status(): string {
    return `${this.resourceType}.${this.resourceName}.indexing_status`;
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

  get provided_uri_pattern(): string {
    return `${this.resourceType}.${this.resourceName}.provided_uri_pattern`;
  }

  get root_domain_uri(): string {
    return `${this.resourceType}.${this.resourceName}.root_domain_uri`;
  }

  get site_verification_info(): string {
    return `${this.resourceType}.${this.resourceName}.site_verification_info`;
  }

  get target_site_id(): string {
    return `${this.resourceType}.${this.resourceName}.target_site_id`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
