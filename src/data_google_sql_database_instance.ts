import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSqlDatabaseInstanceArgs {
  name: string;
  project?: string;
}

export class data_google_sql_database_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSqlDatabaseInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_sql_database_instance", resourceName);
  }

  get available_maintenance_versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.available_maintenance_versions`;
  }

  get clone(): string {
    return `data.${this.resourceType}.${this.resourceName}.clone`;
  }

  get connection_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.connection_name`;
  }

  get database_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.database_version`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get dns_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get encryption_key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_key_name`;
  }

  get first_ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.first_ip_address`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_type`;
  }

  get ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get maintenance_version(): string {
    return `data.${this.resourceType}.${this.resourceName}.maintenance_version`;
  }

  get master_instance_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.master_instance_name`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get private_ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.private_ip_address`;
  }

  get psc_service_attachment_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.psc_service_attachment_link`;
  }

  get public_ip_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_ip_address`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get replica_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.replica_configuration`;
  }

  get replica_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.replica_names`;
  }

  get restore_backup_context(): string {
    return `data.${this.resourceType}.${this.resourceName}.restore_backup_context`;
  }

  get root_password(): string {
    return `data.${this.resourceType}.${this.resourceName}.root_password`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get server_ca_cert(): string {
    return `data.${this.resourceType}.${this.resourceName}.server_ca_cert`;
  }

  get service_account_email_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_account_email_address`;
  }

  get settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.settings`;
  }
}
