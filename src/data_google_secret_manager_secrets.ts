import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSecretManagerSecretsArgs {
  filter?: string;
}

export class data_google_secret_manager_secrets extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSecretManagerSecretsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_secret_manager_secrets", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get secrets(): string {
    return `data.${this.resourceType}.${this.resourceName}.secrets`;
  }
}
