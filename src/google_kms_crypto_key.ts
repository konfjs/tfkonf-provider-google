import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsCryptoKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleKmsCryptoKeyArgsVersionTemplate {
  algorithm: string;
  protection_level?: string;
}

export interface GoogleKmsCryptoKeyArgs {
  key_ring: string;
  labels?: { [key: string]: string };
  name: string;
  purpose?: string;
  rotation_period?: string;
  skip_initial_version_creation?: boolean;
  timeouts?: GoogleKmsCryptoKeyArgsTimeouts;
  version_template?: GoogleKmsCryptoKeyArgsVersionTemplate;
}

export class google_kms_crypto_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleKmsCryptoKeyArgs) {
    const meta = {timeouts:{isBlock:true},version_template:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_crypto_key", resourceName);
  }

  get crypto_key_backend(): string {
    return `${this.resourceType}.${this.resourceName}.crypto_key_backend`;
  }

  get destroy_scheduled_duration(): string {
    return `${this.resourceType}.${this.resourceName}.destroy_scheduled_duration`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get import_only(): string {
    return `${this.resourceType}.${this.resourceName}.import_only`;
  }

  get key_ring(): string {
    return `${this.resourceType}.${this.resourceName}.key_ring`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get primary(): string {
    return `${this.resourceType}.${this.resourceName}.primary`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
