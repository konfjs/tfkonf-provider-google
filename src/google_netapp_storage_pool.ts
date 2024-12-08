import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappStoragePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappStoragePoolArgs {
  active_directory?: string;
  allow_auto_tiering?: boolean;
  capacity_gib: string;
  description?: string;
  kms_config?: string;
  labels?: { [key: string]: string };
  ldap_enabled?: boolean;
  location: string;
  name: string;
  network: string;
  replica_zone?: string;
  service_level: string;
  zone?: string;
  timeouts?: GoogleNetappStoragePoolArgsTimeouts;
}

export class google_netapp_storage_pool extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetappStoragePoolArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_storage_pool", resourceName);
  }

  get capacity_gib(): string {
    return `${this.resourceType}.${this.resourceName}.capacity_gib`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get encryption_type(): string {
    return `${this.resourceType}.${this.resourceName}.encryption_type`;
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

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_level(): string {
    return `${this.resourceType}.${this.resourceName}.service_level`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get volume_capacity_gib(): string {
    return `${this.resourceType}.${this.resourceName}.volume_capacity_gib`;
  }

  get volume_count(): string {
    return `${this.resourceType}.${this.resourceName}.volume_count`;
  }
}
