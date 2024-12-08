import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexAssetArgsDiscoverySpecCsvOptions {
  delimiter?: string;
  disable_type_inference?: boolean;
  encoding?: string;
  header_rows?: number;
}

export interface GoogleDataplexAssetArgsDiscoverySpecJsonOptions {
  disable_type_inference?: boolean;
  encoding?: string;
}

export interface GoogleDataplexAssetArgsDiscoverySpec {
  enabled: boolean;
  exclude_patterns?: string[];
  include_patterns?: string[];
  schedule?: string;
  csv_options?: GoogleDataplexAssetArgsDiscoverySpecCsvOptions;
  json_options?: GoogleDataplexAssetArgsDiscoverySpecJsonOptions;
}

export interface GoogleDataplexAssetArgsResourceSpec {
  name?: string;
  type: string;
}

export interface GoogleDataplexAssetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataplexAssetArgs {
  dataplex_zone: string;
  description?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  lake: string;
  location: string;
  name: string;
  discovery_spec: GoogleDataplexAssetArgsDiscoverySpec;
  resource_spec: GoogleDataplexAssetArgsResourceSpec;
  timeouts?: GoogleDataplexAssetArgsTimeouts;
}

export class google_dataplex_asset extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexAssetArgs) {
    const meta = {discovery_spec:{isBlock:true,csv_options:{isBlock:true},json_options:{isBlock:true}},resource_spec:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_asset", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get dataplex_zone(): string {
    return `${this.resourceType}.${this.resourceName}.dataplex_zone`;
  }

  get discovery_status(): string {
    return `${this.resourceType}.${this.resourceName}.discovery_status`;
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

  get resource_status(): string {
    return `${this.resourceType}.${this.resourceName}.resource_status`;
  }

  get security_status(): string {
    return `${this.resourceType}.${this.resourceName}.security_status`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
