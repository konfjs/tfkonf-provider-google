import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudIdsEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudIdsEndpointArgs {
  description?: string;
  location: string;
  name: string;
  network: string;
  severity: string;
  threat_exceptions?: string[];
  timeouts?: GoogleCloudIdsEndpointArgsTimeouts;
}

export class google_cloud_ids_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudIdsEndpointArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_ids_endpoint", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get endpoint_forwarding_rule(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_forwarding_rule`;
  }

  get endpoint_ip(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_ip`;
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

  get severity(): string {
    return `${this.resourceType}.${this.resourceName}.severity`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
