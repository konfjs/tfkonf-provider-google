import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleFilestoreInstanceArgs {
  location?: string;
  name: string;
  project?: string;
}

export class data_google_filestore_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleFilestoreInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_filestore_instance", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get deletion_protection_enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection_enabled`;
  }

  get deletion_protection_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection_reason`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get file_shares(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_shares`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get networks(): string {
    return `data.${this.resourceType}.${this.resourceName}.networks`;
  }

  get performance_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.performance_config`;
  }

  get protocol(): string {
    return `data.${this.resourceType}.${this.resourceName}.protocol`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get tier(): string {
    return `data.${this.resourceType}.${this.resourceName}.tier`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}
