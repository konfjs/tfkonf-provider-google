import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerSecretVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecretManagerSecretVersionArgs {
  deletion_policy?: string;
  enabled?: boolean;
  is_secret_data_base64?: boolean;
  secret: string;
  secret_data: string;
  timeouts?: GoogleSecretManagerSecretVersionArgsTimeouts;
}

export class google_secret_manager_secret_version extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSecretManagerSecretVersionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_secret_version", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get destroy_time(): string {
    return `${this.resourceType}.${this.resourceName}.destroy_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
