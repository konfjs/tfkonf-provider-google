import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappActiveDirectoryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappActiveDirectoryArgs {
  administrators?: string[];
  aes_encryption?: boolean;
  backup_operators?: string[];
  description?: string;
  dns: string;
  domain: string;
  encrypt_dc_connections?: boolean;
  kdc_hostname?: string;
  kdc_ip?: string;
  labels?: { [key: string]: string };
  ldap_signing?: boolean;
  location: string;
  name: string;
  net_bios_prefix: string;
  nfs_users_with_ldap?: boolean;
  password: string;
  security_operators?: string[];
  site?: string;
  username: string;
  timeouts?: GoogleNetappActiveDirectoryArgsTimeouts;
}

export class google_netapp_active_directory extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetappActiveDirectoryArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_active_directory", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get dns(): string {
    return `${this.resourceType}.${this.resourceName}.dns`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get net_bios_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.net_bios_prefix`;
  }

  get organizational_unit(): string {
    return `${this.resourceType}.${this.resourceName}.organizational_unit`;
  }

  get password(): string {
    return `${this.resourceType}.${this.resourceName}.password`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_details(): string {
    return `${this.resourceType}.${this.resourceName}.state_details`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get username(): string {
    return `${this.resourceType}.${this.resourceName}.username`;
  }
}
