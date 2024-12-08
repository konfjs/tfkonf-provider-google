import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsCryptoKeyVersionArgsExternalProtectionLevelOptions {
  ekm_connection_key_path?: string;
  external_key_uri?: string;
}

export interface GoogleKmsCryptoKeyVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleKmsCryptoKeyVersionArgs {
  crypto_key: string;
  external_protection_level_options?: GoogleKmsCryptoKeyVersionArgsExternalProtectionLevelOptions;
  timeouts?: GoogleKmsCryptoKeyVersionArgsTimeouts;
}

export class google_kms_crypto_key_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleKmsCryptoKeyVersionArgs) {
    const meta = {external_protection_level_options:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_crypto_key_version", resourceName);
  }

  get algorithm(): string {
    return `${this.resourceType}.${this.resourceName}.algorithm`;
  }

  get attestation(): string {
    return `${this.resourceType}.${this.resourceName}.attestation`;
  }

  get crypto_key(): string {
    return `${this.resourceType}.${this.resourceName}.crypto_key`;
  }

  get generate_time(): string {
    return `${this.resourceType}.${this.resourceName}.generate_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get protection_level(): string {
    return `${this.resourceType}.${this.resourceName}.protection_level`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
