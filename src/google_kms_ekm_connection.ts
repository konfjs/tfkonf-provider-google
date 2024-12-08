import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsEkmConnectionArgsServiceResolversServerCertificates {
  raw_der: string;
}

export interface GoogleKmsEkmConnectionArgsServiceResolvers {
  hostname: string;
  service_directory_service: string;
  server_certificates: GoogleKmsEkmConnectionArgsServiceResolversServerCertificates[];
}

export interface GoogleKmsEkmConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleKmsEkmConnectionArgs {
  key_management_mode?: string;
  location: string;
  name: string;
  service_resolvers: GoogleKmsEkmConnectionArgsServiceResolvers[];
  timeouts?: GoogleKmsEkmConnectionArgsTimeouts;
}

export class google_kms_ekm_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleKmsEkmConnectionArgs) {
    const meta = {service_resolvers:{isBlock:true,server_certificates:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_ekm_connection", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get crypto_space_path(): string {
    return `${this.resourceType}.${this.resourceName}.crypto_space_path`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
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
}
