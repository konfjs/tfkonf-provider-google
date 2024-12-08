import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerRegionalSecretVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecretManagerRegionalSecretVersionArgs {
  deletion_policy?: string;
  enabled?: boolean;
  is_secret_data_base64?: boolean;
  secret: string;
  secret_data: string;
  timeouts?: GoogleSecretManagerRegionalSecretVersionArgsTimeouts;
}

export class google_secret_manager_regional_secret_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecretManagerRegionalSecretVersionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_regional_secret_version", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get customer_managed_encryption(): string {
    return `${this.resourceType}.${this.resourceName}.customer_managed_encryption`;
  }

  get destroy_time(): string {
    return `${this.resourceType}.${this.resourceName}.destroy_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get secret(): string {
    return `${this.resourceType}.${this.resourceName}.secret`;
  }

  get secret_data(): string {
    return `${this.resourceType}.${this.resourceName}.secret_data`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }
}
