import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFilestoreInstanceArgsFileSharesNfsExportOptions {
  access_mode?: string;
  anon_gid?: number;
  anon_uid?: number;
  ip_ranges?: string[];
  squash_mode?: string;
}

export interface GoogleFilestoreInstanceArgsFileShares {
  capacity_gb: number;
  name: string;
  source_backup?: string;
  nfs_export_options?: GoogleFilestoreInstanceArgsFileSharesNfsExportOptions[];
}

export interface GoogleFilestoreInstanceArgsNetworks {
  connect_mode?: string;
  modes: string[];
  network: string;
}

export interface GoogleFilestoreInstanceArgsPerformanceConfigFixedIops {
  max_iops?: number;
}

export interface GoogleFilestoreInstanceArgsPerformanceConfigIopsPerTb {
  max_iops_per_tb?: number;
}

export interface GoogleFilestoreInstanceArgsPerformanceConfig {
  fixed_iops?: GoogleFilestoreInstanceArgsPerformanceConfigFixedIops;
  iops_per_tb?: GoogleFilestoreInstanceArgsPerformanceConfigIopsPerTb;
}

export interface GoogleFilestoreInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFilestoreInstanceArgs {
  deletion_protection_enabled?: boolean;
  deletion_protection_reason?: string;
  description?: string;
  kms_key_name?: string;
  labels?: { [key: string]: string };
  name: string;
  protocol?: string;
  tier: string;
  file_shares: GoogleFilestoreInstanceArgsFileShares;
  networks: GoogleFilestoreInstanceArgsNetworks[];
  performance_config?: GoogleFilestoreInstanceArgsPerformanceConfig;
  timeouts?: GoogleFilestoreInstanceArgsTimeouts;
}

export class google_filestore_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFilestoreInstanceArgs) {
    const meta = {file_shares:{isBlock:true,nfs_export_options:{isBlock:true}},networks:{isBlock:true},performance_config:{isBlock:true,fixed_iops:{isBlock:true},iops_per_tb:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_filestore_instance", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get tier(): string {
    return `${this.resourceType}.${this.resourceName}.tier`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
