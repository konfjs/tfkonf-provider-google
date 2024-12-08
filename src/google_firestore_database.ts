import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirestoreDatabaseArgsCmekConfig {
  kms_key_name: string;
}

export interface GoogleFirestoreDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirestoreDatabaseArgs {
  deletion_policy?: string;
  location_id: string;
  name: string;
  point_in_time_recovery_enablement?: string;
  type: string;
  cmek_config?: GoogleFirestoreDatabaseArgsCmekConfig;
  timeouts?: GoogleFirestoreDatabaseArgsTimeouts;
}

export class google_firestore_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFirestoreDatabaseArgs) {
    const meta = {cmek_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firestore_database", resourceName);
  }

  get app_engine_integration_mode(): string {
    return `${this.resourceType}.${this.resourceName}.app_engine_integration_mode`;
  }

  get concurrency_mode(): string {
    return `${this.resourceType}.${this.resourceName}.concurrency_mode`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_protection_state(): string {
    return `${this.resourceType}.${this.resourceName}.delete_protection_state`;
  }

  get earliest_version_time(): string {
    return `${this.resourceType}.${this.resourceName}.earliest_version_time`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.key_prefix`;
  }

  get location_id(): string {
    return `${this.resourceType}.${this.resourceName}.location_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
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

  get version_retention_period(): string {
    return `${this.resourceType}.${this.resourceName}.version_retention_period`;
  }
}
