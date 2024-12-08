import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSpannerDatabaseArgs {
  instance: string;
  name: string;
  project?: string;
}

export class data_google_spanner_database extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSpannerDatabaseArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_spanner_database", resourceName);
  }

  get database_dialect(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_dialect`;
  }

  get ddl(): string {
    return `data.${this.resourceType}.${this.resourceName}.ddl`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get enable_drop_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_drop_protection`;
  }

  get encryption_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_config`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get version_retention_period(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_retention_period`;
  }
}
