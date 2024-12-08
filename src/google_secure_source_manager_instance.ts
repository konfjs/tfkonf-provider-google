import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecureSourceManagerInstanceArgsPrivateConfig {
  ca_pool: string;
  is_private: boolean;
}

export interface GoogleSecureSourceManagerInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecureSourceManagerInstanceArgsWorkforceIdentityFederationConfig {
  enabled: boolean;
}

export interface GoogleSecureSourceManagerInstanceArgs {
  instance_id: string;
  kms_key?: string;
  labels?: { [key: string]: string };
  location: string;
  private_config?: GoogleSecureSourceManagerInstanceArgsPrivateConfig;
  timeouts?: GoogleSecureSourceManagerInstanceArgsTimeouts;
  workforce_identity_federation_config?: GoogleSecureSourceManagerInstanceArgsWorkforceIdentityFederationConfig;
}

export class google_secure_source_manager_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSecureSourceManagerInstanceArgs) {
    const meta = {private_config:{isBlock:true},timeouts:{isBlock:true},workforce_identity_federation_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secure_source_manager_instance", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get host_config(): string {
    return `${this.resourceType}.${this.resourceName}.host_config`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_note(): string {
    return `${this.resourceType}.${this.resourceName}.state_note`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
