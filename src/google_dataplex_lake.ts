import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexLakeArgsMetastore {
  service?: string;
}

export interface GoogleDataplexLakeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataplexLakeArgs {
  description?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  metastore?: GoogleDataplexLakeArgsMetastore;
  timeouts?: GoogleDataplexLakeArgsTimeouts;
}

export class google_dataplex_lake extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexLakeArgs) {
    const meta = {metastore:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_lake", resourceName);
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

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get metastore_status(): string {
    return `${this.resourceType}.${this.resourceName}.metastore_status`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
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
