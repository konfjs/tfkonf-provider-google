import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerRegionalSecretArgsCustomerManagedEncryption {
  kms_key_name: string;
}

export interface GoogleSecretManagerRegionalSecretArgsRotation {
  next_rotation_time?: string;
  rotation_period?: string;
}

export interface GoogleSecretManagerRegionalSecretArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecretManagerRegionalSecretArgsTopics {
  name: string;
}

export interface GoogleSecretManagerRegionalSecretArgs {
  annotations?: { [key: string]: string };
  labels?: { [key: string]: string };
  location: string;
  secret_id: string;
  ttl?: string;
  version_aliases?: { [key: string]: string };
  version_destroy_ttl?: string;
  customer_managed_encryption?: GoogleSecretManagerRegionalSecretArgsCustomerManagedEncryption;
  rotation?: GoogleSecretManagerRegionalSecretArgsRotation;
  timeouts?: GoogleSecretManagerRegionalSecretArgsTimeouts;
  topics?: GoogleSecretManagerRegionalSecretArgsTopics[];
}

export class google_secret_manager_regional_secret extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecretManagerRegionalSecretArgs) {
    const meta = {customer_managed_encryption:{isBlock:true},rotation:{isBlock:true},timeouts:{isBlock:true},topics:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_regional_secret", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get expire_time(): string {
    return `${this.resourceType}.${this.resourceName}.expire_time`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get secret_id(): string {
    return `${this.resourceType}.${this.resourceName}.secret_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
