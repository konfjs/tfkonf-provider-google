import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSecretManagerRegionalSecretArgs {
  location: string;
  project?: string;
  secret_id: string;
}

export class data_google_secret_manager_regional_secret extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSecretManagerRegionalSecretArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_secret_manager_regional_secret", resourceName);
  }

  get annotations(): string {
    return `data.${this.resourceType}.${this.resourceName}.annotations`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get customer_managed_encryption(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_managed_encryption`;
  }

  get effective_annotations(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get expire_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get rotation(): string {
    return `data.${this.resourceType}.${this.resourceName}.rotation`;
  }

  get secret_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_id`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get topics(): string {
    return `data.${this.resourceType}.${this.resourceName}.topics`;
  }

  get ttl(): string {
    return `data.${this.resourceType}.${this.resourceName}.ttl`;
  }

  get version_aliases(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_aliases`;
  }

  get version_destroy_ttl(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_destroy_ttl`;
  }
}
