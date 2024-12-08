import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableGcPolicyArgsMaxAge {
}

export interface GoogleBigtableGcPolicyArgsMaxVersion {
  number: number;
}

export interface GoogleBigtableGcPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleBigtableGcPolicyArgs {
  column_family: string;
  deletion_policy?: string;
  gc_rules?: string;
  ignore_warnings?: boolean;
  instance_name: string;
  mode?: string;
  table: string;
  max_age?: GoogleBigtableGcPolicyArgsMaxAge;
  max_version?: GoogleBigtableGcPolicyArgsMaxVersion[];
  timeouts?: GoogleBigtableGcPolicyArgsTimeouts;
}

export class google_bigtable_gc_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigtableGcPolicyArgs) {
    const meta = {max_age:{isBlock:true},max_version:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigtable_gc_policy", resourceName);
  }

  get column_family(): string {
    return `${this.resourceType}.${this.resourceName}.column_family`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get table(): string {
    return `${this.resourceType}.${this.resourceName}.table`;
  }
}
