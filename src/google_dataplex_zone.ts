import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexZoneArgsDiscoverySpecCsvOptions {
  delimiter?: string;
  disable_type_inference?: boolean;
  encoding?: string;
  header_rows?: number;
}

export interface GoogleDataplexZoneArgsDiscoverySpecJsonOptions {
  disable_type_inference?: boolean;
  encoding?: string;
}

export interface GoogleDataplexZoneArgsDiscoverySpec {
  enabled: boolean;
  exclude_patterns?: string[];
  include_patterns?: string[];
  csv_options?: GoogleDataplexZoneArgsDiscoverySpecCsvOptions;
  json_options?: GoogleDataplexZoneArgsDiscoverySpecJsonOptions;
}

export interface GoogleDataplexZoneArgsResourceSpec {
  location_type: string;
}

export interface GoogleDataplexZoneArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataplexZoneArgs {
  description?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  lake: string;
  location: string;
  name: string;
  type: string;
  discovery_spec: GoogleDataplexZoneArgsDiscoverySpec;
  resource_spec: GoogleDataplexZoneArgsResourceSpec;
  timeouts?: GoogleDataplexZoneArgsTimeouts;
}

export class google_dataplex_zone extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexZoneArgs) {
    const meta = {discovery_spec:{isBlock:true,csv_options:{isBlock:true},json_options:{isBlock:true}},resource_spec:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_zone", resourceName);
  }

  get asset_status(): string {
    return `${this.resourceType}.${this.resourceName}.asset_status`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lake(): string {
    return `${this.resourceType}.${this.resourceName}.lake`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
