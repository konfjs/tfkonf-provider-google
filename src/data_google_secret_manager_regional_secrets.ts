import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSecretManagerRegionalSecretsArgs {
  filter?: string;
  location: string;
}

export class data_google_secret_manager_regional_secrets extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSecretManagerRegionalSecretsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_secret_manager_regional_secrets", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get secrets(): string {
    return `data.${this.resourceType}.${this.resourceName}.secrets`;
  }
}
