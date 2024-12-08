import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerDatabaseArgsEncryptionConfig {
  kms_key_name?: string;
  kms_key_names?: string[];
}

export interface GoogleSpannerDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSpannerDatabaseArgs {
  ddl?: string[];
  deletion_protection?: boolean;
  enable_drop_protection?: boolean;
  instance: string;
  name: string;
  encryption_config?: GoogleSpannerDatabaseArgsEncryptionConfig;
  timeouts?: GoogleSpannerDatabaseArgsTimeouts;
}

export class google_spanner_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSpannerDatabaseArgs) {
    const meta = {encryption_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_spanner_database", resourceName);
  }

  get database_dialect(): string {
    return `${this.resourceType}.${this.resourceName}.database_dialect`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
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

  get version_retention_period(): string {
    return `${this.resourceType}.${this.resourceName}.version_retention_period`;
  }
}
