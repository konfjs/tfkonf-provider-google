import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunDomainMappingArgsMetadata {
  annotations?: { [key: string]: string };
  labels?: { [key: string]: string };
  namespace: string;
}

export interface GoogleCloudRunDomainMappingArgsSpec {
  certificate_mode?: string;
  force_override?: boolean;
  route_name: string;
}

export interface GoogleCloudRunDomainMappingArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleCloudRunDomainMappingArgs {
  location: string;
  name: string;
  metadata?: GoogleCloudRunDomainMappingArgsMetadata;
  spec: GoogleCloudRunDomainMappingArgsSpec;
  timeouts?: GoogleCloudRunDomainMappingArgsTimeouts;
}

export class google_cloud_run_domain_mapping extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudRunDomainMappingArgs) {
    const meta = {metadata:{isBlock:true},spec:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_run_domain_mapping", resourceName);
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

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
