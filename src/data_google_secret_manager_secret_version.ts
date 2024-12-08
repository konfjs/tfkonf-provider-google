import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSecretManagerSecretVersionArgs {
  is_secret_data_base64?: boolean;
  secret: string;
}

export class data_google_secret_manager_secret_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSecretManagerSecretVersionArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_secret_manager_secret_version", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get destroy_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.destroy_time`;
  }

  get enabled(): string {
    return `data.${this.resourceType}.${this.resourceName}.enabled`;
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
