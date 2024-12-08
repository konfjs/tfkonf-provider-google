import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeSslPolicyArgs {
  name: string;
  project?: string;
}

export class data_google_compute_ssl_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeSslPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_ssl_policy", resourceName);
  }

  get creation_timestamp(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get custom_features(): string {
    return `data.${this.resourceType}.${this.resourceName}.custom_features`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get enabled_features(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled_features`;
  }

  get fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get min_tls_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_tls_version`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get profile(): string {
    return `data.${this.resourceType}.${this.resourceName}.profile`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }
}
