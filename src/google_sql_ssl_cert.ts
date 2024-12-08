import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSqlSslCertArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleSqlSslCertArgs {
  common_name: string;
  instance: string;
  timeouts?: GoogleSqlSslCertArgsTimeouts;
}

export class google_sql_ssl_cert extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSqlSslCertArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_sql_ssl_cert", resourceName);
  }

  get cert(): string {
    return `${this.resourceType}.${this.resourceName}.cert`;
  }

  get cert_serial_number(): string {
    return `${this.resourceType}.${this.resourceName}.cert_serial_number`;
  }

  get common_name(): string {
    return `${this.resourceType}.${this.resourceName}.common_name`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get expiration_time(): string {
    return `${this.resourceType}.${this.resourceName}.expiration_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get private_key(): string {
    return `${this.resourceType}.${this.resourceName}.private_key`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get server_ca_cert(): string {
    return `${this.resourceType}.${this.resourceName}.server_ca_cert`;
  }

  get sha1_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.sha1_fingerprint`;
  }
}
