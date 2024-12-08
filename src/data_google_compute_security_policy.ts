import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeSecurityPolicyArgs {
  name?: string;
  project?: string;
  self_link?: string;
}

export class data_google_compute_security_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeSecurityPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_security_policy", resourceName);
  }

  get adaptive_protection_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.adaptive_protection_config`;
  }

  get advanced_options_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.advanced_options_config`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get recaptcha_options_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.recaptcha_options_config`;
  }

  get rule(): string {
    return `data.${this.resourceType}.${this.resourceName}.rule`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
