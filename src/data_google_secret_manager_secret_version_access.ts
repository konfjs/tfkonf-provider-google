import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSecretManagerSecretVersionAccessArgs {
  is_secret_data_base64?: boolean;
  secret: string;
}

export class data_google_secret_manager_secret_version_access extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSecretManagerSecretVersionAccessArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_secret_manager_secret_version_access", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get secret(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret`;
  }

  get secret_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.secret_data`;
  }

  get version(): string {
    return `data.${this.resourceType}.${this.resourceName}.version`;
  }
}
