import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableTableArgsAutomatedBackupPolicy {
}

export interface GoogleBigtableTableArgsColumnFamily {
  family: string;
  type?: string;
}

export interface GoogleBigtableTableArgsTimeouts {
  create?: string;
  update?: string;
}

export interface GoogleBigtableTableArgs {
  instance_name: string;
  name: string;
  split_keys?: string[];
  automated_backup_policy?: GoogleBigtableTableArgsAutomatedBackupPolicy;
  column_family?: GoogleBigtableTableArgsColumnFamily[];
  timeouts?: GoogleBigtableTableArgsTimeouts;
}

export class google_bigtable_table extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBigtableTableArgs) {
    const meta = {automated_backup_policy:{isBlock:true},column_family:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_bigtable_table", resourceName);
  }

  get change_stream_retention(): string {
    return `${this.resourceType}.${this.resourceName}.change_stream_retention`;
  }

  get deletion_protection(): string {
    return `${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_name(): string {
    return `${this.resourceType}.${this.resourceName}.instance_name`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
