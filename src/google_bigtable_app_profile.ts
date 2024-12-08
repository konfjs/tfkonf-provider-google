import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableAppProfileArgsDataBoostIsolationReadOnly {
  compute_billing_owner: string;
}

export interface GoogleBigtableAppProfileArgsSingleClusterRouting {
  allow_transactional_writes?: boolean;
  cluster_id: string;
}

export interface GoogleBigtableAppProfileArgsStandardIsolation {
  priority: string;
}

export interface GoogleBigtableAppProfileArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigtableAppProfileArgs {
  app_profile_id: string;
  description?: string;
  ignore_warnings?: boolean;
  instance?: string;
  multi_cluster_routing_cluster_ids?: string[];
  multi_cluster_routing_use_any?: boolean;
  data_boost_isolation_read_only?: GoogleBigtableAppProfileArgsDataBoostIsolationReadOnly;
  single_cluster_routing?: GoogleBigtableAppProfileArgsSingleClusterRouting;
  standard_isolation?: GoogleBigtableAppProfileArgsStandardIsolation;
  timeouts?: GoogleBigtableAppProfileArgsTimeouts;
}

export class google_bigtable_app_profile extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigtableAppProfileArgs) {
    const meta = {data_boost_isolation_read_only:{isBlock:true},single_cluster_routing:{isBlock:true},standard_isolation:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigtable_app_profile", resourceName);
  }

  get app_profile_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_profile_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
